import React from "react";
import "../css/card.scss";

const CardBody = props => {
  return (
    <div className="--card--design">
      <div
        className="--card--bgimage"
        style={{ backgroundImage: `url(${props.cardBgUrl})` }}
      />
      <h3>{props.cardName}</h3>
      <p className="--card--desc">{props.cardDesc}</p>
    </div>
  );
};

export default CardBody;
