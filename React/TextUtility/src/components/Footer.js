import React from "react";

const day = new Date();
const year = day.getFullYear();

const myFoot = {
  textAlign: "center",
  marginTop: "100px",
};

function Footer() {
  return <div style={myFoot}>Ayaz Copyright by &copy; {year}</div>;
}

export default Footer;
