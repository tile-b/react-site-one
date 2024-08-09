import React, { useState, useEffect } from 'react';
import { Routes, Route,useLocation } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import Products from './Products';
import Footer from "./Footer";
import './css/index.css';
import './css/NavBar.css';
import './css/Contact.css';
import './css/Links.css';
import './css/App.css';
import './css/SideNav.css';
import NavBar from './NavBar';
import skrol from './pics/scrll.png'


const App = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [language, setLanguage] = useState('en');
  const { pathname } = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1500); // Adjust the breakpoint as needed
    };

    handleResize(); // Set initial state
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'srb' : 'en');
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);


  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  };

  return (
    <>
      <div className="App">

        <NavBar language={language}  isMobile={isMobile} toggleLanguage={toggleLanguage} setLanguage={setLanguage} />

        <Routes>
          <Route index element={<Home language={language} toggleLanguage={toggleLanguage} isMobile={isMobile}/>} />
          <Route path="/react-site-one" element={<Home language={language} toggleLanguage={toggleLanguage} isMobile={isMobile}/>} />
          <Route path="/contact" element={<Contact language={language} toggleLanguage={toggleLanguage}  isMobile={isMobile} />} />
          <Route path="/products" element={<Products language={language} toggleLanguage={toggleLanguage} />} />
          <Route path="*" element={<Home />} />
        </Routes>

        {showButton && (
          
        <button onClick={scrollToTop} className="back-to-top">
          {isMobile ? (<img src={skrol} alt='skrol' style={{width: "40px"}}></img> ):(
            <img src={skrol} alt='skrol' style={{width: "60px"}}></img>
          )}
        </button>
      )}


          <Footer isMobile={isMobile} language={language} />


      </div>
    </>
  );
};

export default App;



