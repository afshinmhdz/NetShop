import "./App.css";
import Header from "./components/Header";
import Favorites from "./components/Favorites";
import { Route, Routes } from "react-router-dom";
import Modal from "./components/Modal";
import { useState } from "react";


function App() {
  const [isOpenNotification,setIsOpenNotification]=useState(false);
  return (
    <>
        <div>
          <Header />
          <Routes>
            <Route path="favorites" element={<Favorites/>}/>
            <Route path="modal" element={<Modal/>}/>
          </Routes>
          <Modal onOpen={setIsOpenNotification} open={isOpenNotification}/>
        </div>
    
    </>
  );
}

export default App;
