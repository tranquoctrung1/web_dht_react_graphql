import { Col, Grid, Input, NumberInput } from '@mantine/core';
import { IconX } from '@tabler/icons-react';

import { useEffect, useState } from 'react';

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
    const [numberPrecious, setNumberPrecious] = useState('');
    const [datePublished, setDatePublished] = useState('');
    const [amountMeter, setAmountMeter] = useState(0);
    const [amountWater, setAmountWater] = useState(0);
    const [note, setNote] = useState('');

    const addWaterCustomerState = useSelector(AddWaterCustomerState);

    useEffect(() => {
        let waterCustomer = addWaterCustomerState[index];

        //@ts-ignore
        setNumberPrecious(waterCustomer.NumberPrecious);
        //@ts-ignore
        setDatePublished(waterCustomer.DatePublished);
        //@ts-ignore
        setAmountMeter(waterCustomer.AmountMeter);
        //@ts-ignore
        setAmountWater(waterCustomer.AmountWater);
        //@ts-ignore
        setNote(waterCustomer.Note);
    }, [addWaterCustomerState[index]]);

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
                    // value={numberPrecious}
                    defaultValue={numberPrecious}
                    onBlur={onNumberPreciousBlured}
                />
            </Col>
            <Col span={2}>
                <Input
                    placeholder="Ngày phát hành"
                    // value={datePublished}
                    defaultValue={datePublished}
                    onBlur={onDatePublishedBlured}
                />
            </Col>
            <Col span={2}>
                <NumberInput
                    decimalSeparator=","
                    thousandsSeparator="."
                    step={1}
                    min={0}
                    value={amountMeter}
                    //defaultValue={amountMeter}
                    onBlur={onAmountMeterBlured}
                />
            </Col>
            <Col span={2}>
                <NumberInput
                    decimalSeparator=","
                    thousandsSeparator="."
                    value={amountWater}
                    //defaultValue={amountWater}
                    onBlur={onAmountWaterBlured}
                />
            </Col>
            <Col span={3}>
                <Input
                    placeholder="Ghi chú"
                    // value={note}
                    defaultValue={note}
                    onBlur={onNoteBlured}
                />
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
