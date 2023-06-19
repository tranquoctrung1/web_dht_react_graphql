import { Col, Grid, Input, NumberInput } from '@mantine/core';
import { IconX } from '@tabler/icons-react';

import { useState } from 'react';

import AddWaterCustomerInterface from '../types/addWaterCustomer.type';

const AddWaterCustomer = ({ index }: AddWaterCustomerInterface) => {
    const onCloseAddWaterCustomerClicked = () => {
        console.log(1111111);
    };

    return (
        <Grid>
            <Col span={2}>
                <Input placeholder="Số biên bản" />
            </Col>
            <Col span={2}>
                <Input placeholder="Ngày phát hành" />
            </Col>
            <Col span={2}>
                <NumberInput
                    decimalSeparator=","
                    thousandsSeparator="."
                    step={1}
                    min={0}
                />
            </Col>
            <Col span={2}>
                <NumberInput
                    decimalSeparator=","
                    thousandsSeparator="."
                    precision={2}
                />
            </Col>
            <Col span={3}>
                <Input placeholder="Ghi chú" />
            </Col>
            <Col span={1}>
                <IconX
                    color="red"
                    size="1.5rem"
                    style={{ cursor: 'pointer' }}
                    onClick={onCloseAddWaterCustomerClicked}
                ></IconX>
            </Col>
        </Grid>
    );
};

export default AddWaterCustomer;
