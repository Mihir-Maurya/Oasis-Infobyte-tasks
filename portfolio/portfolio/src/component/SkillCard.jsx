import React from "react";

const SkillCard = ({ src, alt, width }) => {
  return (
    <div className="skill-card" style={{display:"flex", alignItems:"center"}}>
      <img
        src={src}
        alt={alt}
        style={{ width: width, display: "inline-block" }}
      />
    </div>
  );
};

export default SkillCard;
