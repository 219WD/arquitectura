// src/components/IndustrialUnits.jsx
import React from "react";
import "./IndustrialUnits.css";
import vistaExterior1 from "../assets/10.jpg";
import vistaExterior2 from "../assets/11.jpg";
import useIndustrialUnitsAnimations from "../hooks/useIndustrialUnitsAnimations";

const IndustrialUnits = () => {
  const {
    sectionRef,
    titleRef,
    specsListRef,
    distributionRef,
    distributionListRef,
    highlightRef,
    imageTopRef,
    imageBottomRef,
  } = useIndustrialUnitsAnimations();

  const specifications = [
    "Superficie total del predio: 10.000 m².",
    "Cantidad de lotes: 15 unidades residenciales.",
    "Superficie cubierta proyectada: 15 viviendas de diseño.",
    "Proyecto de arquitectura integral desarrollado.",
    "Conjunto cerrado, con seguridad y gastos comunes.",
  ];

  const distribution = [
    "Lote frontal: implantación frontal.",
    "Lote de fondo: implantación posterior.",
    "Unidades intermedias con diseño adaptable.",
    "El frente se destina a accesos y espacios comunes.",
    "El fondo se destina a áreas verdes comunes.",
  ];

  return (
    <section ref={sectionRef} className="industrial-units">
      <div className="industrial-units__container">

        {/* Columna Izquierda */}
        <div className="industrial-units__content">
          <h2 ref={titleRef} className="industrial-units__title">
            Viviendas diseñadas para habitar y proyectar
          </h2>

          <div className="industrial-units__specs">
            <ul ref={specsListRef} className="industrial-units__list">
              {specifications.map((spec, index) => (
                <li key={index}>{spec}</li>
              ))}
            </ul>
          </div>

          <div ref={distributionRef} className="industrial-units__distribution">
            <h3 className="industrial-units__subtitle">
              Distribución del Conjunto
            </h3>
            <ul ref={distributionListRef} className="industrial-units__list">
              {distribution.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div ref={highlightRef} className="industrial-units__highlight">
            <p className="industrial-units__highlight-text">
              En cada unidad se desarrolla una vivienda de diseño a medida.
            </p>
            <p className="industrial-units__highlight-text">
              Cada unidad contará con escritura propia e independiente,
              permitiendo al propietario acceder a financiamiento o créditos con
              garantía real.
            </p>
          </div>
        </div>

        {/* Columna Derecha */}
        <div className="industrial-units__images">
          <div ref={imageTopRef} className="industrial-units__image industrial-units__image--top">
            <img
              src={vistaExterior1}
              alt="Vista exterior de vivienda contemporánea con jardín"
            />
          </div>
          <div ref={imageBottomRef} className="industrial-units__image industrial-units__image--bottom">
            <img
              src={vistaExterior2}
              alt="Vista frontal de viviendas con acceso y estacionamiento"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default IndustrialUnits;