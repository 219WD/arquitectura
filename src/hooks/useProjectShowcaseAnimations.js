// src/hooks/useProjectShowcaseAnimations.js
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useProjectShowcaseAnimations = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const introRef = useRef(null);
  const descriptionRef = useRef(null);
  const listRef = useRef(null);
  const miniImageRef = useRef(null);
  const securityRef = useRef(null);
  const mainImageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
          // markers: true, // Para debug
        }
      });

      // Animaciones de contenido izquierdo
      tl.fromTo(
        titleRef.current,
        {
          opacity: 0,
          y: 30
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out'
        }
      )
      // Intro fade in
      .fromTo(
        introRef.current,
        {
          opacity: 0,
          y: 20
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power2.out'
        },
        '-=0.5'
      )
      // Description fade in
      .fromTo(
        descriptionRef.current,
        {
          opacity: 0,
          y: 20
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power2.out'
        },
        '-=0.5'
      )
      // Lista items en cascada
      .fromTo(
        listRef.current.children,
        {
          opacity: 0,
          x: -30
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: 'power2.out'
        },
        '-=0.4'
      )
      // Mini imagen escala y fade
      .fromTo(
        miniImageRef.current,
        {
          opacity: 0,
          scale: 0.85,
          y: 20
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          ease: 'back.out(1.5)'
        },
        '-=0.8'
      )
      // Security section
      .fromTo(
        securityRef.current,
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
      // Imagen principal desde la derecha con parallax
      .fromTo(
        mainImageRef.current,
        {
          clipPath: 'inset(0 100% 0 0)',
          scale: 1.1
        },
        {
          clipPath: 'inset(0 0% 0 0)',
          scale: 1,
          duration: 1.2,
          ease: 'power3.inOut'
        },
        '-=1.5'
      );

      // Parallax en la imagen principal al hacer scroll
      gsap.to(mainImageRef.current.querySelector('img'), {
        y: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return {
    sectionRef,
    titleRef,
    introRef,
    descriptionRef,
    listRef,
    miniImageRef,
    securityRef,
    mainImageRef
  };
};

export default useProjectShowcaseAnimations;