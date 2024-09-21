import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //whether dark mode is enable or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils-Dark-mode";
      // setInterval(() => {
      //   document.title='TextUtils is Amazing';
      // }, 2000);
      // setInterval(() => {
      //   document.title='Install TextUtils now';
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enabled", "success");
      document.title = "TextUtils-light-mode";
    }
  };
  return (
    <>
      {/* <BrowserRouter> */}
        <Navbar
          title="TextUtil"
          about="About Us"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container">
          {/* <Routes>
            <Route exact path="/about" element={<About />} />
            <Route
              exact
              path="/"
              element={ */}
                <TextForm
                  showAlert={showAlert}
                  heading="Enter the text to analyze below"
                  mode={mode}
                />
              {/* }
            />
          </Routes> */}
        </div>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
