import HomeOneLayout from "./components/HomeOneLayout";
import "./sass/main.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import HomeTwoLayout from "./components/HomeTwoLayout";
import HomeTwo from "./pages/HomeTwo";
import 'swiper/css';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomeOneLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<AboutPage />} />
          </Route>
          <Route path="/home-two" element={<HomeTwoLayout />}>
            <Route index element={<HomeTwo />} />
            <Route path="about" element={<AboutPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App