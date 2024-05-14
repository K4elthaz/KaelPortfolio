import React, { useState } from 'react'
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  
  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <>
      <main
      className={`${isDarkMode ? 'dark-mode' : 'light-mode'}`}
      style={{
        display: "flex",
        height: "100%",
        minHeight: "100vh",
      }}
    >
        <Router>
          <Routes>
            <Route path="/" element={<Home isDarkMode={isDarkMode} toggleMode={toggleMode} />}></Route>
          </Routes>
        </Router>
      </main>
    </>
  )
}

export default App
