import React from "react";
import { Link } from "react-router-dom";

class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.menuRef = React.createRef();
    window.addEventListener("click", e => {
      if (!this.menuRef.current) return;
      if (e.target.className !== this.menuRef.current.className) {
        this.setCloseMenu();
      }
    });
  }

  state = {
    cheked: "none"
  };

  params = [
    { name: "EAT", url: "/markets" },
    { name: "WALK", url: "/walks" },
    { name: "EXPLORE", url: "/explore" },
    { name: "FREEWIFIS", url: "/wifis" },
    { name: "GALLERY", url: "/menupics" }
  ];

  setCloseMenu = () => {
    this.setState({
      cheked: "none"
    });
  };

  setOpenMenu = () => {
    this.setState({
      cheked: "flex"
    });
  };

  renderMenu = () => {
    return this.params.map(param => {
      return (
        <li
          key={param.name}
          onClick={() => {
            window.scrollTo(0, 0);
            this.setCloseMenu();
          }}
          className={
            param.name === this.props.selected ? "--selected--menu" : ""
          }
        >
          <Link to={param.url}>{param.name}</Link>
        </li>
      );
    });
  };

  renderMenuMobile = () => {
    return (
      <React.Fragment>
        <span
          className="--nav--menu--close"
          onClick={() => this.setCloseMenu()}
        >
          <i className="fas fa-times" />
        </span>
        <Link className="--nav--menu--go--home" to="/">
          GO HOME
        </Link>
      </React.Fragment>
    );
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
        <span className="--nav--all">
          <i
            className="fas fa-bars"
            title="Show Menu"
            ref={this.menuRef}
            onClick={() => this.setOpenMenu()}
          />
          <ul
            className="--nav--menulist-ver"
            onClick={e => e.stopPropagation()}
            style={{ display: this.state.cheked }}
          >
            {this.renderMenuMobile()} {this.renderMenu()}
          </ul>
        </span>
      </div>
    );
  }
}

export default Menu;
