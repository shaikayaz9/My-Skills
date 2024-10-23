import React, { useState } from "react";
import Footer from "./Footer";

function Main() {
  const upperText = (props) => {
    const upText = text.toUpperCase();
    setText(upText);
  };

  const lowerText = (props) => {
    const loText = text.toLowerCase();
    setText(loText);
  };

  const cleartext = (props) => {
    setText("");
  };
  const copytext = (props) => {
    let copyT = document.getElementById("myBox");
    copyT.select();
    navigator.clipboard.writeText(copyT.value);
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter The Text");

  return (
    <>
      <div className="mb-3 container">
        <h2>Enter your text to analyze below</h2>
        <textarea
          className="form-control"
          value={text}
          rows="8"
          id="myBox"
          onChange={handleChange}
        ></textarea>

        <button className="btn btn-primary mt-3 mx-1" onClick={upperText}>
          Upper case
        </button>
        <button className="btn btn-primary mt-3 mx-1" onClick={lowerText}>
          lower case
        </button>
        <button className="btn btn-danger mt-3 mx-1" onClick={cleartext}>
          Clear
        </button>
        <button className="btn btn-warning mt-3 mx-1" onClick={copytext}>
          Copy
        </button>
      </div>
      <div className="container">
        <p>
          {text.split(" ").length} words and {text.length} Charecters
        </p>
        <p>{0.008 * text.split("").length} Minutes to read</p>
        <h5>Preview</h5>
        <p>{Text = text.toLowerCase()
        }</p>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Main;
