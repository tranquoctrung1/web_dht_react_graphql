import { Col, Grid, Input, NumberInput } from '@mantine/core';
import { IconX } from '@tabler/icons-react';

import { useState } from 'react';

import AddWaterCustomerInterface from '../types/addWaterCustomer.type';

import {
    AddWaterCustomerState,
    deleteAddWaterCustomer,
    updateAmountMeter,
    updateAmountWater,
    updateDatePublished,
    updateNote,
    updateNumberPrecious,
} from '../features/addWaterCustomer';

import { useDispatch, useSelector } from 'react-redux';

const AddWaterCustomer = ({ index }: AddWaterCustomerInterface) => {
    const addWaterCustomerState = useSelector(AddWaterCustomerState);

    const dispatch = useDispatch();

    const onCloseAddWaterCustomerClicked = () => {
        dispatch(deleteAddWaterCustomer(index));
    };

    const onNumberPreciousBlured = (e: any) => {
        let obj = {
            index: index,
            NumberPrecious: e.target.value,
        };

        //@ts-ignore
        dispatch(updateNumberPrecious(obj));
    };
    const onDatePublishedBlured = (e: any) => {
        let obj = {
            index: index,
            DatePublished: e.target.value,
        };

        //@ts-ignore
        dispatch(updateDatePublished(obj));
    };

    const onAmountMeterBlured = (e: any) => {
        let number = 0;
        if (e.target.value !== '') {
            number = parseInt(e.target.value);
        } else {
            number = 0;
        }

        let obj = {
            index: index,
            AmountMeter: number,
        };

        //@ts-ignore
        dispatch(updateAmountMeter(obj));
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

    const onNoteBlured = (e: any) => {
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
                    onBlur={onNumberPreciousBlured}
                />
            </Col>
            <Col span={2}>
                <Input
                    placeholder="Ngày phát hành"
                    onBlur={onDatePublishedBlured}
                />
            </Col>
            <Col span={2}>
                <NumberInput
                    decimalSeparator=","
                    thousandsSeparator="."
                    step={1}
                    min={0}
                    onBlur={onAmountMeterBlured}
                />
            </Col>
            <Col span={2}>
                <NumberInput
                    decimalSeparator=","
                    thousandsSeparator="."
                    onBlur={onAmountWaterBlured}
                />
            </Col>
            <Col span={3}>
                <Input placeholder="Ghi chú" onBlur={onNoteBlured} />
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
