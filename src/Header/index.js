import React from "react";
import "../index.css";

export default function Header(props) {
  const logoStyle = {
    fontFamily: "Bungee",
    color: "white",
    fontSize: "3.5em",
    display: "inline-block",
    width: "100%"
  };

  const imgStyle = {
    height: "80px",
    verticalAlign: "middle",
    marginLeft: "20px"
  };

  const spanStyle = {
    float: "right",
    marginRight: "50px",
    fontSize: ".5em",
    marginTop: "1.8em",
    cursor: "pointer"
  };

  return (
    <div
      style={{
        display: "inline-block",
        backgroundColor: "#cf383c",
        height: "8em",
        fontFamily: "Chewy",
        paddingLeft: "30px",
        paddingTop: "20px",
        paddingBottom: "20px",
        width: "100%"
      }}
    >
      <nav>
        <div style={logoStyle}>
          MISO HAPPY
          <img
            style={imgStyle}
            src="http://icons.iconarchive.com/icons/thehoth/seo/256/seo-panda-icon.png"
            alt="panda"
          />
          {props.loggedIn === true && (
            <React.Fragment>
              <span onClick={props.logout} style={spanStyle}>
                Logout
              </span>
              <span onClick={props.viewingUserSettings} style={spanStyle}>
                Settings
              </span>
            </React.Fragment>
          )}
        </div>
      </nav>
    </div>
  );
}
