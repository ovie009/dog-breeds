import { BrowserRouter, Routes, Route } from "react-router-dom";
import './css/App.css';
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Search from "./pages/Search";

function App() {


  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="search" element={<Search />} />
          </Route>
        </Routes>       
      </BrowserRouter>
    </div>
  );
}

export default App;
