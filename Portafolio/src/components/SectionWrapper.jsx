import { motion } from "framer-motion";

const SectionWrapper = ({ children, id }) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true, amount: 0.2 }}
  >
    {children}
  </motion.section>
);

export default SectionWrapper;
