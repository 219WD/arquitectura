// src/components/Hero.jsx
import React from 'react';
import './Hero.css';
import BlurText from './BlurText';
import useHeroAnimations from '../hooks/useHeroAnimations';
import logo from '../assets/logo.png';

const Hero = () => {
  const { curtainRef, logoRef, navRef, curtainComplete } = useHeroAnimations();

  return (
    <section className="hero">
      {/* Cortina de animación inicial */}
      <div ref={curtainRef} className="hero__curtain">
        <img 
          ref={logoRef}
          src={logo} 
          alt="Logo" 
          className="hero__curtain-logo"
        />
      </div>

      <nav ref={navRef} className="hero__nav">
        <ul className="hero__nav-list">
          <li><a href="#home">HOME</a></li>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#properties">PROPERTIES</a></li>
          <li><a href="#services">SERVICES</a></li>
          <li><a href="#gallery">GALLERY</a></li>
          <li><a href="#contacts">CONTACTS</a></li>
        </ul>
      </nav>

      <div className="hero__content">
        <BlurText
          text="TERRAVIVA"
          delay={400}
          animateBy="words"
          direction="top"
          className="hero__title-blur"
          forceAnimate={curtainComplete}
          stepDuration={1}
        />
        
        <div className="hero__bottom">
          <div>
            <BlurText
              text="DISEÑO A MEDIDA"
              delay={350}
              animateBy="words"
              direction="top"
              className="hero__subtitle-blur"
              forceAnimate={curtainComplete}
              stepDuration={0.8}
            />
            <BlurText
              text="PARA VIVIR MEJOR"
              delay={300}
              animateBy="words"
              direction="top"
              className="hero__subtitle-blur"
              forceAnimate={curtainComplete}
              stepDuration={0.8}
            />
          </div>
          
          <BlurText
            text="TUCUMAN, ARGENTINA"
            delay={250}
            animateBy="words"
            direction="top"
            className="hero__location-blur"
            forceAnimate={curtainComplete}
            stepDuration={0.7}
          />
        </div>
      </div>

      <div className="hero__overlay"></div>
    </section>
  );
};

export default Hero;