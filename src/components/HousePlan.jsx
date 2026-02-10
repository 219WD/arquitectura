// src/components/HousePlan.jsx
import React from "react";
import "./HousePlan.css";
import img2 from "../assets/02.jpg";
import useHousePlanAnimations from "../hooks/useHousePlanAnimations";

const HousePlan = () => {
  const { sectionRef, titleRef, areaRef, roomsRef, imageRef } = useHousePlanAnimations();

  const rooms = [
    { name: "Area social", area: "21 m²" },
    { name: "Comedor", area: "9.3 m²" },
    { name: "Cocina integrada", area: "9.6 m²" },
    { name: "Estar diario", area: "9 m²" },
    { name: "Dormitorio principal", area: "15.6 m²" },
    { name: "Dormitorio secund.", area: "11.1 m²" },
    { name: "Baño completo", area: "8.9 m²" },
    { name: "Circulación y guard.", area: "7.4 m²" },
  ];

  return (
    <section ref={sectionRef} className="house-plan">
      <div className="house-plan__container">
        <div className="house-plan__info">
          <h2 ref={titleRef} className="house-plan__title">PLAN MAESTRO</h2>
          <p ref={areaRef} className="house-plan__total-area">AREA TOTAL 92 M²</p>
          
          <div ref={roomsRef} className="house-plan__rooms">
            {rooms.map((room, index) => (
              <div key={index} className="house-plan__room">
                <span className="house-plan__room-name">{room.name}</span>
                <span className="house-plan__room-area">{room.area}</span>
              </div>
            ))}
          </div>
        </div>

        <div ref={imageRef} className="house-plan__image">
          <img
            src={img2}
            alt="Plano base - 92m² vivienda diseño a medida"
          />
          <span className="house-plan__watermark">@terraviva</span>
        </div>
      </div>
    </section>
  );
};

export default HousePlan;