// src/components/ProjectDetails.jsx
import React from "react";
import "./ProjectDetails.css";
import imgAerea from "../assets/07.jpg";
import imgPlano from "../assets/09.jpg";
import useProjectDetailsAnimations from "../hooks/useProjectDetailsAnimations";

const ProjectDetails = () => {
  const {
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
  } = useProjectDetailsAnimations();

  const locationFeatures = [
    "Dirección: Ubicación: Entorno residencial consolidado en Tucumán.",
    "Inserto en un entorno urbano con crecimiento sostenido y demanda activa.",
    "Zona residencial consolidada, con excelente conectividad y servicios.",
  ];

  const infrastructureFeatures = [
    "Cerramiento perimetral de alta calidad.",
    "Calles internas diseñadas para tránsito residencial y circulación segura.",
    "Control de acceso con monitoreo y seguridad permanente.",
    "Infraestructura preparada para servicios comunes.",
    "Seguridad común y gastos compartidos.",
    "Servicios de AGUA, ELECTRICIDAD y GAS",
  ];

  return (
    <section ref={sectionRef} className="project-details">
      <div className="project-details__container">

        {/* Columna Izquierda */}
        <div className="project-details__left">
          <h2 ref={titleRef} className="project-details__title">
            El Proyecto: Un desarrollo residencial de escala y diseño
          </h2>

          <div ref={descriptionRef} className="project-details__description">
            <p>
              El proyecto se desarrolla sobre un predio de 10.000 m² (1
              hectárea), organizado en lotes residenciales, con un total
              aproximado de viviendas proyectadas pensadas para un desarrollo
              armónico.
            </p>
            <p>
              Se trata de un conjunto residencial, con control de accesos,
              seguridad y reglas comunes, que garantiza orden, previsibilidad y
              valorización a largo plazo.
            </p>
          </div>

          <div ref={locationRef} className="project-details__location">
            <h3 className="project-details__subtitle">
              Ubicación Privilegiada
            </h3>
            <ul ref={locationListRef} className="project-details__list">
              {locationFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div ref={mapImageRef} className="project-details__map-image">
            <img
              src={imgPlano}
              alt="Plano general del conjunto residencial"
            />
          </div>

          <p ref={accessibilityRef} className="project-details__accessibility">
            Se encuentra a pocos minutos de avenidas principales y accesos
            rápidos que conectan el desarrollo con los principales puntos de la
            ciudad.
          </p>
        </div>

        {/* Columna Derecha */}
        <div className="project-details__right">
          <div ref={aerialMapRef} className="project-details__aerial-map">
            <img
              src={imgAerea}
              alt="Vista aérea de la ubicación del predio"
            />
          </div>

          <div ref={infrastructureRef} className="project-details__infrastructure">
            <h3 className="project-details__subtitle">
              Infraestructura y Servicios del Proyecto
            </h3>
            <ul ref={infrastructureListRef} className="project-details__list">
              {infrastructureFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProjectDetails;