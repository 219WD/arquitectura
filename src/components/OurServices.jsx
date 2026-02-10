// src/components/OurServices.jsx
import React from 'react';
import './OurServices.css';
import service1 from '../assets/02.jpg';
import service2 from '../assets/05.jpg';
import service3 from '../assets/01.jpg';
import service4 from '../assets/06.jpg';
import useOurServicesAnimations from '../hooks/useOurServicesAnimations';

const OurServices = () => {
  const { sectionRef, titleRef, cardsRef } = useOurServicesAnimations();

  const services = [
    {
      number: '01',
      title: 'DISEÑO DEL PROYECTO',
      description: 'Diseño arquitectónico a medida que define identidad, forma y carácter.',
      image: service1
    },
    {
      number: '02',
      title: 'PLANIFICACION DEL SITIO',
      description: 'Implantación inteligente que optimiza el terreno y el entorno natural.',
      image: service2
    },
    {
      number: '03',
      title: 'DISEÑO DE VIVIENDAS',
      description: 'Arquitectura pensada para unir forma, función y calidad espacial.',
      image: service3
    },
    {
      number: '04',
      title: 'ORGANIZACION INTERIOR',
      description: 'Espacios diseñados para fluidez, confort y vida cotidiana.',
      image: service4
    }
  ];

  return (
    <section ref={sectionRef} className="our-services">
      <div className="our-services__container">
        <h2 ref={titleRef} className="our-services__title">NUESTROS SERVICIOS</h2>
        
        <div ref={cardsRef} className="our-services__grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-card__image-wrapper">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="service-card__image"
                />
                <div className="service-card__overlay"></div>
              </div>
              
              <div className="service-card__content">
                <span className="service-card__number">{service.number}</span>
                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__description">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;