import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./index.css";
import ContactModal from "./components/Contact me/ContactModal";

function App() {
  const [theme, setTheme] = useState(false);
  const [modal, setModal] = useState(false);


  return (
    <div
      className={`transition duration-500 ${theme ? "bg-white" : "bg-black"}`}
    >
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                {modal && (
                  <ContactModal
                    modal={modal}
                    setModal={setModal}
                    theme={theme}
                  />
                )}
                <Home
                  theme={theme}
                  setTheme={setTheme}
                  modal={modal}
                  setModal={setModal}
                />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
