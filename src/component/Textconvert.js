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
    document.getSelection().removeAllRanges();
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
                backgroundColor: props.mode === "light" ? "white" : "#13466e",
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
            } mx-1 my-1`}
            onClick={handleUpClick}
            disabled={writtenText.length === 0}
          >
            Convert to Uppercase
          </button>
          <button
            className={`btn btn-${
              props.mode === "light" ? "primary" : "outline-primary"
            } mx-1 my-1`}
            onClick={handleLoClick}
            disabled={writtenText.length === 0}
          >
            Convert to Lowercase
          </button>
          <button
            className={`btn btn-${
              props.mode === "light" ? "primary" : "outline-primary"
            } mx-1 my-1`}
            onClick={hanleReveseClick}
            disabled={writtenText.length === 0}
          >
            Click to Reverse Words
          </button>
          <button
            className={`btn btn-${
              props.mode === "light" ? "primary" : "outline-primary"
            } mx-1 my-1`}
            onClick={handleCopy}
            disabled={writtenText.length === 0}
          >
            Copy Text
          </button>
          <button
            className={`btn btn-${
              props.mode === "light" ? "primary" : "outline-primary"
            } mx-1 my-1`}
            onClick={handleRemove}
            disabled={writtenText.length === 0}
          >
            Remove Extra Space
          </button>
          <button
            className={`btn btn-${
              props.mode === "light" ? "danger" : "outline-danger"
            } mx-1 my-1`}
            onClick={handleClearClick}
            disabled={writtenText.length === 0}
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
          <b>
            {
              writtenText.split(" ").filter((element) => {
                return element.length !== 0;
              }).length
            }
          </b>{" "}
          Words and <b>{writtenText.length}</b> Characters
        </p>
        <p>
          We can read in{" "}
          <b>
            {writtenText.split(" ").filter((element) => {
              return element.length !== 0;
            }).length * 0.008}
          </b>{" "}
          Minutes
        </p>
        <h3>Preview</h3>
        <p>{writtenText.length > 0 ? writtenText : "Nothing to Preview!"}</p>
      </div>
    </>
  );
}
