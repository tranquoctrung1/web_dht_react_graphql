import { Center, Col, Grid, NumberInput, Select, Text } from '@mantine/core';
import { DateInput, DatePickerInput } from '@mantine/dates';
import { IconMapPinFilled, IconX } from '@tabler/icons-react';

import { useState } from 'react';
import AddLocationInterface from '../types/addLocation.type';

const AddLocation = ({ index }: AddLocationInterface) => {
    const [searchValue, onSearchChange] = useState('');
    const [averageDate, setAverageDate] = useState<Date[]>([]);

    const onCloseAddLocationClicked = () => {
        console.log(11111);
    };

    return (
        <Grid>
            <Col
                span={12}
                style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'flex-end',
                }}
            >
                <IconX
                    size="1.5rem"
                    color="red"
                    style={{ cursor: 'pointer' }}
                    onClick={onCloseAddLocationClicked}
                ></IconX>
            </Col>
            <Col span={12}>
                <Select
                    label={
                        <>
                            <Center>
                                <IconMapPinFilled size="1.125rem"></IconMapPinFilled>
                                <Text weight={500}>Vị trí</Text>
                            </Center>
                        </>
                    }
                    placeholder="Chọn vị trí"
                    searchable
                    onSearchChange={onSearchChange}
                    searchValue={searchValue}
                    nothingFound="Không tìm thấy"
                    data={['React', 'Angular', 'Svelte', 'Vue']}
                    clearable
                />
            </Col>
            <Col span={6}>
                <DateInput
                    valueFormat="DD/MM/YYYY"
                    label="Kỳ"
                    placeholder="Kỳ"
                    mx="auto"
                />
            </Col>
            <Col span={6}>
                <NumberInput
                    decimalSeparator=","
                    thousandsSeparator="."
                    label="Sản lượng"
                    precision={2}
                />
            </Col>
            <Col span={6}>
                <DateInput
                    valueFormat="DD/MM/YYYY"
                    label="Kỳ"
                    placeholder="Kỳ"
                    mx="auto"
                />
            </Col>
            <Col span={6}>
                <NumberInput
                    decimalSeparator=","
                    thousandsSeparator="."
                    label="Sản lượng"
                    precision={2}
                />
            </Col>
            <Col span={6}>
                <DateInput
                    valueFormat="DD/MM/YYYY"
                    label="Kỳ"
                    placeholder="Kỳ"
                    mx="auto"
                />
            </Col>
            <Col span={6}>
                <NumberInput
                    decimalSeparator=","
                    thousandsSeparator="."
                    label="Sản lượng"
                    precision={2}
                />
            </Col>
            <Col span={12}>
                <DatePickerInput
                    type="multiple"
                    label="Ngày trung bình"
                    placeholder="Ngày trung bình"
                    value={averageDate}
                    onChange={setAverageDate}
                    mx="auto"
                />
            </Col>
        </Grid>
    );
};

export default AddLocation;
