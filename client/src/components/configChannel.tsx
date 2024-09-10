import { Col, TextInput, Checkbox, Select, Text, Grid } from '@mantine/core';

import {
    ListChannelState,
    updateChannelId,
    updateChannelName,
    updateChannelType,
    updateUnit,
} from '../features/listChannel';

import { useSelector, useDispatch } from 'react-redux';

import { useGetAllUnitQuery } from '../__generated__/graphql';

import ConfigChannelInterface from '../types/configChannel.type';

import { useEffect, useState } from 'react';

import { isEmptyObject } from '../utils/utils';

const ConfigChannel = ({ index, LoggerId }: ConfigChannelInterface) => {
    const [channellId, setChannelId] = useState('');
    const [channelName, setChannelName] = useState('');
    const [unit, setUnit] = useState('');
    const [isPressure, setIsPressure] = useState(false);
    const [isForwardFlow, setIsForwardFlow] = useState(false);
    const [isPressure1, setIsPressure1] = useState(false);
    const [isReverseFlow, setIsReverseFlow] = useState(false);

    const { data: units, error: unitError } = useGetAllUnitQuery();

    const listChannel = useSelector(ListChannelState);

    const dispatch = useDispatch();

    useEffect(() => {
        if (!isEmptyObject(listChannel[index])) {
            if (
                listChannel[index] !== null &&
                listChannel[index] !== undefined
            ) {
                const channel = listChannel[index];

                //@ts-ignore
                setChannelId(channel._id);
                //@ts-ignore
                setChannelName(channel.Name);
                //@ts-ignore
                setUnit(channel.Unit);
                //@ts-ignore
                setIsPressure(channel.Pressure1);
                //@ts-ignore
                setIsPressure1(channel.Pressure2);
                //@ts-ignore
                setIsForwardFlow(channel.ForwardFlow);
                //@ts-ignore
                setIsReverseFlow(channel.ReverseFlow);
            } else {
                setChannelId('');
                setChannelName('');
                setUnit('');
                setIsPressure(false);
                setIsPressure1(false);
                setIsForwardFlow(false);
                setIsReverseFlow(false);
            }
        } else {
            setChannelId('');
            setChannelName('');
            setUnit('');
            setIsPressure(false);
            setIsPressure1(false);
            setIsForwardFlow(false);
            setIsReverseFlow(false);
        }
    }, [listChannel[index]]);

    if (unitError) {
        return (
            <Text color="red" weight={500}>
                Lỗi khi tải dữ liệu
            </Text>
        );
    }

    //@ts-ignore
    const unitData = [];

    if (units !== null && units !== undefined) {
        if (units.GetAllUnit !== null && units.GetAllUnit !== undefined) {
            for (const unit of units.GetAllUnit) {
                const obj = {
                    label: `${unit?.Unit}`,
                    value: unit?.Unit,
                };

                unitData.push(obj);
            }
        }
    }

    const onChannelIdBlured = (e: any) => {
        const obj = {
            index: index,
            _id: e.target.value,
            LoggerId: LoggerId,
        };

        //@ts-ignore
        dispatch(updateChannelId(obj));
    };

    const onChannelNameBlured = (e: any) => {
        const obj = {
            index: index,
            Name: e.target.value,
            LoggerId: LoggerId,
        };

        //@ts-ignore
        dispatch(updateChannelName(obj));
    };

    const onUnitChanged = (e: any) => {
        setUnit(e);

        const obj = {
            index: index,
            Unit: e,
            LoggerId: LoggerId,
        };

        //@ts-ignore
        dispatch(updateUnit(obj));
    };

    const onPressureChange = (e: any) => {
        setIsPressure(e.target.checked);

        const obj = {
            index: index,
            type: 1,
            value: e.target.checked,
            LoggerId: LoggerId,
        };

        //@ts-ignore
        dispatch(updateChannelType(obj));
    };

    const onPressure1Change = (e: any) => {
        setIsPressure1(e.target.checked);

        const obj = {
            index: index,
            type: 2,
            value: e.target.checked,
            LoggerId: LoggerId,
        };

        //@ts-ignore
        dispatch(updateChannelType(obj));
    };

    const onForwardFlowChange = (e: any) => {
        setIsForwardFlow(e.target.checked);

        const obj = {
            index: index,
            type: 3,
            value: e.target.checked,
            LoggerId: LoggerId,
        };

        //@ts-ignore
        dispatch(updateChannelType(obj));
    };

    const onReverseFlowChange = (e: any) => {
        setIsReverseFlow(e.target.checked);

        const obj = {
            index: index,
            type: 4,
            value: e.target.checked,
            LoggerId: LoggerId,
        };

        //@ts-ignore
        dispatch(updateChannelType(obj));
    };

    return (
        <Grid>
            <Col md={3}>
                <TextInput
                    label="Kênh ID"
                    placeholder="Kênh ID"
                    withAsterisk
                    value={channellId}
                    onChange={(e) => setChannelId(e.currentTarget.value)}
                    onBlur={onChannelIdBlured}
                ></TextInput>
            </Col>
            <Col md={3}>
                <TextInput
                    label="Tên kênh"
                    placeholder="Tên kênh"
                    value={channelName}
                    onChange={(e) => setChannelName(e.currentTarget.value)}
                    onBlur={onChannelNameBlured}
                ></TextInput>
            </Col>
            <Col md={2}>
                <Select
                    label="Đơn vị"
                    placeholder="Đơn vị"
                    searchable
                    nothingFound="Không tìm thấy"
                    //@ts-ignore
                    data={unitData}
                    value={unit}
                    onChange={onUnitChanged}
                />
            </Col>
            <Col md={1}>
                <Checkbox
                    style={{ marginTop: '1.5rem' }}
                    label="Áp lực trước"
                    checked={isPressure}
                    onChange={onPressureChange}
                />
            </Col>
            <Col md={1}>
                <Checkbox
                    style={{ marginTop: '1.5rem' }}
                    label="Áp lực sau"
                    checked={isPressure1}
                    onChange={onPressure1Change}
                />
            </Col>
            <Col md={1}>
                <Checkbox
                    style={{ marginTop: '1.5rem' }}
                    label="Lưu lượng thuận"
                    checked={isForwardFlow}
                    onChange={onForwardFlowChange}
                />
            </Col>
            <Col md={1}>
                <Checkbox
                    style={{ marginTop: '1.5rem' }}
                    label="Lưu lượng nghịch"
                    checked={isReverseFlow}
                    onChange={onReverseFlowChange}
                />
            </Col>
        </Grid>
    );
};

export default ConfigChannel;
