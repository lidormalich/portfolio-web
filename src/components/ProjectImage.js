import React from "react";

const ProjectImage = ({ title, gradient, isHovered }) => {
  const gradients = {
    purple: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    blue: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    pink: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    green: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
    orange: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    violet: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
  };

  const style = {
    width: "100%",
    height: "250px",
    background: gradients[gradient] || gradients.purple,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "2rem",
    fontWeight: "700",
    color: "white",
    textAlign: "center",
    padding: "2rem",
    textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
    position: "relative",
    overflow: "hidden",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0,0,0,0.2)",
    zIndex: 0,
  };

  const textStyle = {
    position: "relative",
    zIndex: 1,
    transition: "all 0.4s ease",
    filter: isHovered ? "blur(2px)" : "none",
    opacity: isHovered ? 0.4 : 1,
    transform: isHovered ? "scale(0.95)" : "scale(1)",
  };

  return (
    <div style={style}>
      <div style={overlayStyle}></div>
      <div style={textStyle}>{title}</div>
    </div>
  );
};

export default ProjectImage;
