// import React from "react";
// import "../src/styles/App.css";
// import Main from "./Components/Main/Main";
// import "./styles.css";
// import TopNavBar from "./Components/NavBar/TopNavBar";
// import QuestionPage from "./Components/QuestionPage/QuestionPage";
// const App = () => {
//   return (
//     <div className="App">
//       <TopNavBar />
//       <div className="main-layout">
//         <Main />
//       </div>
//     </div>
//   );
// };

// export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../src/styles/App.css";
import Main from "./Components/Main/Main";
import "./styles.css";
import TopNavBar from "./Components/NavBar/TopNavBar";
import QuestionPage from "./Components/QuestionPage/QuestionPage";

const App = () => {
  return (
    <Router>
      <div className="App">
        <TopNavBar />
        <div className="main-layout">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/questions" element={<QuestionPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
