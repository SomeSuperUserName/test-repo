import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Item from "./components/Item";
import { FetchListProvider } from "./context/listContext";
import { CounterContextProvider } from "./context/counterContext";

ReactDOM.render(
  <React.StrictMode>
    {/* <Link to="/">Home</Link> */}
    <Router>
      <FetchListProvider>
        <CounterContextProvider>
          <Routes>
            <Route path={`/:id`} element={<Item />} />
            <Route path="/" element={<App />} />
          </Routes>
        </CounterContextProvider>
      </FetchListProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
