import { useEffect } from 'react';

export default function ScrollProgress() {
  useEffect(() => {
    const bar = document.getElementById('scroll-progress');
    function update() {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (bar) bar.style.width = ((scrolled / total) * 100) + '%';
    }
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);
  return <div id="scroll-progress" />;
}
