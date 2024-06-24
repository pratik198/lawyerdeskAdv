import React from "react";
import "../src/styles/App.css";
import Main from "./Components/Main/Main";
import "./styles.css";
import TopNavBar from "./Components/NavBar/TopNavBar";
const App = () => {
  return (
    <div className="App">
      <TopNavBar />
      <div className="main-layout">
        <Main />
      </div>
    </div>
  );
};

export default App;
