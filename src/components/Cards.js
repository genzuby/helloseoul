import React from "react";
import CardBody from "./CardBody";

const cardInfo = [
  {
    imgName: "EAT",
    imgUrl: "images/seoul-eat1.jpg",
    url: "markets",
    imgDesc:
      "Look up traditional markets in Seoul. You can try local foods and get some exotic souvenirs."
  },
  {
    imgName: "WALK",
    imgUrl: "images/seoul-walk1.jpg",
    url: "walks",
    imgDesc:
      "How about a walk around the beautiful nature in Seoul? Here is a list for you!"
  },
  {
    imgName: "EXPLORE",
    url: "explore",
    imgUrl: "images/seoul-explore1.jpg",
    imgDesc:
      "Seoul has been the capital of Korea for 623 years. You can have various experiences at these places."
  },
  {
    imgName: "FREEWIFI",
    url: "wifis",
    imgUrl: "images/seoul-wifi1.jpg",
    imgDesc:
      "You don't have to buy a SIM card in Seoul! Why? Because there are tons of free wifi spots!"
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
