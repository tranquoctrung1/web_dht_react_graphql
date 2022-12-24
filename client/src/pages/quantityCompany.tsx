import { Button, Center, Col, Grid, Select } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import { motion } from 'framer-motion';

import { useGetCompaniesQuery } from '../__generated__/graphql';

const QuantityCompanyPage = () => {
    const { data, error, loading } = useGetCompaniesQuery();

    if (loading) {
        return 'loading...';
    }
    if (error) {
        return 'error';
    }

    console.log(data);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <>
                <Grid>
                    <Col md={4} sm={12}>
                        <Select
                            label="Your favorite framework/library"
                            placeholder="Pick one"
                            data={[
                                { value: 'react', label: 'React' },
                                { value: 'ng', label: 'Angular' },
                                { value: 'svelte', label: 'Svelte' },
                                { value: 'vue', label: 'Vue' },
                            ]}
                        />
                    </Col>
                    <Col md={4} sm={12}>
                        <DatePicker
                            placeholder="Ngày bắt đầu"
                            label="Ngày bắt đầu"
                            withAsterisk
                        />
                    </Col>
                    <Col md={4} sm={12}>
                        <DatePicker
                            placeholder="Ngày kết thúc"
                            label="Ngày kết thúc"
                            withAsterisk
                        />
                    </Col>
                    <Col span={12}>
                        <Center>
                            <Button variant="filled" color="green">
                                Sản Lượng
                            </Button>
                        </Center>
                    </Col>
                </Grid>
            </>
        </motion.div>
    );
};

export default QuantityCompanyPage;
