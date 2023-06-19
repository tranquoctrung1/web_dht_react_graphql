import { Col, Grid, NumberInput, Select, Text } from '@mantine/core';
import { IconX } from '@tabler/icons-react';

import { useState } from 'react';

import AddIndexInterface from '../types/addIndex.type';

const AddIndex = ({ index }: AddIndexInterface) => {
    const [searchValue, onSearchChange] = useState('');

    const onCloseAddIndexClicked = () => {
        console.log(111111);
    };

    return (
        <Grid>
            <Col span={5}>
                <Select
                    placeholder="Chọn vị trí"
                    searchable
                    onSearchChange={onSearchChange}
                    searchValue={searchValue}
                    nothingFound="Không tìm thấy"
                    data={['React', 'Angular', 'Svelte', 'Vue']}
                    clearable
                />
            </Col>
            <Col span={3}>
                <NumberInput
                    decimalSeparator=","
                    thousandsSeparator="."
                    precision={2}
                />
            </Col>
            <Col span={3}>
                <NumberInput
                    decimalSeparator=","
                    thousandsSeparator="."
                    precision={2}
                />
            </Col>
            <Col span={1}>
                <IconX
                    color="red"
                    size="1.5rem"
                    style={{ cursor: 'pointer' }}
                    onClick={onCloseAddIndexClicked}
                ></IconX>
            </Col>
        </Grid>
    );
};

export default AddIndex;
