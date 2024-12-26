import "./App.css";
import Header from "./components/Header";
import Favorites from "./components/Favorites";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
     
        <Header />
        <Routes>
          <Route path="favorites" element={<Favorites/>}/>
        </Routes>
    
    </>
  );
}

export default App;
