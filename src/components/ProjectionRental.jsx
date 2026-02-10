// src/components/ProjectionRental.jsx
import React from "react";
import "./ProjectionRental.css";
import warehouseInterior from "../assets/12.jpg";
import useProjectionRentalAnimations from "../hooks/useProjectionRentalAnimations";

const ProjectionRental = () => {
  const {
    sectionRef,
    titleRef,
    sectionsRef,
    imageRef,
  } = useProjectionRentalAnimations();

  return (
    <section ref={sectionRef} className="projection-rental">
      <div className="projection-rental__container">

        {/* Columna Izquierda */}
        <div className="projection-rental__content">
          <h2 ref={titleRef} className="projection-rental__title">
            Proyección de Valorización y Escenario de Inversión
          </h2>

          <div ref={sectionsRef} className="projection-rental__sections-wrapper">
            <div className="projection-rental__section">
              <h3 className="projection-rental__subtitle">
                Valorización del Proyecto
              </h3>
              <p className="projection-rental__text">
                Bajo un escenario conservador, se proyecta una valorización
                sostenida del proyecto en dólares, sumado a un potencial
                incremento del valor por compra en etapa inicial, estimado en más
                del 15% en un plazo aproximado de 12 meses, sujeto a condiciones
                de mercado.
              </p>
            </div>

            <div className="projection-rental__section">
              <h3 className="projection-rental__subtitle">
                Como referencia, en el mercado:
              </h3>
              <p className="projection-rental__text projection-rental__text--bullet">
                Una vivienda de diseño en conjunto privado se comercializa en
                valores competitivos según ubicación, calidad constructiva y nivel
                de diseño arquitectónico.
              </p>
              <p className="projection-rental__text projection-rental__text--bullet">
                Este escenario valida el potencial de valorización del activo aun
                contemplando una salida anticipada.
              </p>
            </div>

            <div className="projection-rental__section">
              <p className="projection-rental__text projection-rental__text--bold">
                Asimismo, los valores residenciales de la zona funcionan como
                respaldo directo del valor de mercado para un perfil inversor o
                patrimonial.
              </p>
              <p className="projection-rental__text">
                Las naves industriales de 1.000 m² en el mercado se comercializan
                entre USD 650.000 y USD 700.000.
              </p>
            </div>

            <div className="projection-rental__section projection-rental__section--rental">
              <h3 className="projection-rental__subtitle">
                Escenario de Alquiler y Rentabilidad
              </h3>
              <ul className="projection-rental__list">
                <li>
                  Valor de alquiler de mercado en la zona: desde USD 5 a 8 por m²
                  + IVA.
                </li>
                <li>Escenario conservador de análisis: USD 5 por m².</li>
              </ul>
              <p className="projection-rental__text">Bajo este supuesto:</p>
              <ul className="projection-rental__list">
                <li>Rentabilidad anual aproximada sobre precio de lista: 10%</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Columna Derecha */}
        <div ref={imageRef} className="projection-rental__image">
          <img
            src={warehouseInterior}
            alt="Interior de vivienda contemporánea con diseño moderno"
          />
        </div>

      </div>
    </section>
  );
};

export default ProjectionRental;