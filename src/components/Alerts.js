import React from "react";

const Alerts = ({ alerts }) => {
  const { color, text } = alerts && alerts;

  return (
    <div className="alerts" style={{ background: color }}>
      {text}
    </div>
  );
};

export default Alerts;
