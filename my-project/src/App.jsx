import "./App.css";
import Header from "./components/Header";
import Favorites from "./components/Favorites";
import { Route, Routes } from "react-router-dom";
import Modal from "./components/Modal";


function App() {
  return (
    <>
        <Header />
        <Routes>
          <Route path="favorites" element={<Favorites/>}/>
        </Routes>
        {/* <Modal/> */}
    
    </>
  );
}

export default App;
