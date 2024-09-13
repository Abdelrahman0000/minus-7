/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import { useEffect } from 'react';

const IntroScreen = ({ setScreen }) => {
  useEffect(() => {
    const timer = setTimeout(() => setScreen('modeSelect'), 3000);
    return () => clearTimeout(timer);
  }, [setScreen]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="intro-screen"
    >

      <h1 className='logo'>Minus</h1>
      <img  src="/assets/7.png" alt="" />
    </motion.div>
  );
};

export default IntroScreen;
