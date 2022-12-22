import { motion } from 'framer-motion';

const AboutPage = () => {
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
            <div>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Facilis magni, excepturi ab animi, beatae, dolore perspiciatis
                perferendis molestiae doloremque accusantium ducimus sunt quis
                exercitationem optio officiis odio impedit? Facilis, quasi?
            </div>
        </motion.div>
    );
};

export default AboutPage;
