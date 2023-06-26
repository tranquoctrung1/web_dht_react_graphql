import { Col, Grid, Input, NumberInput } from '@mantine/core';
import { IconX } from '@tabler/icons-react';

import { useState } from 'react';
import AddSubtractWaterB2Interface from '../types/addSubtractWaterB2.type';

import { useDispatch, useSelector } from 'react-redux';

import {
    AddSubtractWaterB2State,
    deleteAddSubtractWaterB2,
    updateAmountWater,
    updateContent,
    updateNote,
    updateNumberPrecious,
    updateProvider,
} from '../features/addSubtractWaterB2';

const AddSubtractWaterB2 = ({ index }: AddSubtractWaterB2Interface) => {
    const addSubtractWaterB2State = useSelector(AddSubtractWaterB2State);

    const dispatch = useDispatch();

    const onCloseAddSubtractWaterB2Clicked = () => {
        dispatch(deleteAddSubtractWaterB2(index));
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
                    onClick={onCloseAddSubtractWaterB2Clicked}
                ></IconX>
            </Col>
        </Grid>
    );
};

export default AddSubtractWaterB2;
