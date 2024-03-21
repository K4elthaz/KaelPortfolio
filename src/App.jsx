import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
function App() {

  return (
    <>
      <main
      style={{
        display: "flex",
        height: "100%",
        minHeight: "100vh",
      }}
    >
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </Router>
      </main>
    </>
  )
}

export default App
