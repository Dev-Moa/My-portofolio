import React from "react";
import Home from "./page/Home";
import My_story from "./page/My_story";
import Error from "./page/Error";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="overflow-hidden relative px-[10%] md:px-[15%] py-[3%] from-gray-900 to-gray-600 bg-gradient-to-r ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="My_story" element={<My_story />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
