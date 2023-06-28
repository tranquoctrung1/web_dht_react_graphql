import { Col, Grid, Input, NumberInput } from '@mantine/core';
import { IconX } from '@tabler/icons-react';

import { useEffect, useState } from 'react';
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
    const [numberPrecious, setNumberPrecious] = useState('');
    const [content, setContent] = useState('');
    const [provider, setProvider] = useState('');
    const [amountWater, setAmountWater] = useState(0);
    const [note, setNote] = useState('');

    const addSubtractWaterB1State = useSelector(AddSubtractWaterB1State);

    const dispatch = useDispatch();

    useEffect(() => {
        let subtractWaterB1 = addSubtractWaterB1State[index];

        //@ts-ignore
        setNumberPrecious(subtractWaterB1.NumberPrecious);
        //@ts-ignore
        setContent(subtractWaterB1.Content);
        //@ts-ignore
        setProvider(subtractWaterB1.Provider);
        //@ts-ignore
        setAmountWater(subtractWaterB1.AmountWater);
        //@ts-ignore
        setNote(subtractWaterB1.Note);
    }, [addSubtractWaterB1State[index]]);

    const onCloseAddSubtractWaterB1Clicked = () => {
        dispatch(deleteAddSubtractWaterB1(index));
    };

    const onNumberPerciousBlured = (e: any) => {
        setNumberPrecious(e.target.value);
        let obj = {
            index: index,
            NumberPrecious: e.target.value,
        };
        //@ts-ignore
        dispatch(updateNumberPrecious(obj));
    };

    const onContentBlured = (e: any) => {
        setContent(e.target.value);
        let obj = {
            index: index,
            Content: e.target.value,
        };
        //@ts-ignore
        dispatch(updateContent(obj));
    };
    const onProviderBlured = (e: any) => {
        setProvider(e.target.value);
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
        setAmountWater(number);
        //@ts-ignore
        dispatch(updateAmountWater(obj));
    };
    const onNoteblured = (e: any) => {
        setNote(e.target.value);
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
                    defaultValue={numberPrecious}
                    //value={numberPrecious}
                    onBlur={onNumberPerciousBlured}
                />
            </Col>
            <Col span={3}>
                <Input
                    placeholder="Nội dung giảm trừ"
                    //value={content}
                    defaultValue={content}
                    onBlur={onContentBlured}
                />
            </Col>
            <Col span={2}>
                <Input
                    placeholder="Đơn vị thi công"
                    //value={provider}
                    defaultValue={provider}
                    onBlur={onProviderBlured}
                />
            </Col>
            <Col span={2}>
                <NumberInput
                    decimalSeparator=","
                    thousandsSeparator="."
                    placeholder="Lượng nước giảm trừ"
                    value={amountWater}
                    //defaultValue={amountWater}
                    onBlur={onAmountWaterBlured}
                />
            </Col>
            <Col span={2}>
                <Input
                    placeholder="Ghi chú"
                    //value={note}
                    defaultValue={note}
                    onBlur={onNoteblured}
                />
            </Col>
            <Col span={1}>
                <IconX
                    color="red"
                    size="1.5rem"
                    style={{ cursor: 'pointer' }}
                    onClick={onCloseAddSubtractWaterB1Clicked}
                ></IconX>
            </Col>
        </Grid>
    );
};

export default AddSubtractWaterB1;
