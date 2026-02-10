// src/hooks/useCTAAnimations.js
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useCTAAnimations = () => {
  const sectionRef = useRef(null);
  const buttonRef = useRef(null);
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Dispara el estado para activar BlurText cuando la sección entra al viewport
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 70%',
        onEnter: () => setTextVisible(true),
        onLeaveBack: () => setTextVisible(false),
      });

      // Botón: escala + fade con rebote, levemente después del texto
      gsap.fromTo(
        buttonRef.current,
        { opacity: 0, scale: 0.85, y: 15 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.7,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 65%',
            toggleActions: 'play none none reverse',
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return {
    sectionRef,
    buttonRef,
    textVisible,
  };
};

export default useCTAAnimations;