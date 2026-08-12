# web-dht-upgrade

Water-utility (DHT) monitoring system. Three parts: `client/` (React 18 + Vite + Apollo + Mantine 6), `server/` (Apollo Server 5 + Express 5 + MongoDB, packaged to `server.exe`), `server-upload/` (Express 4 + multer, packaged to `server-upload.exe`).

## Harness: DHT Full-Stack Development

**Goal:** ship full-stack features across GraphQL schema, resolvers, MongoDB models, and the React client with cross-boundary consistency verified.

**Trigger:** for any feature or fix touching both `client/` and `server*/`, use the `dht-feature` skill (orchestrator). Single-layer edits: use `dht-backend-dev` or `dht-frontend-dev` directly. Verification requests: `dht-qa-verify`. Simple questions may be answered directly.

**Change log:**
| Date | Change | Target | Reason |
|------|--------|--------|--------|
| 2026-07-04 | Initial harness build | all (3 agents, 4 skills) | - |

## Known gaps / chưa hoàn thiện

- **Item 3 — "Đồng bộ dữ liệu nhập tay cho logger không hoạt động từ web đht cũ sang web mới":** bỏ qua theo yêu cầu — không có DB/API để truy cập web đht cũ.

## Resolved (tham khảo quy tắc phân bổ theo ngày)

- **Item 6/7/8 — cập nhật sản lượng công ty khi lưu biên bản** (`server/schema/resolvers/QuantityDayCompany.resolver.js`, hàm `getPreciousOverrides`): khi biên bản (`t_Precious`) được lưu, các mục sau được áp dụng ngay vào báo cáo sản lượng công ty theo-ngày, join theo site + khoảng ngày:
  - **Khóa van** (`LockValve`) — ép sản lượng = 0 cho toàn bộ ngày trong kỳ biên bản.
  - **Tính TB** (`Location[].AverageDate`/`TotalQuantity`) — vì đây là số đã được tính trung bình cho các khoảng ngày người dùng chọn (`AverageDate: [[String]]`, có thể nhiều khoảng rời nhau), tổng được chia đều cho đúng số ngày trong các khoảng đó rồi gán cho từng ngày, đảm bảo cộng lại đúng bằng số đã lưu.
  - **Chỉ số biên bản** (`Index[].PreviousPeriodIndex/NextPeriodIndex`) — không có khoảng ngày cụ thể (chỉ áp cho cả kỳ biên bản `Start`-`End`), nên chia đều delta chỉ số cho số ngày của cả kỳ. Dấu số được đảo khi site thuộc `IstDistributionCompany` khác công ty đang xem báo cáo, giống logic phía client (`quantityPrecious.tsx` renderWaterMeter).
  - Thứ tự ưu tiên khi trùng ngày (cái sau đè cái trước): Tính TB → Chỉ số → Khóa van — khớp với thứ tự client đã dùng khi hiển thị biên bản.
