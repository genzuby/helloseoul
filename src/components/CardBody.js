import React from "react";
import "../css/card.scss";
import { Link } from "react-router-dom";

const CardBody = props => {
  return (
    <Link to={props.url}>
      <div className="--card--design">
        <div
          className="--card--bgimage"
          style={{ backgroundImage: `url(${props.cardBgUrl})` }}
        />
        <h3>{props.cardName}</h3>
        <p className="--card--desc">{props.cardDesc}</p>
      </div>
    </Link>
  );
};

export default CardBody;
