import React from 'react';
import phone from './pics/phone.png'
import mail from './pics/email.png'
import addres from './pics/location.png'
import linkedin from './pics/linkedin.png'
import './css/Contact.css';
import { Link } from 'react-router-dom';
import ContactForm from '../ContactForm';
import { useState } from 'react';


const Contact = ({ language, toggleLanguage,isMobile}) => {

return (
  <>
  <h1 style={{paddingLeft: '30px',color: '#24569b'}}>{language === 'en' ? 'Contact Us' : 'Kontaktirajte Nas'}</h1>
<div className="container" style={{padding: '40px',borderRadius: '15px',marginTop: '30px'}}>

  {/*Kontak informacije*/}

    <div className='my-div' style={{'margin': isMobile ? '0px 5px' : '0px 50px'}}>

<h2><b style={{fontSize: '30px'}}>Gligorije Borocki <i style={{fontSize: '22px'}}>{language === 'en' ? '(General Director)' : '(Generalni Direktor)'}</i></b><br />
<br /><br/>
{/* Tehnicki direktor */}
                <p style={{paddingBottom: '10px'}}> 
                <i><img title='mail' src={mail} alt='mail' style={{width: '30px', height: '30px', marginRight: '5px'}}/></i>
                <span className="paddin shrinkTxt" style={{fontSize: '19px'}}>gile.borocki@gmail.com</span>
                </p>
                 {/* bobanradonic@gmail.com */}

                <p style={{paddingBottom: '10px'}}> 
                <i><img title='fon' src={phone} alt='phone' style={{width: '30px', height: '30px', marginRight: '5px'}}/></i>
                <span className="paddin">+381 60 33-77-946</span>
                </p>
                {/* +381 60 02-02-02-8  dodaj link ka linkedinu*/}

                <p style={{paddingBottom: '20px'}}> 
                <i><a href="https://www.linkedin.com/in/gligorije-borocki-30574b20a/?originalSubdomain=rs"   target="_blank" rel="noopener noreferrer" >
                <img title='linkedin' src={linkedin} alt='linkedin' style={{width: '30px', height: '30px', marginRight: '5px'}}/>
                </a></i>
                <span className="paddin"><a style={{textDecoration: 'none',color: '#24569b'}}
  href="https://www.linkedin.com/in/gligorije-borocki-30574b20a/?originalSubdomain=rs" 
  target="_blank" 
  rel="noopener noreferrer"
>Gligorije Borocki</a></span>
                </p>

                <br />

</h2>
</div>

<div className='my-div' style={{'margin': isMobile ? '0px 5px' : '0px 50px'}}>

<h2><b style={{fontSize: '30px'}}>Slobodan Radonic <i style={{fontSize: '22px'}}>{language === 'en' ? '(Technical Director)' : '(Tehnicki Direktor)'}</i></b><br />
<br /><br/>
{/* Tehnicki direktor */}
                <p style={{paddingBottom: '10px'}}> 
                <i><img title='mail' src={mail} alt='mail' style={{width: '30px', height: '30px', marginRight: '5px'}}/></i>
                <span className="paddin shrinkTxt" style={{'fontSize': isMobile ?  '18px' : '19px'}}>bobanradonic@gmail.com</span>
                </p>
                 

                <p style={{paddingBottom: '10px'}}> 
                <i><img title='fon' src={phone} alt='phone' style={{width: '30px', height: '30px', marginRight: '5px'}}/></i>
                <span className="paddin">+381 60 02-02-02-8</span>
                </p>
                

                {/* <p style={{paddingBottom: '20px'}}> 
                <i><img title='linkedin' src={linkedin} alt='linkedin' style={{width: '30px', height: '30px', marginRight: '5px'}}/></i>
                <span className="paddin">Slobodan Radonic</span>
                </p> */}
                {/* linkedin linkove ubaciti  */}

                <p><div style={{display: 'flex'}}>
                <i><img title='addres' src={addres} alt='phone' style={{width: '30px', height: '30px', marginRight: '5px'}}/></i>
                <span className="paddin">Vuka Karadžića 15<br/> 21400 Bačka Palanka, {language === 'en' ? 'Serbia' : 'Srbija'}</span>
                </div>
                </p>

                <br />

</h2>
</div>

  {/*Upit Forma*/}
  <div className='my-div' style={{'margin': isMobile ? '0px 5px' : '0px 50px'}}>
    <div className='upit'>
      <h2 style={{display: 'flex', justifyContent: 'center'}}>{language === 'en' ? 'Direct Contact' : 'Direktan Kontakt'}</h2>
      <form>
        <label htmlFor="username">{language === 'en' ? 'Name' : 'Ime'}:</label><br/>
        <input type="text" id="username" name="username" placeholder={language === 'en' ? 'Name' : 'Ime'} /><br/>
        <label htmlFor="email">E-mail:</label><br/>
        <input type="email" id="email" name="email" cols="40" placeholder={language === 'en' ? "Your mail" : 'Vaš mail'} /><br/>
        <label htmlFor="comments">{language === 'en' ? 'Message' : 'Poruka'}:</label><br/>
        <textarea id="comments" name="comments" rows="4" cols="40" placeholder={language === 'en' ? "Your message" : 'Vaš upit'}></textarea>
        <button className='button' type="submit">{language === 'en' ? 'Send' : 'Pošalji'}</button>
      </form>
    </div>
</div>
    </div>

  

<br/>
</>
);

  };
  
  export default Contact;
  