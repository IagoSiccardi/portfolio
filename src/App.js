import themes from './themes.js'
import Home from "./components/Home/Home";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import { useState } from 'react';
import './index.css'

function App() {
  console.log(themes)

  const [theme, setTheme] = useState(false)

  return (
    <div className= {`p-20 transition duration-500 ${ theme ? "bg-white" : "bg-black"}`}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home theme={theme} setTheme={setTheme}/>} />
          </Routes>
        </BrowserRouter>
      </div>
    
  );
}

export default App;
