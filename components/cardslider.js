// CardSlider.js
import React from 'react';
import { motion } from 'framer-motion';
import Card from './card';

const CardSlider = ({ items }) => {

  return (
    <div className="overflow-x-scroll whitespace-nowrap w-4/5 mx-auto max-w-4xl">
      <motion.div
        className="inline-flex space-x-4"
        drag="x"
        dragConstraints={{ left: 600, right: 30 }}
        dragElastic={0.5}
      >
        {items.map((item, index) => (
          <Card key={index} title={item.title} content={item.content} />
        ))}
      </motion.div>
    </div>
  );
};

export default CardSlider;
