import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

let registered = false;

export function initGsap() {
  if (registered) return gsap;
  gsap.registerPlugin(ScrollTrigger);
  registered = true;
  return gsap;
}

export function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export const easePremium = 'power3.out';
export const easeSmooth = 'power2.inOut';

export function killScrollTriggers(scope?: Element | string) {
  const triggers = ScrollTrigger.getAll();
  if (!scope) {
    triggers.forEach(t => t.kill());
    return;
  }
  const el = typeof scope === 'string' ? document.querySelector(scope) : scope;
  if (!el) return;
  triggers.forEach(t => {
    if (t.trigger && el.contains(t.trigger as Node)) t.kill();
  });
}

export { gsap, ScrollTrigger };
