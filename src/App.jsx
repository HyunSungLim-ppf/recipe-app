import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/header/Header";
import FoodList from "./components/foodList/FoodList";
import {Home} from "./pages/home/Home";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        {/* <FoodList/> */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
