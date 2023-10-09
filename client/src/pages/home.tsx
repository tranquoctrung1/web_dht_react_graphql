import { motion } from 'framer-motion';

import { Center, Text } from '@mantine/core';

const HomePage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div>
                <Center>
                    <Text color="blue" weight={500}>
                        TỔNG CÔNG TY CÂP NƯỚC SÀI GÒN - XÍ NGHIỆP TRUYỀN DẪN
                        NƯỚC SẠCH
                    </Text>
                </Center>
            </div>
        </motion.div>
    );
};

export default HomePage;
