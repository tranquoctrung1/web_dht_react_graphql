import { useEffect, useState } from 'react';

import {
    Button,
    Card,
    Center,
    Group,
    Image,
    MantineProvider,
    Text,
    TextInput,
} from '@mantine/core';

import { IconShieldLock } from '@tabler/icons-react';

import Logo from '../assets/logo.png';

import {
    useActivateLicenseMutation,
    useGetLicenseInfoLazyQuery,
} from '../__generated__/graphql';

const REASON_LABELS: Record<string, string> = {
    not_activated: 'Phần mềm chưa được kích hoạt bản quyền.',
    hardware_mismatch: 'Mã license không khớp với thiết bị này.',
    expired: 'License đã hết hạn.',
    never_synced: 'Chưa đồng bộ được với máy chủ cấp phép.',
    offline_grace_expired:
        'Đã quá thời gian cho phép hoạt động offline, vui lòng kết nối mạng.',
};

// Chặn toàn bộ ứng dụng khi license không hợp lệ - port của
// nodejs_scada_web_dht/middleware/licenseGate.js (redirect mọi route trừ
// /license/* về trang kích hoạt). Ở đây render thay vì redirect vì SPA không
// có route server-side để chặn.
const LicenseGatePage = ({
    reason,
    onActivated,
}: {
    reason: string | null | undefined;
    onActivated: () => void;
}) => {
    const [licenseKeyInput, setLicenseKeyInput] = useState('');
    const [error, setError] = useState('');

    const [getInfo, { data }] = useGetLicenseInfoLazyQuery({
        fetchPolicy: 'network-only',
    });

    const [activateLicense, { loading }] = useActivateLicenseMutation();

    useEffect(() => {
        getInfo();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onActivate = () => {
        setError('');

        activateLicense({ variables: { licenseKey: licenseKeyInput.trim() } })
            .then((res) => {
                const result = res.data?.ActivateLicense;
                if (result?.success) {
                    onActivated();
                } else {
                    setError(result?.error || 'Kích hoạt thất bại');
                }
            })
            .catch((err) => {
                setError(err.message);
            });
    };

    return (
        <MantineProvider
            // @ts-ignore comment
            theme={{ colorScheme: 'light' }}
            withGlobalStyles
            withNormalizeCSS
        >
            <Center style={{ minHeight: '100vh', background: '#ecf0f12b' }}>
                <Card
                    withBorder
                    radius="md"
                    p="xl"
                    style={{ width: 420, maxWidth: '92vw' }}
                >
                    <Center mb="md">
                        <Image width={60} src={Logo} alt="logo" />
                    </Center>
                    <Group position="center" spacing={8} mb={4}>
                        <IconShieldLock size={20} color="#e67e22" />
                        <Text weight={700} size="1.1rem">
                            Kích hoạt bản quyền
                        </Text>
                    </Group>
                    <Text
                        align="center"
                        size="sm"
                        color="dimmed"
                        mb="md"
                    >
                        {(reason && REASON_LABELS[reason]) ||
                            'Phần mềm chưa được kích hoạt bản quyền.'}
                    </Text>

                    {data?.GetLicenseInfo?.hardwareId ? (
                        <Text
                            size="xs"
                            color="dimmed"
                            align="center"
                            mb="md"
                            style={{ fontFamily: 'monospace' }}
                        >
                            Hardware ID: {data.GetLicenseInfo.hardwareId}
                        </Text>
                    ) : null}

                    <TextInput
                        label="Mã license"
                        placeholder="Nhập mã license"
                        value={licenseKeyInput}
                        onChange={(e) =>
                            setLicenseKeyInput(e.currentTarget.value)
                        }
                    />

                    {error ? (
                        <Text color="red" size="sm" mt={8}>
                            (*) Kích hoạt thất bại: {error}
                        </Text>
                    ) : null}

                    <Button
                        fullWidth
                        color="blue"
                        mt="md"
                        loading={loading}
                        onClick={onActivate}
                    >
                        Kích hoạt
                    </Button>
                </Card>
            </Center>
        </MantineProvider>
    );
};

export default LicenseGatePage;
