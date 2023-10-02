import {
    Code,
    createStyles,
    Group,
    Navbar,
    ScrollArea,
    Text,
} from '@mantine/core';
import {
    IconAdjustments,
    IconCalendarStats,
    IconChartBar,
    IconDeviceDesktop,
    IconEdit,
    IconFileAnalytics,
    IconGauge,
    IconInfoSquare,
    IconKey,
    IconLock,
    IconMapPin,
    IconNotes,
    IconReceipt2,
    IconUserCircle,
} from '@tabler/icons-react';
import { LinksGroup } from './navbarLinkGroup';

const mockdataCustomer = [
    {
        label: 'Sản Lượng',
        icon: IconReceipt2,
        initiallyOpened: false,
        links: [
            {
                label: 'Sản Lượng Các Công Ty Cấp Nước',
                link: '/quantityCompanyWaterSupply',
            },
        ],
    },

    {
        label: 'Tài Khoản',
        icon: IconKey,
        initiallyOpened: false,
        links: [
            {
                label: 'Đổi Mật Khẩu',
                link: '/changePassword',
            },
        ],
    },
];

const mockdata = [
    {
        label: 'Thiết Bị',
        icon: IconDeviceDesktop,
        initiallyOpened: false,
        links: [
            { label: 'Đồng Hồ ', link: '/meter' },
            { label: 'Bộ Hiển Thị', link: '/transmitter' },
            { label: 'Logger', link: '/logger' },
            { label: 'Nắp Hầm', link: '/cover' },
            { label: 'Tải File Đồng Hồ', link: '/downloadFileMeter' },
            { label: 'Xóa Đồng Hồ Không Sử Dụng', link: '/deleteMeter' },
            {
                label: 'Xóa Bộ Hiển Thi Không Sử Dụng',
                link: '/deleteTransmitter',
            },
            { label: 'Xóa Logger Không Sử Dụng', link: '/deleteLogger' },
        ],
    },
    {
        label: 'Điểm Lắp Đặt',
        icon: IconMapPin,
        initiallyOpened: false,
        links: [
            { label: 'Thông Tin Điểm Lắp Đặt', link: '/siteConfig' },
            { label: 'Cấu Hình Logger', link: '/loggerConfig' },
            { label: 'Thay Đồng Hồ', link: '/meterChanged' },
            { label: 'Thay Bộ Hiển Thị', link: '/transmitterChanged' },
            { label: 'Thay Bộ Logger', link: '/loggerChanged' },
            { label: 'Tải File Điểm Lắp Đặt', link: '/downloadFileSite' },
        ],
    },
    {
        label: 'Nhập Liệu',
        icon: IconEdit,
        initiallyOpened: false,
        links: [
            { label: 'Nhập Tay Chỉ Số', link: '/indexManual' },
            { label: 'Nhập Tay Sản Lượng', link: '/quantityManual' },
            { label: 'Sửa Dữ Liệu', link: '/dataManualChanged' },
        ],
    },
    {
        label: 'Thống Kê',
        icon: IconFileAnalytics,
        initiallyOpened: false,
        links: [
            { label: 'Điểm Lắp Đặt Xí Nghiệp Quản Lý', link: '/statisticSite' },
            {
                label: 'Theo Hiệu Cở (Xí Nghiệp Quản Lý)',
                link: '/statisticMarkSize',
            },
            {
                label: 'Thống Kê Tùy Chọn Điểm Lắp Đặt',
                link: '/statisticCustomChoiceSite',
            },
            {
                label: 'Thống Kê Tùy Chọn Hiệu Cỡ',
                link: '/statisticChooseModel',
            },
            {
                label: 'Hoạt Động Phát Sinh Trong Kỳ',
                link: '/statisticChangePeriod',
            },
            {
                label: 'Thống Kê Tùy Chọn Đồng Hồ',
                link: '/statisticCustomChoiceMeter',
            },
            {
                label: 'Thống Kê Tùy Chọn Bộ Hiển Thị',
                link: '/statisticCustomChoiceTransmitter',
            },
            {
                label: 'Thống Kê Tùy Chọn Logger',
                link: '/statisticCustomChoiceLogger',
            },
            { label: 'Lịch Sử Điểm Lắp Đặt', link: '/statisticHistorySite' },
            {
                label: 'Thời Gian Đồng Hồ Hoạt Động',
                link: '/statisticMeterWork',
            },
            {
                label: 'Đồng Hồ Đến Hạn Kiểm Định',
                link: '/statisticMeterExpireTime',
            },
            { label: 'Hồ Sơ Thiết Bị Đồng Hồ', link: '/statisticMeterInfo' },
            {
                label: 'Hồ Sơ Thiết Bị Bộ Hiển Thị',
                link: '/statisticTransmitterInfo',
            },
            { label: 'Hồ Sơ Thiết Bị Logger', link: '/statisticLoggerInfo' },
        ],
    },
    {
        label: 'Sản Lượng',
        icon: IconReceipt2,
        initiallyOpened: false,
        links: [
            {
                label: 'Sản Lượng Các Công Ty Cấp Nước',
                link: '/quantityCompanyWaterSupply',
            },
            { label: 'Sản Lượng Theo Quản Lý', link: '/quantityCompany' },
            { label: 'Sản Lượng Theo Nhóm ', link: '/quantityGroup' },
            { label: 'Sản Lượng Theo Nhóm 2', link: '/quantityGroup2' },
            { label: 'Sản Lượng Theo Nhóm 3', link: '/quantityGroup3' },
            { label: 'Sản Lượng Theo Nhóm 4', link: '/quantityGroup4' },
            { label: 'Sản Lượng Theo Nhóm 5', link: '/quantityGroup5' },
            {
                label: 'Sản Lượng Theo Cấp Đồng Hồ',
                link: '/quantityMeterLevel',
            },
            { label: 'Sản Lượng Tổng Hợp', link: '/quantityTotal' },
        ],
    },
    {
        label: 'Tiện Ích',
        icon: IconInfoSquare,
        initiallyOpened: false,
        links: [
            {
                label: 'Mẫu In',
                link: '/printer',
            },
            { label: 'Bản Đồ', link: '/map' },
            { label: 'Tải File Đồng Hồ', link: '/downloadMeterFile' },
            { label: 'Tải File Điểm Lắp Đặt', link: '/downloadSiteFile' },
            { label: 'Cảnh Báo', link: '/alarm' },
        ],
    },
    {
        label: 'Đồ Thị',
        icon: IconChartBar,
        initiallyOpened: false,
        links: [
            { label: 'Đồ Thị Một Điểm Lắp Đặt', link: '/chartSite' },
            { label: 'Đồ Thị Theo Nhóm Đồng Hồ 1', link: '/chartSiteGroup' },
            {
                label: 'Đồ Thị Theo Điểm Lắp Đặt Và Nhóm 1',
                link: '/chartSiteAndGroup',
            },
            { label: 'Đồ Thị Theo Nhóm Đồng Hồ 2', link: '/chartSiteGroup2' },
            {
                label: 'Đồ Thị Theo Điểm Lắp Đặt Và Nhóm 2',
                link: '/chartSiteAndGroup2',
            },
            { label: 'Đồ Thị 2 Nhóm Lắp Đặt', link: '/chart2SiteGroup' },
            {
                label: 'Đồ Thị Công Ty CP và Nhóm',
                link: '/chartCompanyAndGroup',
            },
            {
                label: 'Đồ Thị Công Ty CP và Nhóm 2',
                link: '/chartCompanyAndGroup2',
            },
            {
                label: 'Đồ Thị Theo Điểm Lắp Đặt Và Công Ty CP',
                link: '/chartSiteAndCompany',
            },
            { label: 'Đồ Thị Một Công Ty CP', link: '/chartCompany' },
            {
                label: 'Đồ Thị Một Đơn Vị Quản Lý',
                link: '/chartCompanyManager',
            },
        ],
    },
    {
        label: 'Admin Panel',
        icon: IconUserCircle,
        initiallyOpened: false,
        links: [
            {
                label: 'Xem Người Dùng',
                link: '/viewUser',
            },
            { label: 'Tạo Mới Người Dùng', link: '/createUser' },
            { label: 'Tạo Mới Dữ Liệu Khác', link: '/createOrderData' },
        ],
    },
    {
        label: 'Tài Khoản',
        icon: IconKey,
        initiallyOpened: false,
        links: [
            {
                label: 'Đổi Mật Khẩu',
                link: '/changePassword',
            },
        ],
    },
];

