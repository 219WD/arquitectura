// src/hooks/useIndustrialUnitsAnimations.js
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useIndustrialUnitsAnimations = () => {
  const sectionRef = useRef(null);

  // Columna izquierda
  const titleRef = useRef(null);
  const specsListRef = useRef(null);
  const distributionRef = useRef(null);
  const distributionListRef = useRef(null);
  const highlightRef = useRef(null);

  // Columna derecha
  const imageTopRef = useRef(null);
  const imageBottomRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // ── Columna izquierda ──────────────────────────────────────────

      // 1. Título entra desde la izquierda
      gsap.fromTo(
        titleRef.current,
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          }
        }
      );

      // 2. Items de specs en cascada desde la izquierda
      gsap.fromTo(
        specsListRef.current.children,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.09,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: specsListRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          }
        }
      );

      // 3. Subtítulo distribución fade + y
      gsap.fromTo(
        distributionRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: distributionRef.current,
            start: 'top 82%',
            toggleActions: 'play none none reverse',
          }
        }
      );

      // 4. Items de distribución en cascada desde la izquierda
      gsap.fromTo(
        distributionListRef.current.children,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.09,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: distributionListRef.current,
            start: 'top 83%',
            toggleActions: 'play none none reverse',
          }
        }
      );

      // 5. Highlight: párrafos en cascada con fade
      gsap.fromTo(
        highlightRef.current.children,
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: highlightRef.current,
            start: 'top 88%',
            toggleActions: 'play none none reverse',
          }
        }
      );

      // ── Columna derecha ────────────────────────────────────────────

      // 6. Imagen top: clip-path reveal desde arriba
      gsap.fromTo(
        imageTopRef.current,
        { clipPath: 'inset(0 0 100% 0)', scale: 1.06 },
        {
          clipPath: 'inset(0 0 0% 0)',
          scale: 1,
          duration: 1.0,
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: imageTopRef.current,
            start: 'top 78%',
            toggleActions: 'play none none reverse',
          }
        }
      );

      // 7. Imagen bottom: clip-path reveal desde abajo, con delay visual
      gsap.fromTo(
        imageBottomRef.current,
        { clipPath: 'inset(100% 0 0% 0)', scale: 1.06 },
        {
          clipPath: 'inset(0% 0 0% 0)',
          scale: 1,
          duration: 1.0,
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: imageBottomRef.current,
            start: 'top 82%',
            toggleActions: 'play none none reverse',
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return {
    sectionRef,
    titleRef,
    specsListRef,
    distributionRef,
    distributionListRef,
    highlightRef,
    imageTopRef,
    imageBottomRef,
  };
};

export default useIndustrialUnitsAnimations;