// src/components/BlurText.jsx
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const BlurText = ({
  text = '',
  delay = 200,
  className = '',
  animateBy = 'words',
  forceAnimate = false,
  stepDuration = 0.7
}) => {
  const elements = animateBy === 'words' ? text.split(' ') : text.split('');
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (forceAnimate) {
      setAnimate(true);
    }
  }, [forceAnimate]);

  return (
    <p className={className} style={{ display: 'flex', flexWrap: 'wrap' }}>
      {elements.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block"
          style={{ 
            display: 'inline-block',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'translateZ(0)',
            WebkitTransform: 'translateZ(0)'
          }}
          initial={{ 
            filter: 'blur(20px)',
            opacity: 0,
            y: -30
          }}
          animate={animate ? {
            filter: ['blur(20px)', 'blur(10px)', 'blur(0px)'],
            opacity: [0, 0.5, 1],
            y: [-30, -10, 0]
          } : {}}
          transition={{
            duration: stepDuration,
            delay: (index * delay) / 1000,
            ease: [0.25, 0.1, 0.25, 1]
          }}
        >
          {word}
          {index < elements.length - 1 && '\u00A0'}
        </motion.span>
      ))}
    </p>
  );
};

export default BlurText;