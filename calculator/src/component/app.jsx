import React, { Component } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Calculator from "./content/calculator";
import NotFound from "./content/notFound";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <Routes>
            <Route path="/" element={<Calculator />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate replace to="/404" />} />
          </Routes>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
