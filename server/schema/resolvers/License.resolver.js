const LicenseStateModel = require('../../models/LicenseState.model');
const hardwareIdService = require('../../services/license/hardwareId');
const blpClient = require('../../services/license/blpClient');
const verify = require('../../services/license/verify');
const gateCheck = require('../../services/license/gateCheck');

// Diễn giải license_type từ BLP (app/models/license.py: LicenseType enum).
const LICENSE_TYPE_LABELS = {
    perpetual: 'Vĩnh viễn (mua đứt, không hết hạn)',
    subscription: 'Thuê bao (gia hạn định kỳ theo thời gian)',
    trial: 'Dùng thử (giới hạn thời gian)',
};

// Tên hiển thị tiếng Việt cho từng module code (token chỉ chứa code, không có tên).
// Khớp với catalog module bên BLP dashboard (Products & Modules).
const MODULE_LABELS = {
    map: 'Bản Đồ Tổng Thể',
    dashboard: 'DashBoard',
    pressureReport: 'Áp Lực',
    quantityReportHour: 'Sản Lượng Theo Giờ',
    quantityReportDay: 'Sản Lượng Theo Ngày',
    quantityReportMonth: 'Sản Lượng Theo Tháng',
    quantityReportYear: 'Sản Lượng Theo Năm',
    tableDataCurrent: 'Bảng Giá Trị',
    dataHourLogger: 'Dữ Liệu Logger Theo Giờ',
    dataDayLogger: 'Dữ Liệu Logger Theo Ngày',
    dataMonthLogger: 'Dữ Liệu Logger Theo Tháng',
    dataTableDetailLogger: 'Dữ Liệu Chi Tiết Logger',
    dataManual: 'Dữ Liệu Nhập Tay',
    dataOnline: 'Dữ Liệu Online',
    logger: 'Logger',
    siteConfig: 'Cấu Hình Điểm Lắp Đặt',
    createUser: 'Tạo Người Dùng',
    viewUser: 'Xem Người Dùng',
    viewStaff: 'Xem Nhân Viên',
    viewConsumer: 'Xem Khách Hàng',
    permissionStaff: 'Phân Quyền Nhân Viên',
    permissionConsumer: 'Phân Quyền Khách Hàng',
    flowDay: 'Tổng Hợp Sản Lượng Ngày',
    vanController: 'Điều Khiển Van',
};

module.exports = {
    Query: {
        // Nút "Tải lại" trên client gọi lại đúng query này -> heartbeat ngay
        // (không đợi chu kỳ nền 15 phút), nên đổi module/ngày hết hạn/loại license
        // trên BLP thấy cập nhật ngay thay vì phải restart app hoặc kích hoạt lại.
        GetLicenseInfo: async (parent, {}, context, info) => {
            await hardwareIdService.getOrCreateHardwareId();

            await blpClient.heartbeat();

            const state = await LicenseStateModel.GetState();

            let payload = null;
            let payloadError = '';

            if (state && state.signedToken) {
                try {
                    payload = verify.verifyToken(state.signedToken);
                } catch (err) {
                    payloadError = err.message;
                }
            }

            const fmt = (d) => (d ? new Date(d).toISOString() : null);

            // Số ngày còn lại tới khi hết hạn + % thanh tiến trình (dựa trên khoảng issuedAt -> expiresAt).
            let daysLeft = null;
            let percentLeft = 100;

            if (payload && payload.expires_at) {
                const now = Date.now();
                const expiresMs = new Date(payload.expires_at).getTime();
                daysLeft = Math.max(0, Math.ceil((expiresMs - now) / 86400000));

                if (payload.issued_at) {
                    const issuedMs = new Date(payload.issued_at).getTime();
                    const totalDays = Math.max(
                        1,
                        Math.ceil((expiresMs - issuedMs) / 86400000),
                    );
                    percentLeft = Math.min(
                        100,
                        Math.max(0, Math.round((daysLeft / totalDays) * 100)),
                    );
                }
            }

            const moduleCodes =
                payload && payload.module_codes ? payload.module_codes : [];
            const uniqueModuleCodes = [...new Set(moduleCodes)];

            return {
                hasToken: !!(state && state.signedToken),
                hardwareId: state ? state.hardwareId : '',
                licenseKey: state ? state.licenseKey : '',
                lastSuccessAt: state && state.lastSuccessAt
                    ? new Date(state.lastSuccessAt).toISOString()
                    : null,
                lastError: state ? state.lastError : null,
                offlineGraceDays: state ? state.offlineGraceDays : null,
                payloadError: payloadError,
                productCode: payload ? payload.product_code : '',
                licenseType: payload ? payload.license_type : '',
                licenseTypeLabel: payload
                    ? LICENSE_TYPE_LABELS[payload.license_type] ||
                      payload.license_type
                    : '',
                seats: payload ? payload.seats : null,
                moduleCodesList: uniqueModuleCodes.map((code) => ({
                    code,
                    name: MODULE_LABELS[code] || code,
                })),
                moduleCount: uniqueModuleCodes.length,
                issuedAt: payload ? fmt(payload.issued_at) : null,
                expiresAt: payload ? fmt(payload.expires_at) : null,
                licenseId: payload ? payload.license_id : '',
                customerId: payload ? payload.customer_id : '',
                customerName: payload
                    ? payload.customer_name || payload.customer_id || ''
                    : '',
                daysLeft: daysLeft,
                percentLeft: percentLeft,
            };
        },

        CheckLicenseGate: async (parent, {}, context, info) => {
            return await gateCheck.checkGate();
        },
    },
    Mutation: {
        ActivateLicense: async (parent, { licenseKey }, context, info) => {
            try {
                await blpClient.activate((licenseKey || '').trim());

                return { success: true, error: null };
            } catch (err) {
                return { success: false, error: err.message };
            }
        },
    },
};
