// src/hooks/useOurServicesAnimations.js
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useOurServicesAnimations = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // 1. Título entra desde la izquierda
      gsap.fromTo(
        titleRef.current,
        {
          x: -80,
          opacity: 0
        },
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

      // 2. Cards entran en cascada con stagger
      // Cada card: imagen sube desde abajo + fade in, luego contenido
      const cards = cardsRef.current.querySelectorAll('.service-card');

      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 60,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          }
        }
      );

      // 3. Imágenes: clip-path reveal de abajo hacia arriba por card
      const imageWrappers = cardsRef.current.querySelectorAll('.service-card__image-wrapper');

      gsap.fromTo(
        imageWrappers,
        {
          clipPath: 'inset(100% 0 0 0)',
        },
        {
          clipPath: 'inset(0% 0 0 0)',
          duration: 0.9,
          stagger: 0.12,
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          }
        }
      );

      // 4. Números de las cards en cascada, ligeramente después
      const numbers = cardsRef.current.querySelectorAll('.service-card__number');

      gsap.fromTo(
        numbers,
        {
          opacity: 0,
          y: 20
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 65%',
            toggleActions: 'play none none reverse',
          }
        }
      );

      // 5. Títulos y descripciones de cada card
      const cardTitles = cardsRef.current.querySelectorAll('.service-card__title');
      const cardDescs = cardsRef.current.querySelectorAll('.service-card__description');

      gsap.fromTo(
        [...cardTitles, ...cardDescs],
        {
          opacity: 0,
          y: 15
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.06,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 60%',
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
    cardsRef,
  };
};

export default useOurServicesAnimations;