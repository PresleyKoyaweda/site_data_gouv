import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface AnimatedCounterProps {
  end: number;
  duration: number;
  suffix?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ end, duration, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      let startTime: number | null = null;
      const animate = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        
        setCount(Math.floor(progress * end));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }
  }, [inView, end, duration]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold text-blue-900">
      {count}{suffix}
    </span>
  );
};

export default AnimatedCounter;