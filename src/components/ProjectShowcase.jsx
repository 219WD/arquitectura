// src/components/ProjectShowcase.jsx
import React from "react";
import "./ProjectShowcase.css";
import img3 from "../assets/03.jpg";
import img4 from "../assets/04.jpg";
import useProjectShowcaseAnimations from "../hooks/useProjectShowcaseAnimations";

const ProjectShowcase = () => {
  const {
    sectionRef,
    titleRef,
    introRef,
    descriptionRef,
    listRef,
    miniImageRef,
    securityRef,
    mainImageRef
  } = useProjectShowcaseAnimations();

  return (
    <section ref={sectionRef} className="project-showcase">
      <div className="project-showcase__container">
        <div className="project-showcase__content">
          <h2 ref={titleRef} className="project-showcase__title">
            Conjunto Residencial de Viviendas de Autor
          </h2>
          
          <p ref={introRef} className="project-showcase__intro">
            Se presenta una propuesta de desarrollo en un conjunto privado de
            viviendas, concebido bajo criterios de diseño a medida, calidad
            constructiva, funcionalidad habitacional y entorno cuidado.
          </p>
          
          <p ref={descriptionRef} className="project-showcase__description">
            Un proyecto pensado tanto para familias como para inversores que
            buscan un desarrollo sólido, escalable y con previsibilidad.
          </p>
          
          <div className="project-showcase__features">
            <ul ref={listRef} className="project-showcase__list">
              <li>Barrio privado y controlado.</li>
              <li>Lotes con escritura individual.</li>
              <li>Entorno residencial consolidado - Tucumán.</li>
              <li>Entrega estimada: etapas desde 2026.</li>
            </ul>
            
            <div ref={miniImageRef} className="project-showcase__mini-image">
              <img
                src={img4}
                alt="Vista de vivienda contemporánea en conjunto"
              />
            </div>
          </div>
          
          <div ref={securityRef} className="project-showcase__security">
            <h3 className="project-showcase__security-title">Seguridad permanente</h3>
          </div>
        </div>
        
        <div ref={mainImageRef} className="project-showcase__image">
          <img
            src={img3}
            alt="Acceso principal al conjunto residencial"
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;