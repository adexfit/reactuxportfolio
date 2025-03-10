import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Profootballverse from "./pages/Profootballverse";
import Egolending from "./pages/Egolending";
import Pleasurate from "./pages/Pleasurate";
import Boozle from "./pages/Boozle";
import Filez from "./pages/Filez";
import KanbanBoard from "./pages/KanbanBoard";

import Home from "./pages/Home/Home";
import Layout from "./pages/Layout";
import { useEffect, useRef } from "react";
import { AppScrollProvider } from "./contexts/AppScrollContext";
import Contact from "./pages/Contacts/Contact";

function App() {
  useEffect(() => {
    window.addEventListener("scroll", function () {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > 30) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });

    //   window.addEventListener("scroll", () => {
    //     document
    //       .querySelector(".header")
    //       .classList.toggle("window-scroll", window.scrollY > 0);
    //   });
  }, [window.scrollY]);

  return (
    <AppScrollProvider>
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/profootballverse" element={<Profootballverse />} />
              <Route path="/egolending" element={<Egolending />} />
              <Route path="/pleasurate" element={<Pleasurate />} />
              <Route path="/boozle" element={<Boozle />} />
              <Route path="/filez" element={<Filez />} />
              <Route path="/KanbanBoard" element={<KanbanBoard />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </>
    </AppScrollProvider>
  );
}

export default App;
