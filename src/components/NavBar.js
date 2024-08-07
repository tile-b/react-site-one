import React from 'react';
import './css/NavBar.css';
import { Link } from 'react-router-dom';

import SideNav from "./SideNav"
import srb from './pics/flagSrb.png';
import en from './pics/flagEng.png';
import logo from './pics/TransferPaper.png';
import logoP from './pics/TransferPaper4.png'

const NavBar = ({language, isMobile, setLanguage, toggleLanguage}) => {

  return (

      <header id="myHeader" className="my-header">
          <div className='headDiv'>
{/* Logo */}
            <div className='logoDiv'>
                {isMobile ? (
                  <span><Link to="/" className='customLink'>
                  <img src={logoP} alt="pm_logo" style={{ objectFit: 'cover', width: '250px',maxWidth: '100%',minWidth: '250px',height: 'auto',}} />
                  </Link>
                  </span> ):(
                  <span><Link to="/" className='customLink'>
                  <img src={logo} alt="pm_logo" style={{ objectFit: 'cover', width: '450px',maxWidth: '100%',minWidth: '250px',height: 'auto',paddingLeft: '40px'}} />
                  </Link></span> 
                  )}  
{/*Backa Palanka*/}                  
                  {!isMobile && 
                  <span style={{ fontSize: '20px', paddingLeft: '10px', opacity: '0.8',color: 'rgb(98, 96, 106)',paddingBottom: '20px' }}>Backa Palanka</span>
                  }
                
            </div>
            <div className='menuDiv'>
{/*Meni*/}              
              {isMobile ? (                
                  <SideNav language={language} setLanguage={setLanguage} />
              ) : (
                <>
                    <>
                      <span className='paddin underline-on-hover ' style={{ fontSize: '25px' }}>
                        <Link to="/" className='custom-link'>{language === 'en' ? <>About&nbsp;us</> : <>O&nbsp;nama</>}</Link></span>
                      <span className='paddin underline-on-hover' style={{ fontSize: '25px' }}>
                        <Link to="/products" className='custom-link'>{language === 'en' ? 'Products' : 'Proizvodi'}</Link></span>
                      <span className='paddin underline-on-hover' style={{ fontSize: '25px', paddingRight: '40px' }}>
                        <Link to="/contact" className='custom-link'>{language === 'en' ? 'Contact' : 'Kontakt'}</Link></span>
                    </>
                  <span className='spanLang'>
                    <div style={{ paddingRight: '7px' }}>
                      <button onClick={() => setLanguage('en')} className={language === 'en' ? 'languageButton activeLanguageButton' : 'languageButton'}>
                        <img src={en} alt='eng' style={{ width: '50px' }}></img>
                        </button>
                        </div>
                    <div className="dividerLang"></div>
                    <div style={{ paddingLeft: '7px' }}>
                      <button onClick={() => setLanguage('srb')} className={language === 'srb' ? 'languageButton activeLanguageButton' : 'languageButton'}>
                        <img src={srb} alt='srb' style={{ width: '50px' }}></img>
                        </button>
                        </div>
                  </span>
                </>
              )}
            </div>
          </div>
        </header>
  );
};

export default NavBar;
