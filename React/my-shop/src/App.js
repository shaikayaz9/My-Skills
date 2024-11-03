import React, { useState, useEffect } from "react";
import Data from "./components/Data";

function App() {
  const url = "https://jsonplaceholder.typicode.com/posts";

  const [showData, setshowData] = useState([]);

  const loadData = () => {
    fetch(url, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          setshowData(result);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    loadData();
  }, []);
  const myStyle = {
    textAlign: "center",
    height: "100px",
    display: "flex",
    justifyContent: "center",
    lineHeight: "100px",
    color: "#fff",
    backgroundColor: "orangered",
  };
  return (
    <div className="container">
      <h4 style={myStyle}>React Accordion</h4>

      <div className="row">
        {showData.map((item, index) => (
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm--12" key={index}>
            <Data {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
