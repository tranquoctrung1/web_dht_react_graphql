import { motion } from 'framer-motion';

const HomePage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
                minus consequuntur deleniti ex non dolore accusamus maxime quod
                accusantium inventore! Quo repudiandae omnis culpa tenetur
                cumque recusandae repellendus non iusto.
            </div>
        </motion.div>
    );
};

export default HomePage;
