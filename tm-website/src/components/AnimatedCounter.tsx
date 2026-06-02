import { useEffect, useRef } from 'react';

interface Props {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

export default function AnimatedCounter({ target, suffix = '', prefix = '', duration = 1800 }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const observed = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !observed.current) {
          observed.current = true;
          const start = performance.now();
          const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

          function step(now: number) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const value = Math.round(easeOut(progress) * target);
            el!.textContent = prefix + value.toLocaleString('en-IN') + suffix;
            if (progress < 1) requestAnimationFrame(step);
          }
          requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, suffix, prefix, duration]);

  return <span ref={ref}>{prefix}0{suffix}</span>;
}
