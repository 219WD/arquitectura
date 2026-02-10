// src/components/CTA.jsx
import React from 'react';
import './CTA.css';
import BlurText from './BlurText';
import useCTAAnimations from '../hooks/useCTAAnimations';

const CTA = () => {
  const { sectionRef, buttonRef, textVisible } = useCTAAnimations();

  const whatsappNumber = '5491234567890';
  const whatsappMessage = encodeURIComponent('Hola, estoy interesado en el proyecto de naves industriales. Me gustaría recibir más información.');
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section ref={sectionRef} className="cta">
      <div className="cta__container">
        <div className="cta__content">

          <BlurText
            text="¿Listo para invertir en tu futuro?"
            delay={120}
            animateBy="words"
            direction="top"
            className="cta__title"
            forceAnimate={textVisible}
            stepDuration={0.9}
          />

          <BlurText
            text="Contáctanos hoy y descubre cómo este proyecto puede transformar tu portafolio de inversiones. Nuestro equipo está listo para responder todas tus preguntas."
            delay={60}
            animateBy="words"
            direction="top"
            className="cta__description"
            forceAnimate={textVisible}
            stepDuration={0.7}
          />

          <a
            ref={buttonRef}
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="cta__button"
          >
            <svg className="cta__button-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
            </svg>
            Contactar por WhatsApp
          </a>

        </div>
      </div>
    </section>
  );
};

export default CTA;