// src/hooks/useHeroAnimations.js
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const useHeroAnimations = () => {
  const curtainRef = useRef(null);
  const logoRef = useRef(null);
  const navRef = useRef(null);
  const [curtainComplete, setCurtainComplete] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'power4.inOut' }
      });

      // 1. Cortina oscura baja desde arriba
      tl.fromTo(
        curtainRef.current,
        {
          y: '-100%'
        },
        {
          y: 0,
          duration: 1.2,
          ease: 'power4.out'
        }
      )
      // 2. Logo aparece con fade in y escala
      .fromTo(
        logoRef.current,
        {
          opacity: 0,
          scale: 0.8
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: 'back.out(1.7)'
        },
        '-=0.4' // Empieza un poco antes de que termine la cortina
      )
      // 3. Pausa dramática con el logo visible
      .to({}, { duration: 0.6 })
      // 4. Logo hace fade out
      .to(
        logoRef.current,
        {
          opacity: 0,
          scale: 0.9,
          duration: 0.4,
          ease: 'power2.in'
        }
      )
      // 5. Cortina se desliza hacia la derecha y desaparece
      .to(curtainRef.current, {
        x: '100%',
        duration: 1.4,
        ease: 'power4.inOut',
        onComplete: () => {
          // Remover la cortina del DOM después de la animación
          if (curtainRef.current) {
            curtainRef.current.style.display = 'none';
          }
          // Activar las animaciones de texto
          setCurtainComplete(true);
        }
      }, '-=0.2')
      // 6. Fade in del nav
      .fromTo(
        navRef.current,
        {
          opacity: 0,
          y: -20
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out'
        },
        '-=1.0'
      );
    });

    return () => ctx.revert();
  }, []);

  return {
    curtainRef,
    logoRef,
    navRef,
    curtainComplete
  };
};

export default useHeroAnimations;