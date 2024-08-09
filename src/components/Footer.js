import React from 'react';
import { Link } from 'react-router-dom';
import './css/Footer.css';
import logoT from './pics/logoT.png'



function Footer({isMobile,language}) {
  const footerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '1rem',
    position: 'static',
    left: 0,
    bottom: 0,
    height: '1rem', 
    display: 'flex',
    justifyContent: 'space-between', // Align items to the right edge
    alignItems: 'center',
  };

  return (
    <>

      {isMobile ? (
        <>
            <div className='dno'>
                <span className='dnoSpan'>
      {isMobile ? (<h3>Powermax&nbsp;d.o.o Backa&nbsp;Palanka</h3>):(<h1>Powermax&nbsp;d.o.o&nbsp;Backa&nbsp;Palanka</h1>)}
      <p style={{ textAlign: 'left',lineHeight: '28px', fontSize: isMobile ? '12px' : '1vw' }}>
        <p className='laptopFooter'>Vuka&nbsp;Karadžića&nbsp;15</p>
        <p className='laptopFooter'> 21400&nbsp;Backa&nbsp;Palanka</p>
        <p className='laptopFooter'> Serbia</p>
      </p>
    </span>
    <span className='dnoSpan'>
      {isMobile ? (<h3><Link to='/contact' className='customLink'>{language === 'en' ? 'Contact' : 'Kontakt'}</Link></h3>):(
        <h1><Link to='/contact' className='customLink'>{language === 'en' ? 'Contact' : 'Kontakt'}</Link></h1>
      )}
      <p style={{ textAlign: 'left',lineHeight: '20px', fontSize: '12px',width:'fit-content' }}>
      <p  className='laptopFooter'>office.powermax@gmail.com</p>
      <p  className='laptopFooter'>gile.borocki@gmail.com</p>
      <p  className='laptopFooter'>bobanradonic@gmail.com</p>
      
      {/* bobanradonic@gmail.com */}

        <div><i style={{ opacity: '0.5' }}>
          Tel:&nbsp;&nbsp;</i>+381&nbsp;60-33-77-946<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+381&nbsp;60&nbsp;02&nbsp;-02-02-8 
          </div></p>
        {/* bobanov br fona */}
    </span>
    </div>
    </>
      ):(
<>

<div className='dnoPC'>
        <div className='dnoDiv' style={{width: "fit-content"}}>
        <p style={{display: 'inline-block'}}><h1 style={{display: 'inline'}}>Powermax&nbsp;d.o.o&nbsp;</h1>&nbsp;Backa&nbsp;Palanka</p>
      <p style={{ textAlign: 'left',lineHeight: '28px', fontSize: isMobile ? '12px' : '1vw' }}>
        <p>Vuka&nbsp;Karadžića&nbsp;15</p>
        <p> 21400&nbsp;Backa&nbsp;Palanka</p>
        <p> Serbia</p>
      </p>
        </div>

        <div className='dnoDiv'>
        <h1><Link to='/contact' className='customLink'>{language === 'en' ? 'Contact' : 'Kontakt'}</Link></h1>
      <p style={{ textAlign: 'left',lineHeight: '28px', fontSize:'1vw',width:'fit-content' }}>
      <p>office.powermax@gmail.com</p>
      <p>gile.borocki@gmail.com</p>
      <p>bobanradonic@gmail.com</p>
      </p>
      {/* bobanradonic@gmail.com */}
        </div>
<div className='dnoDiv' style={{marginRight: '10px'}}>
        <h1 style={{opacity: '0.7'}}>Telefon:</h1>
        <p style={{ textAlign: 'left',lineHeight: '28px', fontSize: isMobile ? '12px' : '1vw' }}>
        <p>Gligorije: +381 60-33-77-946</p>
        <p>Slobodan: +381 60 02-02-02-8</p>
        <p>&nbsp;</p>
</p>
        </div>
        </div>
</>
      )}

    <footer className='footer' style={footerStyle}>

      <span style={{display: 'inline-block', width: '40px', height: '40px',paddingRight: '5px'}}>
        <a href='https://github.com/tile-b'  target="_blank" rel="noopener noreferrer">
      <img style={{
        width: '100%',height: '100%',
        objectFit: 'contain', 
        filter: 'drop-shadow(0 0 0.5px rgba(255, 255, 255, 0.5))',
        cursor:'pointer'
        }} src={logoT} alt='T'></img></a>
      </span>
    {/* <span style={{fontSize:'10px'}}>&nbsp;made by Tile</span> */}

      <span style={{ marginLeft: 'auto' ,marginRight: '40px'}}>&copy; 2024 Powermax d.o.o Backa Palanka {language === 'en' ?"All rights reserved" : "Sva prava zadrzana"}</span>
    </footer>

    </>
  )
}

export default Footer;
