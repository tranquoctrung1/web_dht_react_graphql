import { motion } from 'framer-motion';

import { Button, Checkbox, Col, FileInput, Grid, Select } from '@mantine/core';
import { DateInput } from '@mantine/dates';

import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

const SiteConfigPage = () => {
    const [siteData, setSiteData] = useState([]);

    const { control, getValues, setValue, reset, register } = useForm({
        defaultValues: {
            SiteId: '',
        },
    });

    const onChooseSiteBlured = (e: any) => {
        console.log(e.target.value);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <Grid>
                <Col md={4}>
                    <Controller
                        name="SiteId"
                        control={control}
                        render={({ field }) => (
                            <Select
                                label="Mã vị trí"
                                data={siteData}
                                placeholder="Chọn điểm"
                                nothingFound="Không tìm thấy"
                                searchable
                                creatable
                                {...field}
                                getCreateLabel={(query) =>
                                    `+ Tạo điểm: ${query}`
                                }
                                onCreate={(query) => {
                                    const item = { value: query, label: query };
                                    //@ts-ignore
                                    setSiteData((current) => [
                                        ...current,
                                        item,
                                    ]);
                                    return item;
                                }}
                                onBlur={onChooseSiteBlured}
                            />
                        )}
                    ></Controller>
                </Col>
                <Col md={4}>asdfasdfasdfsadf</Col>
                <Col md={4}>asdfasdfasdfsadf</Col>
            </Grid>
        </motion.div>
    );
};

export default SiteConfigPage;
