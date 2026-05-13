import { useState, useEffect, useRef } from 'react';

export function useAnimatedCounter(target: number, duration: number = 1500, startOnMount: boolean = true) {
  const [value, setValue] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const rafRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  const start = () => {
    if (hasStarted) return;
    setHasStarted(true);
  };

  useEffect(() => {
    if (startOnMount) {
      setHasStarted(true);
    }
  }, [startOnMount]);

  useEffect(() => {
    if (!hasStarted) return;

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);
      
      setValue(current);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [hasStarted, target, duration]);

  return { value, start };
}
