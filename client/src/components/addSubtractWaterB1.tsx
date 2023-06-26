import { Button, Col, Grid, Input, NumberInput } from '@mantine/core';
import { IconX } from '@tabler/icons-react';

import { useState } from 'react';
import AddSubtractWaterB1Interface from '../types/addSubtractWaterB1.type';

import { useDispatch, useSelector } from 'react-redux';

import {
    AddSubtractWaterB1State,
    deleteAddSubtractWaterB1,
    updateAmountWater,
    updateContent,
    updateNote,
    updateNumberPrecious,
    updateProvider,
} from '../features/addSubtractWaterB1';

const AddSubtractWaterB1 = ({ index }: AddSubtractWaterB1Interface) => {
    const addSubtractWaterB1State = useSelector(AddSubtractWaterB1State);

    const dispatch = useDispatch();

    const onCloseAddSubtractWaterB1Clicked = () => {
        dispatch(deleteAddSubtractWaterB1(index));
    };

    const onNumberPerciousBlured = (e: any) => {
        let obj = {
            index: index,
            NumberPrecious: e.target.value,
        };

        //@ts-ignore
        dispatch(updateNumberPrecious(obj));
    };

    const onContentBlured = (e: any) => {
        let obj = {
            index: index,
            Content: e.target.value,
        };

        //@ts-ignore
        dispatch(updateContent(obj));
    };
    const onProviderBlured = (e: any) => {
        let obj = {
            index: index,
            Provider: e.target.value,
        };

        //@ts-ignore
        dispatch(updateProvider(obj));
    };
    const onAmountWaterBlured = (e: any) => {
        let number = 0;
        if (e.target.value !== '') {
            number = parseInt(e.target.value);
        } else {
            number = 0;
        }

        let obj = {
            index: index,
            AmountWater: number,
        };

        //@ts-ignore
        dispatch(updateAmountWater(obj));
    };
    const onNoteblured = (e: any) => {
        let obj = {
            index: index,
            Note: e.target.value,
        };

        //@ts-ignore
        dispatch(updateNote(obj));
    };

    const onTestClicked = () => {
        console.log(addSubtractWaterB1State);
    };

    return (
        <Grid>
            <Col span={2}>
                <Input
                    placeholder="Số biên bản"
                    onBlur={onNumberPerciousBlured}
                />
            </Col>
            <Col span={3}>
                <Input
                    placeholder="Nội dung giảm trừ"
                    onBlur={onContentBlured}
                />
            </Col>
            <Col span={2}>
                <Input
                    placeholder="Đơn vị thi công"
                    onBlur={onProviderBlured}
                />
            </Col>
            <Col span={2}>
                <NumberInput
                    decimalSeparator=","
                    thousandsSeparator="."
                    placeholder="Lượng nước giảm trừ"
                    onBlur={onAmountWaterBlured}
                />
            </Col>
            <Col span={2}>
                <Input placeholder="Ghi chú" onBlur={onNoteblured} />
            </Col>
            <Col span={1}>
                <IconX
                    color="red"
                    size="1.5rem"
                    style={{ cursor: 'pointer' }}
                    onClick={onCloseAddSubtractWaterB1Clicked}
                ></IconX>
            </Col>
            <Col span={12}>
                <Button onClick={onTestClicked}> test</Button>
            </Col>
        </Grid>
    );
};

export default AddSubtractWaterB1;
