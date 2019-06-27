import React from "react";
import CardBody from "./CardBody";

const cardInfo = [
  {
    imgName: "EAT",
    imgUrl: "images/seoul-eat1.jpg",
    imgDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit saepe laborum ab placeat, consequatur id itaque odio soluta libero optio qui quo voluptatum, nulla modi quisquam ex nesciunt commodi blanditiis."
  },
  {
    imgName: "WALK",
    imgUrl: "images/seoul-walk1.jpg",
    imgDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit saepe laborum ab placeat, consequatur id itaque odio soluta libero optio qui quo voluptatum, nulla modi quisquam ex nesciunt commodi blanditiis."
  },
  {
    imgName: "EXPLORE",
    imgUrl: "images/seoul-explore1.jpg",
    imgDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit saepe laborum ab placeat, consequatur id itaque odio soluta libero optio qui quo voluptatum, nulla modi quisquam ex nesciunt commodi blanditiis."
  },
  {
    imgName: "FREEWIFI",
    imgUrl: "images/seoul-wifi1.jpg",
    imgDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit saepe laborum ab placeat, consequatur id itaque odio soluta libero optio qui quo voluptatum, nulla modi quisquam ex nesciunt commodi blanditiis."
  }
];
const Cards = () => {
  return (
    <div className="Cards">
      {cardInfo.map(card => {
        return (
          <CardBody
            key={card.imgName}
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
