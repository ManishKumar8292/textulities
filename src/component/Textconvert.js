import React, { useState } from "react";

export default function Textconvert(props) {
  const [writtenText, setText] = useState("");
  // text = "Enter Text Here1"; wrong way to use
  // setText = "Enter Text Here 2";

  const handleOnchange = (event) => {
    // console.log("This is on Change");
    setText(event.target.value);
    // console.log(event);
  };

  const handleUpClick = () => {
    // console.log("This is on Click Uppercase" + writtenText);
    let newText = writtenText.toUpperCase();
    setText(newText);
    props.showAlert("Coverted in Uppercase", "success");
  };

  const handleLoClick = () => {
    // console.log("This is on Click Uppercase" + writtenText);
    let newText = writtenText.toLowerCase();
    setText(newText);
    props.showAlert("Coverted in Lowercase", "success");
  };

  const hanleReveseClick = () => {
    let newText = writtenText.split("").reverse().join("");
    setText(newText);
    props.showAlert("Words are reversed ", "success");
  };

  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Words are Copied", "success");
  };

  const handleRemove = () => {
    let newText = writtenText.split(/[ ]+/);
    setText(newText.join(" "));
    // console.log("this");
    props.showAlert("All Extra Spaces Removed", "success");
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("All Words are Cleared", "success");
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "#042743" : "white" }}
      >
        <div className="mt-4 mb-2">
          <h3>{props.header}</h3>
          <div className="my-3">
            <textarea
              className="form-control"
              style={{
                backgroundColor: props.mode === "light" ? "white" : "grey",
                color: props.mode === "light" ? "#042743" : "white",
              }}
              value={writtenText}
              onChange={handleOnchange}
              id="myBox"
              rows="8"
            ></textarea>
            {/* <p>{newText}</p> */}
          </div>

          <button
            className={`btn btn-${
              props.mode === "light" ? "primary" : "outline-primary"
            } mx-1`}
            onClick={handleUpClick}
          >
            Convert to Uppercase
          </button>
          <button
            className={`btn btn-${
              props.mode === "light" ? "primary" : "outline-primary"
            } mx-1`}
            onClick={handleLoClick}
          >
            Convert to Lowercase
          </button>
          <button
            className={`btn btn-${
              props.mode === "light" ? "primary" : "outline-primary"
            } mx-1`}
            onClick={hanleReveseClick}
          >
            Click to Reverse Words
          </button>
          <button
            className={`btn btn-${
              props.mode === "light" ? "primary" : "outline-primary"
            } mx-1`}
            onClick={handleCopy}
          >
            Copy Text
          </button>
          <button
            className={`btn btn-${
              props.mode === "light" ? "primary" : "outline-primary"
            } mx-1`}
            onClick={handleRemove}
          >
            Remove Extra Space
          </button>
          <button
            className={`btn btn-${
              props.mode === "light" ? "danger" : "outline-danger"
            } mx-1`}
            onClick={handleClearClick}
          >
            Clear
          </button>
        </div>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "#042743" : "white" }}
      >
        <h3>Text Summary</h3>
        <p>
          <b>{writtenText.split(" ").length - 1}</b> Words and{" "}
          <b>{writtenText.length}</b> Characters
        </p>
        <p>
          We can read in <b>{writtenText.split(" ").length * 0.8}</b> Minutes
        </p>
        <h3>Preview</h3>
        <p>
          {writtenText.length > 0
            ? writtenText
            : "Enter Something Text for Preview Here."}
        </p>
      </div>
    </>
  );
}
