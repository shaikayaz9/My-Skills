import React, { useState } from "react";
import { FcExpand, FcCollapse } from "react-icons/fc";
import "./App.css";

function Data({ title, body }) {
  const [show, setshow] = useState(false);

  const handleClick = () => {
    setshow(!show);
  };

  return (
    <div
      className={show ? "accordion-open accordion-item" : "accordion-item"}
      onClick={handleClick}
    >
      <div className="accordion-title">
        <h5>{title}</h5>
        <p>{show ? <FcCollapse size={24} /> : <FcExpand size={24} />}</p>
      </div>
      {show && <p id="para">{body}</p>}
    </div>
  );
}

export default Data;
