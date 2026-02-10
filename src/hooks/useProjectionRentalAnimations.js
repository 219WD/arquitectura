// src/hooks/useProjectionRentalAnimations.js
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useProjectionRentalAnimations = () => {
  const sectionRef = useRef(null);

  // Columna izquierda
  const titleRef = useRef(null);
  const sectionsRef = useRef(null);

  // Columna derecha
  const imageRef = useRef(null);

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

      // 2. Cada section de contenido entra en cascada (subtítulos + textos como bloque)
      const contentSections = sectionsRef.current.querySelectorAll('.projection-rental__section');

      gsap.fromTo(
        contentSections,
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionsRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          }
        }
      );

      // 3. Dentro de cada section: subtítulos con un ligero x desde la izquierda
      const subtitles = sectionsRef.current.querySelectorAll('.projection-rental__subtitle');

      gsap.fromTo(
        subtitles,
        { x: -20, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.55,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionsRef.current,
            start: 'top 73%',
            toggleActions: 'play none none reverse',
          }
        }
      );

      // 4. Items de listas en cascada desde la izquierda
      const allListItems = sectionsRef.current.querySelectorAll('.projection-rental__list li');

      gsap.fromTo(
        allListItems,
        { opacity: 0, x: -25 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionsRef.current,
            start: 'top 65%',
            toggleActions: 'play none none reverse',
          }
        }
      );

      // ── Columna derecha ────────────────────────────────────────────

      // 5. Imagen: clip-path reveal desde la derecha + ligera escala
      gsap.fromTo(
        imageRef.current,
        { clipPath: 'inset(0 100% 0 0)', scale: 1.06 },
        {
          clipPath: 'inset(0 0% 0 0)',
          scale: 1,
          duration: 1.1,
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          }
        }
      );

      // 6. Parallax suave en scroll sobre la imagen
      gsap.to(imageRef.current.querySelector('img'), {
        y: -40,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5,
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return {
    sectionRef,
    titleRef,
    sectionsRef,
    imageRef,
  };
};

export default useProjectionRentalAnimations;