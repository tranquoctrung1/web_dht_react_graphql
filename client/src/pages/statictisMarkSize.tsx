import { Grid, Col, Button, Text, Center } from '@mantine/core';

import { useEffect, useState } from 'react';

import DataTable from 'react-data-table-component';
// @ts-ignore
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';

import { IconArrowBadgeUpFilled } from '@tabler/icons-react';

const onViewClicked = () => {};

const StatisticMarkSizePage = () => {
    return (
        <Grid>
            <Col span={12}>
                <Center>
                    <Button
                        variant="filled"
                        color="green"
                        onClick={onViewClicked}
                    >
                        Xem
                    </Button>
                </Center>
            </Col>
            <Col span={12} style={{ maxWidth: '99%' }}>
                <DataTableExtensions {...tableData}>
                    <DataTable
                        columns={columns}
                        data={data}
                        title={
                            <Center>
                                <Text weight={500}>
                                    Thống Kê Theo Hiệu Cở Xí Nghiệp Quản Lý
                                </Text>
                            </Center>
                        }
                        paginationPerPage={50}
                        sortIcon={<IconArrowBadgeUpFilled />}
                        defaultSortAsc={true}
                        pagination
                        highlightOnHover={true}
                        dense={false}
                    />
                </DataTableExtensions>
            </Col>
        </Grid>
    );
};

export default StatisticMarkSizePage;
