import themes from './themes.js'
import Home from "./components/Home/Home";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import { useState } from 'react';

function App() {
  console.log(themes)

  const [theme, setTheme] = useState(false)

  return (
      <div className="container ">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home theme={theme} setTheme={setTheme}/>} />
          </Routes>
        </BrowserRouter>
      </div>
    
  );
}

export default App;
