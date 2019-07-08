import React from "react";
import { Link } from "react-router-dom";

class Menu extends React.Component {
  params = [
    { name: "EAT", url: "/markets" },
    { name: "WALK", url: "/walks" },
    { name: "EXPLORE", url: "/explore" },
    { name: "FREEWIFIS", url: "/wifis" },
    { name: "GALLERY", url: "/menupics" }
  ];

  renderMenu = () => {
    return this.params.map(param => {
      return (
        <li
          key={param.name}
          onClick={() => window.scrollTo(0, 0)}
          className={
            param.name === this.props.selected ? "--selected--menu" : ""
          }
        >
          <Link to={param.url}>{param.name}</Link>
        </li>
      );
    });
  };

  render() {
    return (
      <div className="--mainmenu--nav">
        <span className="--nav--gohome">
          <Link to="/">
            <i className="fas fa-plane" title="Go Home" />
          </Link>
        </span>
        <ul className="--nav--menulist">{this.renderMenu()}</ul>
      </div>
    );
  }
}

export default Menu;
