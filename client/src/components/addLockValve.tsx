import { Col, Grid, Select } from '@mantine/core';
import { IconX } from '@tabler/icons-react';

import AddLockValveInterface from '../types/addLockValve.type';

import { useState } from 'react';

const AddLockValve = ({ index }: AddLockValveInterface) => {
    const [searchValue, onSearchChange] = useState('');

    const onCloseAddLockValveClicked = () => {
        console.log(111111);
    };

    return (
        <Grid>
            <Col span={11}>
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
            <Col span={1}>
                <IconX
                    color="red"
                    size="1.5rem"
                    style={{ cursor: 'pointer' }}
                    onClick={onCloseAddLockValveClicked}
                ></IconX>
            </Col>
        </Grid>
    );
};

export default AddLockValve;
