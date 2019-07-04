import React from "react";
import CardBody from "./CardBody";

const cardInfo = [
  {
    imgName: "EAT",
    imgUrl: "images/seoul-eat1.jpg",
    url: "markets",
    imgDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit saepe laborum ab placeat."
  },
  {
    imgName: "WALK",
    imgUrl: "images/seoul-walk1.jpg",
    imgDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit saepe laborum ab placeat."
  },
  {
    imgName: "EXPLORE",
    imgUrl: "images/seoul-explore1.jpg",
    imgDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit saepe laborum ab placeat, "
  },
  {
    imgName: "FREEWIFI",
    url: "wifis",
    imgUrl: "images/seoul-wifi1.jpg",
    imgDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit saepe laborum ab placeat, consequatur "
  }
];
const Cards = () => {
  return (
    <div className="Cards">
      {cardInfo.map(card => {
        return (
          <CardBody
            key={card.imgName}
            url={card.url}
            cardName={card.imgName}
            cardDesc={card.imgDesc}
            cardBgUrl={card.imgUrl}
          />
        );
      })}
    </div>
  );
};

export default Cards;
