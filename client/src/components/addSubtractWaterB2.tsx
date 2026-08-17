import { Col, Grid, Input, NumberInput } from '@mantine/core';
import { IconX } from '@tabler/icons-react';

import { useEffect, useState } from 'react';
import AddSubtractWaterB2Interface from '../types/addSubtractWaterB2.type';

import { useDispatch, useSelector } from 'react-redux';

import {
    AddSubtractWaterB2State,
    deleteAddSubtractWaterB2,
    updateAmountWater,
    updateContent,
    updateDatePublished,
    updateNote,
    updateNumberPrecious,
    updateProvider,
} from '../features/addSubtractWaterB2';

const AddSubtractWaterB2 = ({ index }: AddSubtractWaterB2Interface) => {
    const [numberPrecious, setNumberPrecious] = useState('');
    const [datePublished, setDatePublished] = useState('');
    const [content, setContent] = useState('');
    const [provider, setProvider] = useState('');
    const [amountWater, setAmountWater] = useState(0);
    const [note, setNote] = useState('');

    const addSubtractWaterB2State = useSelector(AddSubtractWaterB2State);

    const dispatch = useDispatch();

    useEffect(() => {
        let subtractWaterB2 = addSubtractWaterB2State[index];

        //@ts-ignore
        setNumberPrecious(subtractWaterB2.NumberPrecious);
        //@ts-ignore
        setDatePublished(subtractWaterB2.DatePublished);
        //@ts-ignore
        setContent(subtractWaterB2.Content);
        //@ts-ignore
        setProvider(subtractWaterB2.Provider);
        //@ts-ignore
        setAmountWater(subtractWaterB2.AmountWater);
        //@ts-ignore
        setNote(subtractWaterB2.Note);
    }, [addSubtractWaterB2State[index]]);

    const onCloseAddSubtractWaterB2Clicked = () => {
        dispatch(deleteAddSubtractWaterB2(index));
    };

    const onNumberPerciousBlured = (e: any) => {
        let obj = {
            index: index,
            NumberPrecious: e.target.value,
        };
        setNumberPrecious(e.target.value);
        //@ts-ignore
        dispatch(updateNumberPrecious(obj));
    };

    const onDatePublishedBlured = (e: any) => {
        let obj = {
            index: index,
            DatePublished: e.target.value,
        };
        setDatePublished(e.target.value);
        //@ts-ignore
        dispatch(updateDatePublished(obj));
    };

    const onContentBlured = (e: any) => {
        let obj = {
            index: index,
            Content: e.target.value,
        };
        setContent(e.target.value);
        //@ts-ignore
        dispatch(updateContent(obj));
    };
    const onProviderBlured = (e: any) => {
        let obj = {
            index: index,
            Provider: e.target.value,
        };

        setProvider(e.target.value);
        //@ts-ignore
        dispatch(updateProvider(obj));
    };
    const onAmountWaterBlured = (e: any) => {
        let number = 0;
        if (e.target.value !== '') {
            number = parseFloat(e.target.value);
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
        <Grid
            style={{
                borderBottom: '1px dashed #dee2e6',
                paddingBottom: '8px',
                marginBottom: '4px',
            }}
        >
            <Col span={2}>
                <Input
                    placeholder="Số biên bản"
                    //value={numberPrecious}
                    defaultValue={numberPrecious}
                    onBlur={onNumberPerciousBlured}
                />
            </Col>
            <Col span={2}>
                <Input
                    type="date"
                    placeholder="Ngày phát hành"
                    defaultValue={datePublished}
                    onBlur={onDatePublishedBlured}
                />
            </Col>
            <Col span={3}>
                <Input
                    placeholder="Đơn vị thi công"
                    //value={provider}
                    defaultValue={provider}
                    onBlur={onProviderBlured}
                />
            </Col>
            <Col span={3}>
                <NumberInput
                    decimalSeparator=","
                    thousandsSeparator="."
                    value={amountWater}
                    precision={3}
                    //defaultValue={amountWater}
                    placeholder="Lượng nước giảm trừ"
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
            <Col span={11}>
                <Input
                    placeholder="Nội dung giảm trừ"
                    //value={content}
                    defaultValue={content}
                    onBlur={onContentBlured}
                    size="md"
                />
            </Col>
            <Col span={1}>
                <IconX
                    color="red"
                    size="1.5rem"
                    style={{ cursor: 'pointer', marginTop: '8px' }}
                    onClick={onCloseAddSubtractWaterB2Clicked}
                ></IconX>
            </Col>
        </Grid>
    );
};

export default AddSubtractWaterB2;
