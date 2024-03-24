import { useState } from "react";
import "./App.css";
import About from "./component/About";
import Navbar from "./component/Navbar";
import Textconvert from "./component/Textconvert";
import Alert from "./component/Alert";
/* import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; */

function App() {
  const [mode, setmode] = useState("light");
  const [lableMode, setlableMode] = useState("Enable Dark Mode");
  const [alert, setAlert] = useState(null);

  const showAlert = (massage, type) => {
    setAlert({
      msg: massage,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      setlableMode("Enable Light Mode");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode Enabled", "success");
      document.title = "TextUtils in Dark Mode";
    } else {
      setmode("light");
      setlableMode("Enable Dark Mode");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled", "success");
      document.title = "TextUtils in Light Mode";
    }
  };
  return (
    <>
     {/*  <Router> */}
        <Navbar
          title="TextUtils"
          aboutText="About TextUtils"
          mode={mode}
          toggleMode={toggleMode}
          lableMode={lableMode}
        />
        <Alert alert={alert} />
       {/*  <Routes> */}
 {/*          <Route
            exact
            path="/"
            element={ */}
              <Textconvert
                header="Enter text here for analyze below"
                mode={mode}
                showAlert={showAlert}
              />
        {/*    }
          /> 
          <Route
            exact
            path="/about"
            element={<About aboutTitle="About US" />}
          />
        </Routes> */}
{/*       </Router> */}
    </>
  );
}

export default App;
