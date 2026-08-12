import { useState, useEffect } from 'react';

import {
    Grid,
    Col,
    Text,
    Center,
    TextInput,
    Select,
    Button,
    Space,
    Pagination,
    Tooltip,
} from '@mantine/core';

import { DateInput } from '@mantine/dates';

import DataTable from 'react-data-table-component';

import { useTableTheme } from '../hooks/useTableTheme';

import { IconArrowBadgeUpFilled } from '@tabler/icons-react';

import { motion } from 'framer-motion';

import { useActivityLogsLazyQuery } from '../__generated__/graphql';

import { checkAdminRole, convertDateToTimeString } from '../utils/utils';

const PAGE_SIZE = 50;

const actionData = [
    { value: '', label: 'Tất cả' },
    { value: 'LOGIN', label: 'LOGIN' },
    { value: 'PAGE_VIEW', label: 'PAGE_VIEW' },
    { value: 'CLICK', label: 'CLICK' },
    { value: 'MUTATION', label: 'MUTATION' },
];

const ActivityLogPage = () => {
    const tableTheme = useTableTheme();
    const isAdmin = checkAdminRole();

    const [uid, setUid] = useState('');
    const [action, setAction] = useState('');
    const [pageFilter, setPageFilter] = useState('');
    const [dateFrom, setDateFrom] = useState<Date | null>(null);
    const [dateTo, setDateTo] = useState<Date | null>(null);

    const [data, setData] = useState<any[]>([]);
    const [total, setTotal] = useState(0);
    const [activePage, setActivePage] = useState(1);

    const [runQuery] = useActivityLogsLazyQuery({
        fetchPolicy: 'network-only',
    });

    const fetchLogs = (pageNumber: number) => {
        let dt: Date | null = null;
        if (dateTo !== null) {
            dt = new Date(dateTo);
            dt.setHours(23, 59, 59, 999);
        }

        runQuery({
            variables: {
                Uid: uid !== '' ? uid : null,
                Action: action !== '' ? action : null,
                Page: pageFilter !== '' ? pageFilter : null,
                dateFrom: dateFrom,
                dateTo: dt,
                skip: (pageNumber - 1) * PAGE_SIZE,
                limit: PAGE_SIZE,
            },
        })
            .then((res) => {
                const page = res?.data?.ActivityLogs;
                if (page !== null && page !== undefined) {
                    setData([...(page.items || [])]);
                    setTotal(page.total || 0);
                } else {
                    setData([]);
                    setTotal(0);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        if (isAdmin === true) {
            fetchLogs(1);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onSearchClicked = () => {
        setActivePage(1);
        fetchLogs(1);
    };

    const onPageChanged = (p: number) => {
        setActivePage(p);
        fetchLogs(p);
    };

    const columns = [
        {
            name: 'Thời gian',
            selector: (row: any) => row.CreatedAt,
            sortable: true,
            width: '190px',
            format: (row: any) => convertDateToTimeString(row.CreatedAt),
        },
        {
            name: 'Người dùng',
            selector: (row: any) => row.Uid,
            sortable: true,
            width: '150px',
        },
        {
            name: 'Quyền',
            selector: (row: any) => row.Role,
            sortable: true,
            width: '120px',
        },
        {
            name: 'Hành động',
            selector: (row: any) => row.Action,
            sortable: true,
            width: '130px',
        },
        {
            name: 'Trang',
            selector: (row: any) => row.Page,
            sortable: true,
            width: '200px',
        },
        {
            name: 'Đối tượng',
            selector: (row: any) => row.Target,
            sortable: true,
            width: '220px',
        },
        {
            name: 'Chi tiết',
            selector: (row: any) => row.Detail,
            sortable: false,
            grow: 2,
            format: (row: any) => {
                const d = row.Detail || '';
                if (d === '') {
                    return '';
                }
                const short = d.length > 60 ? `${d.slice(0, 60)}...` : d;
                return (
                    <Tooltip
                        label={d}
                        multiline
                        width={320}
                        withArrow
                        events={{ hover: true, focus: true, touch: true }}
                    >
                        <span>{short}</span>
                    </Tooltip>
                );
            },
        },
    ];

    if (isAdmin === false) {
        return (
            <Center>
                <Text color="red" weight={500} size="1.1rem">
                    Bạn không có quyền truy cập trang này
                </Text>
            </Center>
        );
    }

    const totalPages = total > 0 ? Math.ceil(total / PAGE_SIZE) : 1;

    return (
        <motion.div
            data-no-track
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <Grid>
                <Col span={12}>
                    <Center>
                        <Text weight={500} size="1.2rem">
                            Nhật ký hoạt động
                        </Text>
                    </Center>
                    <hr />
                </Col>

                <Col md={2}>
                    <TextInput
                        label="Người dùng"
                        placeholder="Người dùng"
                        value={uid}
                        onChange={(e) => setUid(e.currentTarget.value)}
                    />
                </Col>
                <Col md={2}>
                    <Select
                        label="Hành động"
                        placeholder="Hành động"
                        data={actionData}
                        value={action}
                        onChange={(v) => setAction(v || '')}
                    />
                </Col>
                <Col md={2}>
                    <TextInput
                        label="Trang"
                        placeholder="Trang"
                        value={pageFilter}
                        onChange={(e) => setPageFilter(e.currentTarget.value)}
                    />
                </Col>
                <Col md={2}>
                    <DateInput
                        valueFormat="DD/MM/YYYY"
                        label="Từ ngày"
                        placeholder="Từ ngày"
                        value={dateFrom}
                        onChange={(e) => setDateFrom(e)}
                        clearable
                    />
                </Col>
                <Col md={2}>
                    <DateInput
                        valueFormat="DD/MM/YYYY"
                        label="Đến ngày"
                        placeholder="Đến ngày"
                        value={dateTo}
                        onChange={(e) => setDateTo(e)}
                        clearable
                    />
                </Col>
                <Col
                    md={2}
                    style={{ display: 'flex', alignItems: 'flex-end' }}
                >
                    <Button
                        variant="filled"
                        color="green"
                        onClick={onSearchClicked}
                        fullWidth
                    >
                        Tìm kiếm
                    </Button>
                </Col>

                <Col span={12} style={{ maxWidth: '99%' }}>
                    <DataTable
                            theme={tableTheme}
                        columns={columns}
                        data={data}
                        title={
                            <Center>
                                <Text weight={500}>
                                    Danh sách hoạt động ({total})
                                </Text>
                            </Center>
                        }
                        sortIcon={<IconArrowBadgeUpFilled />}
                        highlightOnHover={true}
                        dense={false}
                    />
                    <Space h="md" />
                    <Center>
                        <Pagination
                            total={totalPages}
                            value={activePage}
                            onChange={onPageChanged}
                        />
                    </Center>
                </Col>
            </Grid>
        </motion.div>
    );
};

export default ActivityLogPage;
