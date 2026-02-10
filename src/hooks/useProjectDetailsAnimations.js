// src/hooks/useProjectDetailsAnimations.js
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useProjectDetailsAnimations = () => {
  const sectionRef = useRef(null);

  // Columna izquierda
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const locationRef = useRef(null);
  const locationListRef = useRef(null);
  const mapImageRef = useRef(null);
  const accessibilityRef = useRef(null);

  // Columna derecha
  const aerialMapRef = useRef(null);
  const infrastructureRef = useRef(null);
  const infrastructureListRef = useRef(null);

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

      // 2. Párrafos de descripción en cascada
      gsap.fromTo(
        descriptionRef.current.children,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: descriptionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          }
        }
      );

      // 3. Subtítulo ubicación fade in
      gsap.fromTo(
        locationRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: locationRef.current,
            start: 'top 82%',
            toggleActions: 'play none none reverse',
          }
        }
      );

      // 4. Lista de ubicación en cascada desde la izquierda
      gsap.fromTo(
        locationListRef.current.children,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: locationListRef.current,
            start: 'top 82%',
            toggleActions: 'play none none reverse',
          }
        }
      );

      // 5. Imagen plano: clip-path reveal de arriba hacia abajo
      gsap.fromTo(
        mapImageRef.current,
        { clipPath: 'inset(0 0 100% 0)', scale: 1.05 },
        {
          clipPath: 'inset(0 0 0% 0)',
          scale: 1,
          duration: 1,
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: mapImageRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          }
        }
      );

      // 6. Texto accesibilidad fade in
      gsap.fromTo(
        accessibilityRef.current,
        { opacity: 0, y: 15 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: accessibilityRef.current,
            start: 'top 88%',
            toggleActions: 'play none none reverse',
          }
        }
      );

      // ── Columna derecha ────────────────────────────────────────────

      // 7. Imagen aérea: clip-path reveal desde la derecha
      gsap.fromTo(
        aerialMapRef.current,
        { clipPath: 'inset(0 100% 0 0)', scale: 1.08 },
        {
          clipPath: 'inset(0 0% 0 0)',
          scale: 1,
          duration: 1.1,
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: aerialMapRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          }
        }
      );

      // 8. Subtítulo infraestructura fade in
      gsap.fromTo(
        infrastructureRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: infrastructureRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          }
        }
      );

      // 9. Items de infraestructura en cascada desde la derecha
      gsap.fromTo(
        infrastructureListRef.current.children,
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: infrastructureListRef.current,
            start: 'top 85%',
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
    descriptionRef,
    locationRef,
    locationListRef,
    mapImageRef,
    accessibilityRef,
    aerialMapRef,
    infrastructureRef,
    infrastructureListRef,
  };
};

export default useProjectDetailsAnimations;