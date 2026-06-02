import { useEffect, useRef } from 'react';

export default function Cursor() {
  const ring = useRef<HTMLDivElement>(null);
  const dot = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rx = 0, ry = 0, dx = 0, dy = 0;
    let raf: number;

    function lerp(a: number, b: number, t: number) { return a + (b - a) * t; }

    function onMove(e: MouseEvent) {
      dx = e.clientX; dy = e.clientY;
      if (dot.current) {
        dot.current.style.left = dx + 'px';
        dot.current.style.top  = dy + 'px';
      }
    }

    function animate() {
      rx = lerp(rx, dx, 0.12);
      ry = lerp(ry, dy, 0.12);
      if (ring.current) {
        ring.current.style.left = rx + 'px';
        ring.current.style.top  = ry + 'px';
      }
      raf = requestAnimationFrame(animate);
    }

    function onEnter() { document.body.classList.add('cursor-hover'); }
    function onLeave() { document.body.classList.remove('cursor-hover'); }

    document.addEventListener('mousemove', onMove);
    document.querySelectorAll('a, button, .btn').forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    raf = requestAnimationFrame(animate);
    return () => { document.removeEventListener('mousemove', onMove); cancelAnimationFrame(raf); };
  }, []);

  return (
    <>
      <div id="cursor-ring" ref={ring} />
      <div id="cursor-dot"  ref={dot}  />
    </>
  );
}
