import { useEffect, useState } from 'react';

import {
    Badge,
    Button,
    Card,
    Center,
    Divider,
    Grid,
    Group,
    Image,
    Modal,
    Progress,
    ScrollArea,
    SimpleGrid,
    Text,
    ThemeIcon,
    TextInput,
} from '@mantine/core';

import {
    IconBuildingFactory2,
    IconCalendarTime,
    IconCheck,
    IconMail,
    IconKey,
    IconMapPin,
    IconPhone,
    IconPuzzle,
    IconRefresh,
    IconShieldCheck,
} from '@tabler/icons-react';

import { motion } from 'framer-motion';

import {
    useActivateLicenseMutation,
    useGetLicenseInfoLazyQuery,
} from '../__generated__/graphql';

import { checkAdminRole } from '../utils/utils';

import BavitechLogo from '../assets/logo-bavitech.png';

const LicenseInfoPage = () => {
    const isAdmin = checkAdminRole();

    const [moduleModalOpen, setModuleModalOpen] = useState(false);
    const [activateModalOpen, setActivateModalOpen] = useState(false);
    const [licenseKeyInput, setLicenseKeyInput] = useState('');
    const [activateError, setActivateError] = useState('');

    const [runQuery, { data, loading }] = useGetLicenseInfoLazyQuery({
        fetchPolicy: 'network-only',
    });

    const [activateLicense, { loading: activating }] =
        useActivateLicenseMutation();

    useEffect(() => {
        if (isAdmin === true) {
            runQuery();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (isAdmin === false) {
        return (
            <Center>
                <Text color="red" weight={500} size="1.1rem">
                    Bạn không có quyền truy cập trang này
                </Text>
            </Center>
        );
    }

    const info = data?.GetLicenseInfo;

    const fmtDate = (value?: string | null) =>
        value ? new Date(value).toLocaleDateString('vi-VN') : 'Vĩnh viễn';

    const onActivate = () => {
        setActivateError('');

        activateLicense({ variables: { licenseKey: licenseKeyInput.trim() } })
            .then((res) => {
                const result = res.data?.ActivateLicense;
                if (result?.success) {
                    setActivateModalOpen(false);
                    setLicenseKeyInput('');
                    runQuery();
                } else {
                    setActivateError(result?.error || 'Kích hoạt thất bại');
                }
            })
            .catch((err) => {
                setActivateError(err.message);
            });
    };

    return (
        <motion.div
            data-no-track
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <Grid>
                <Grid.Col span={12}>
                    <Group position="apart">
                        <Group>
                            <ThemeIcon color="green" size={42} radius="md">
                                <IconShieldCheck size={24} />
                            </ThemeIcon>
                            <div>
                                <Text weight={700} size="1.25rem">
                                    License
                                </Text>
                                <Text size="sm" color="dimmed">
                                    Quản lý bản quyền phần mềm - Quản lý đồng hồ tổng 
                                </Text>
                            </div>
                        </Group>
                        <Button
                            variant="outline"
                            size="sm"
                            radius="xl"
                            leftIcon={<IconRefresh size={16} />}
                            loading={loading}
                            onClick={() => runQuery()}
                        >
                            Tải lại
                        </Button>
                    </Group>
                </Grid.Col>

                {info?.payloadError ? (
                    <Grid.Col span={12}>
                        <Card withBorder radius="md" p="md" bg="red.0">
                            <Text color="red" weight={600}>
                                Không đọc được thông tin license:{' '}
                                {info.payloadError}
                            </Text>
                        </Card>
                    </Grid.Col>
                ) : null}

                <Grid.Col span={12}>
                    <Card withBorder radius="md" p="lg">
                        <Group position="apart" mb="md">
                            <Group spacing={8}>
                                <IconRefresh size={18} color="#27ae60" />
                                <Text weight={700}>Trạng thái</Text>
                            </Group>
                            <Badge
                                color={info?.hasToken ? 'green' : 'orange'}
                                size="lg"
                                radius="xl"
                            >
                                {info?.hasToken
                                    ? 'ĐANG HOẠT ĐỘNG'
                                    : 'CHƯA KÍCH HOẠT'}
                            </Badge>
                        </Group>

                        {info?.customerName ? (
                            <Group spacing={8} mb={6}>
                                <IconBuildingFactory2
                                    size={16}
                                    color="#8a8a8a"
                                />
                                <Text size="sm" color="dimmed">
                                    Khách hàng:
                                </Text>
                                <Text size="sm" weight={700}>
                                    {info.customerName}
                                </Text>
                            </Group>
                        ) : null}

                        <Group spacing={8} mb={6}>
                            <IconCalendarTime size={16} color="#8a8a8a" />
                            <Text size="sm" color="dimmed">
                                Hết hạn:
                            </Text>
                            <Text size="sm" weight={700}>
                                {fmtDate(info?.expiresAt)}
                            </Text>
                        </Group>

                        <Group spacing={8} mb={6}>
                            <IconPuzzle size={16} color="#8a8a8a" />
                            <Text size="sm" color="dimmed">
                                Số lượng module:
                            </Text>
                            <Text size="sm" weight={700}>
                                {(info?.moduleCount || 0) > 0
                                    ? `${info?.moduleCount} module`
                                    : 'Tất cả'}
                            </Text>
                            {(info?.moduleCount || 0) > 0 ? (
                                <Button
                                    variant="subtle"
                                    compact
                                    size="xs"
                                    onClick={() => setModuleModalOpen(true)}
                                >
                                    Xem chi tiết
                                </Button>
                            ) : null}
                        </Group>

                        {info?.licenseId ? (
                            <Group spacing={8} mb={6}>
                                <IconKey size={16} color="#8a8a8a" />
                                <Text size="sm" color="dimmed">
                                    License ID:
                                </Text>
                                <Text size="sm" weight={700} color="dimmed">
                                    {info.licenseId}
                                </Text>
                            </Group>
                        ) : null}

                        {info?.daysLeft !== null &&
                        info?.daysLeft !== undefined ? (
                            <div style={{ marginTop: '1em' }}>
                                <Progress
                                    value={info.percentLeft || 0}
                                    color="green"
                                    size="sm"
                                    radius="xl"
                                />
                                <Text size="xs" color="dimmed" mt={4}>
                                    Còn {info.daysLeft} ngày
                                </Text>
                            </div>
                        ) : null}
                    </Card>
                </Grid.Col>

                <Grid.Col span={12}>
                    <Center>
                        <Text size="sm" color="dimmed">
                            Nhà cung cấp
                        </Text>
                    </Center>
                </Grid.Col>

                <Grid.Col span={12}>
                    <Card withBorder radius="md" p="lg">
                        <Group align="flex-start" spacing="lg" noWrap>
                            <div
                                style={{
                                    width: 96,
                                    height: 96,
                                    flexShrink: 0,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: 8,
                                    background: '#ffffff',
                                    border: '1px solid rgba(0,0,0,0.08)',
                                    padding: 8,
                                }}
                            >
                                <Image
                                    src={BavitechLogo}
                                    alt="Bavitech"
                                    fit="contain"
                                    width={80}
                                    height={80}
                                />
                            </div>
                            <div style={{ flex: 1 }}>
                                <Text weight={700} size="1.05rem" mb={8}>
                                    Công ty Cổ phần Công nghệ Bách Việt
                                </Text>
                                <Group spacing={8} mb={4}>
                                    <IconMapPin size={16} color="#8a8a8a" />
                                    <Text size="sm">
                                        23 Phạm Thái Bường, P. Tân Hưng, TP.
                                        Hồ Chí Minh, Việt Nam
                                    </Text>
                                </Group>
                                <Group spacing={8} mb={4}>
                                    <IconPhone size={16} color="#8a8a8a" />
                                    <Text size="sm">
                                        Tel: +84 28 5413 0704 &nbsp;|&nbsp;
                                        Hotline: +84 90 3939 365
                                    </Text>
                                </Group>
                                <Group spacing={8}>
                                    <IconMail size={16} color="#8a8a8a" />
                                    <Text
                                        size="sm"
                                        component="a"
                                        href="mailto:sales@bavitech.com"
                                        color="blue"
                                    >
                                        sales@bavitech.com
                                    </Text>
                                </Group>
                            </div>
                        </Group>
                    </Card>
                </Grid.Col>

                <Grid.Col span={12}>
                    <Button
                        color="blue"
                        leftIcon={<IconRefresh size={16} />}
                        onClick={() => setActivateModalOpen(true)}
                    >
                        Kích hoạt lại / Đổi mã license
                    </Button>
                </Grid.Col>
            </Grid>

            <Modal
                opened={moduleModalOpen}
                onClose={() => setModuleModalOpen(false)}
                size="lg"
                radius="md"
                title={
                    <Group spacing={8}>
                        <IconPuzzle size={18} color="#27ae60" />
                        <Text weight={700}>Module được cấp phép</Text>
                        <Badge color="green" radius="xl" size="sm">
                            {info?.moduleCount || 0} module
                        </Badge>
                    </Group>
                }
            >
                <Divider mb="sm" />
                <ScrollArea.Autosize mah="60vh">
                    <SimpleGrid cols={2} spacing="sm" breakpoints={[
                        { maxWidth: 'sm', cols: 1 },
                    ]}>
                        {(info?.moduleCodesList || []).map((m) => (
                            <Card
                                key={m?.code}
                                withBorder
                                radius="md"
                                p="sm"
                                sx={(theme) => ({
                                    backgroundColor:
                                        theme.colorScheme === 'dark'
                                            ? theme.colors.dark[6]
                                            : theme.white,
                                    transition: 'transform 120ms ease',
                                    '&:hover': {
                                        transform: 'translateY(-1px)',
                                        borderColor: theme.colors.green[6],
                                    },
                                })}
                            >
                                <Group spacing={10} noWrap>
                                    <ThemeIcon
                                        color="green"
                                        variant="light"
                                        radius="md"
                                        size={30}
                                    >
                                        <IconCheck size={16} />
                                    </ThemeIcon>
                                    <div style={{ minWidth: 0 }}>
                                        <Text
                                            weight={600}
                                            size="sm"
                                            truncate
                                        >
                                            {m?.name}
                                        </Text>
                                        <Text
                                            size="xs"
                                            color="dimmed"
                                            style={{
                                                fontFamily:
                                                    'ui-monospace, SFMono-Regular, Menlo, monospace',
                                            }}
                                        >
                                            {m?.code}
                                        </Text>
                                    </div>
                                </Group>
                            </Card>
                        ))}
                    </SimpleGrid>
                </ScrollArea.Autosize>
            </Modal>

            <Modal
                opened={activateModalOpen}
                onClose={() => setActivateModalOpen(false)}
                title="Kích hoạt / đổi mã license"
            >
                <Text size="sm" color="dimmed" mb={8}>
                    Hardware ID: {info?.hardwareId}
                </Text>
                <TextInput
                    label="Mã license"
                    placeholder="Nhập mã license"
                    value={licenseKeyInput}
                    onChange={(e) => setLicenseKeyInput(e.currentTarget.value)}
                />
                {activateError ? (
                    <Text color="red" size="sm" mt={8}>
                        {activateError}
                    </Text>
                ) : null}
                <Group position="right" mt="md">
                    <Button
                        color="blue"
                        loading={activating}
                        onClick={onActivate}
                    >
                        Kích hoạt
                    </Button>
                </Group>
            </Modal>
        </motion.div>
    );
};

export default LicenseInfoPage;
