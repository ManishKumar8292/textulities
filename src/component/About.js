import React, { useState } from "react";

export default function About(props) {
  /*  const [myStyle, setMyStyle] = useState({
    color: "white",
    backgroundColor: "black",
    border: "1px solid white",
  });

  const [btnText, setBtnText] = useState("Enable Dark Mode");

  const toggleMystyle = () => {
    if (myStyle.color === "white") {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
        border: "1px solid white",
      });
      setBtnText("Enable Dark Mode");
    } else {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
      });
      setBtnText("Enable Light Mode");
    }
  }; */

  let myStyle = {
    color: props.mode === "dark" ? "white" : "#042743",
    background: props.mode == "dark" ? "rgb(36 74 104)" : "white",
  };
  return (
    <div
      className="container"
      style={{ color: props.mode === "dark" ? "white" : "#042743" }}
    >
      <h1 className="my-3">{props.aboutTitle}</h1>
      <div className="accordion my-3" id="accordionExample">
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              <strong>Analyze Your Text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Textutils gives youa way to analyze your text quickly and
              efficiently. Be it word count, Character count etc.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              <strong>Free To Use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Textutils is a free Character Counter tool that provides instant
              Character count & word count statistics for a given text.
              Textutils reports the number of words and Characters. Thus it is
              suitable for writing text with words/characters limit.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              This word counter software works in any web browsers such as{" "}
              <b>Chrome</b> , <b>Firefox</b> , <b>Internet Explorere</b> ,
              <b>Safari</b>, <b>Opera</b>. It suits to count Character in
              facebook, blog, books, excel documents files, documents, essays,
              etc.
            </div>
          </div>
        </div>
      </div>

      {/*   <button className="btn btn-primary my-3" onClick={toggleMystyle}>
        {btnText}
      </button> */}
    </div>
  );
}
