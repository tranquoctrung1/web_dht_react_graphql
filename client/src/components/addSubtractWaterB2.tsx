import { Col, Grid, Input, NumberInput } from '@mantine/core';
import { IconX } from '@tabler/icons-react';

import { useState } from 'react';
import AddSubtractWaterB2Interface from '../types/addSubtractWaterB2.type';

const AddSubtractWaterB2 = ({ index }: AddSubtractWaterB2Interface) => {
    const onCloseAddSubtractWaterB2Clicked = () => {
        console.log(1111111);
    };

    return (
        <Grid>
            <Col span={2}>
                <Input placeholder="Số biên bản" />
            </Col>
            <Col span={3}>
                <Input placeholder="Nội dung giảm trừ" />
            </Col>
            <Col span={2}>
                <Input placeholder="Đơn vị thi công" />
            </Col>
            <Col span={2}>
                <Input placeholder="Lượng nước giảm trừ" />
            </Col>
            <Col span={2}>
                <Input placeholder="Ghi chú" />
            </Col>
            <Col span={1}>
                <IconX
                    color="red"
                    size="1.5rem"
                    style={{ cursor: 'pointer' }}
                    onClick={onCloseAddSubtractWaterB2Clicked}
                ></IconX>
            </Col>
        </Grid>
    );
};

export default AddSubtractWaterB2;
