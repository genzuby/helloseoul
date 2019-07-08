import React from "react";
import "../../css/object.scss";

const GotoTop = () => {
  return (
    <div
      onClick={() => window.scrollTo(0, 0)}
      className="--go--to--top"
      title=" Go to Top"
    >
      <i class="fas fa-arrow-up" />
    </div>
  );
};

export default GotoTop;