const useStyles = createStyles((theme) => ({
    navbar: {
        backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
        paddingBottom: 0,
    },

    header: {
        padding: theme.spacing.md,
        paddingTop: 0,
        marginLeft: -theme.spacing.md,
        marginRight: -theme.spacing.md,
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        borderBottom: `1px solid ${
            theme.colorScheme === 'dark'
                ? theme.colors.dark[4]
                : theme.colors.gray[3]
        }`,
    },

    links: {
        marginLeft: -theme.spacing.md,
        marginRight: -theme.spacing.md,
        padding: `${theme.spacing.md}px ${theme.spacing.xl}px`,
    },

    linksInner: {
        paddingTop: theme.spacing.xl,
        paddingBottom: theme.spacing.xl,
    },

    footer: {
        marginLeft: -theme.spacing.md,
        marginRight: -theme.spacing.md,
        borderTop: `1px solid ${
            theme.colorScheme === 'dark'
                ? theme.colors.dark[4]
                : theme.colors.gray[3]
        }`,
    },
}));

export function NavbarNested() {
    const { classes } = useStyles();

    const role = localStorage.getItem('Role');
    let links;

    if (role !== undefined && role !== null) {
        if (role == 'customer') {
            links = mockdataCustomer.map((item) => (
                <LinksGroup {...item} key={item.label} />
            ));
        } else {
            links = mockdata.map((item) => (
                <LinksGroup {...item} key={item.label} />
            ));
        }
    } else {
        links = mockdata.map((item) => (
            <LinksGroup {...item} key={item.label} />
        ));
    }

    return (
        <Navbar width={{ sm: 300 }} p="md" className={classes.navbar}>
            <Navbar.Section className={classes.header}>
                <Group position="apart">
                    <Text color="blue" weight={500} size="lg">
                        XNTD
                    </Text>
                    <Code sx={{ fontWeight: 700 }}>v1.0.0</Code>
                </Group>
            </Navbar.Section>

            <Navbar.Section
                grow
                className={classes.links}
                component={ScrollArea}
            >
                <div className={classes.linksInner}>{links}</div>
            </Navbar.Section>
        </Navbar>
    );
}
