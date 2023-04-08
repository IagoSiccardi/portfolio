import Home from "./components/Home/Home";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import { useState } from 'react';
import './index.css'

function App() {

  const [theme, setTheme] = useState(false)

  return (
    <div className= {`p-10 transition duration-500 lg:p-20  ${ theme ? "bg-white" : "bg-black"}`}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home theme={theme} setTheme={setTheme}/>} />
          </Routes>
        </BrowserRouter>
      </div>
    
  );
}

export default App;
