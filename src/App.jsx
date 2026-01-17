import HomeOneLayout from "./components/HomeOneLayout";
import "./sass/main.scss";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import HomeTwoLayout from "./components/HomeTwoLayout";
import HomeTwo from "./pages/HomeTwo";
import 'swiper/css';
import { useEffect } from "react";
import ServicesPage from "./pages/ServicesPage";
import ServiceDetails from "./pages/ServiceDetails";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/BlogPage";
import BlogDetails from "./pages/BlogDetails";
import ProjectPage from "./pages/ProjectPage";

const App = () => {

  const BodyClassHandler = () => {
    const location = useLocation();

    useEffect(() => {
      const homePages = ["/", "/home-two"];

      if (homePages.includes(location.pathname)) {
        document.body.classList.add("section-bg");
      } else {
        document.body.classList.remove("section-bg");
      }

      return () => {
        document.body.classList.remove("section-bg");
      };
    }, [location]);

    return null;
  };

  <BodyClassHandler />
  return (
    <>
      <Router>
        <BodyClassHandler />
        <Routes>
          <Route path="/" element={<HomeOneLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="service-details" element={<ServiceDetails />} />
            <Route path="projects" element={<ProjectPage />} />
            <Route path="blog" element={<BlogPage />} />
            <Route path="blog-details" element={<BlogDetails />} />
            <Route path="contact" element={<ContactPage />} />
          </Route>
          <Route path="/home-two" element={<HomeTwoLayout />}>
            <Route index element={<HomeTwo />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="projects" element={<ProjectPage />} />
            <Route path="blog" element={<BlogPage />} />
            <Route path="blog-details" element={<BlogDetails />} />
            <Route path="contact" element={<ContactPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App