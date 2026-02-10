// src/hooks/useHousePlanAnimations.js
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useHousePlanAnimations = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const areaRef = useRef(null);
  const roomsRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
          // markers: true, // Descomenta para debug
        }
      });

      // 1. Título entra desde la izquierda
      tl.fromTo(
        titleRef.current,
        {
          x: -100,
          opacity: 0
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out'
        }
      )
      // 2. Total área fade in
      .fromTo(
        areaRef.current,
        {
          opacity: 0,
          y: 20
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out'
        },
        '-=0.4'
      )
      // 3. Rooms entran en cascada
      .fromTo(
        roomsRef.current.children,
        {
          opacity: 0,
          x: -50
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power2.out'
        },
        '-=0.3'
      )
      // 4. Imagen entra desde la derecha con escala
      .fromTo(
        imageRef.current,
        {
          x: 100,
          opacity: 0,
          scale: 0.9
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'power3.out'
        },
        '-=1.2'
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return {
    sectionRef,
    titleRef,
    areaRef,
    roomsRef,
    imageRef
  };
};

export default useHousePlanAnimations;