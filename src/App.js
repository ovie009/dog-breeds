import { BrowserRouter, Routes, Route } from "react-router-dom";
import './css/App.css';
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Search from "./pages/Search";
import { useState } from "react";

function App() {

  
  // state varaible to control visibility of dog info section
  const [displayDogInfo, setDisplayDogInfo] = useState(false);

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home setDisplayDogInfo={setDisplayDogInfo} />} />
            <Route path="search" element={<Search displayDogInfo={displayDogInfo} setDisplayDogInfo={setDisplayDogInfo} />} />
          </Route>
        </Routes>       
      </BrowserRouter>
    </div>
  );
}

export default App;
