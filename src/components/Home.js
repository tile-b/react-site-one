import React from 'react';
import unroll from './pics/divHome.png'
import { Link } from 'react-router-dom';


const Home = ({ language, toggleLanguage,isMobile }) => {

return(
  <>
<div style={{marginBottom: '15px',position: 'relative',display: 'inline-block', boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"}}>
  <img src={unroll} alt='unroll' style={{width: '100%',height: 'auto',display:"block"}}></img>
  {language === 'en' ? 
 <div className='overlay' style={{fontSize: '3.3vw',color: '#bdbcd5'}}>
  
  <b>Producer of high quality<br/> termo transfer paper </b>
 </div> :
  <div className='overlay' style={{fontSize: '3.3vw',color: '#bdbcd5'}}>

  <b>Proizvodjač visoko kvalitetnog <br/>termo transfer papira</b>
 </div>
}
  </div>

  {/* <h1 style={{textAlign: 'center'}}>{language === 'en' ? 'About us' : 'O Nama'}</h1> */}

  <div className='container' style={{ marginTop: '10px'}}>
  {!isMobile ? ( 
  <p
  style={{
    fontFamily: 'sans-serif',
    lineHeight: '1.5',
    paddingLeft: '250px',
    paddingRight: '250px',
    fontSize: 'x-large'
  }}>

    {/* {language === 'en' ? 'Company' : 'Kompanija'} <b>Powermax DOO Backa Palanka</b>
    {language === 'en' ? ' is established in 2007 in Backa Palanka with the goal of producing the highest quality siliconised paper.' :
      ' je osnovana 2007. godine u Bačkoj Palanci sa ciljem proizvodnje visokokvalitetnog silikonizovanog papira.'}
    <br /><br /> */}

 <p><b><h2>Dobrodošli u Powermax d.o.o.</h2></b></p>
<p style={{paddingLeft: '30px'}}>
Vaš pouzdan partner, proizvođač visoko kvalitetnog termo transfer papira za izradu preslikača za sito štampu na tekstilu.<br/>

Powermax d.o.o. je porodična firma osnovana 2007. godine u Bačkoj Palanci u Srbiji.
Naša posvećenost kvalitetu i inovacijama omogućava da vam ponudimo proizvode koji zadovoljavaju najviše standarde.<br/>
</p>

<p style={{paddingLeft:'15px'}}><b>Naša misija</b></p>
<p style={{paddingLeft: '30px'}}>
Misija kompanije Powermax d.o.o. je da obezbedi najkvalitetniji transfer papir koji će pomoći našim klijentima da postignu savršene rezultate u radu. 
</p>

<p style={{paddingLeft:'15px'}}><b>Naši proizvodi</b></p>

<p style={{paddingLeft: '30px'}}>
Powermax d.o.o. transfer papiri su dizajnirani da pruže izuzetnu preciznost, postojanost boja, imaju odličnu dimenzionalnu stabilnost i kompatiblini su
sa svim plastisol bojama i svim vrstama lepkova.
Pogodni za visebojnu stampu.

</p>
<p style={{paddingLeft: '30px'}}>
Vise o Proizvodima pogledajte <Link to="/products">ovde</Link>.</p>

<p style={{paddingLeft:'15px'}}><b>
Zašto odabrati Powermax d.o.o.?</b></p>

<p style={{lineHeight: '50px', paddingLeft:'40px'}}> 
<ul>
  <li><b>
Kvalitet i pouzdanost:</b> Proizvodi su rezultat dugogodišnjeg iskustva i pažljivog odabira materijala, što garantuje konstantan kvalitet,
dugotrajnost i postojanost otisaka.
</li><li><b>
Visoka preciznost: </b>Omogućava precizne i jasne otiske, bez razlivanja ili gubitka detalja.
</li><li><b>
Prilagođena rešenja:</b> Nudimo rešenja koja će najbolje odgovarati vašim zahtevima.
</li><li><b>
 Ekološki prihvatljiv: </b>Izrađeni od materijala koji su sigurni za okolinu i ne sadrže štetne hemikalije.
</li>
</ul>
</p><br/>
<p style={{paddingLeft:'15px'}}><b>
<Link to="/contact" style={{textDecoration: 'none'}}>Kontaktirajte nas</Link></b></p>
<p style={{paddingLeft: '30px'}}>
Spremni smo da odgovorimo na sva vaša pitanja i zahteve.<br/>
</p>
    <br /><br />
  </p>
      ):(
        <p
    style={{
      fontFamily: 'sans-serif',
      lineHeight: '1.5',
      fontSize: 'x-large'
    }}>
  
  <p><b><h2>Dobrodošli u Powermax d.o.o.</h2></b></p>
<p style={{paddingLeft: '30px'}}>
Vaš pouzdan partner, proizvođač visoko kvalitetnog termo transfer papira za izradu preslikača za sito štampu na tekstilu.<br/>

Powermax d.o.o. je porodična firma osnovana 2007. godine u Bačkoj Palanci u Srbiji.
Naša posvećenost kvalitetu i inovacijama omogućava da vam ponudimo proizvode koji zadovoljavaju najviše standarde.<br/>
</p>

<p style={{paddingLeft:'15px'}}><b>Naša misija</b></p>
<p style={{paddingLeft: '30px'}}>
Misija kompanije Powermax d.o.o. je da obezbedi najkvalitetniji transfer papir koji će pomoći našim klijentima da postignu savršene rezultate u radu. 
</p>

<p style={{paddingLeft:'15px'}}><b>Naši proizvodi</b></p>

<p style={{paddingLeft: '30px'}}>
Powermax d.o.o. transfer papiri su dizajnirani da pruže izuzetnu preciznost, postojanost boja, imaju odličnu dimenzionalnu stabilnost i kompatiblini su
sa svim plastisol bojama i svim vrstama lepkova.
Pogodni za visebojnu stampu.

</p>
<p style={{paddingLeft: '30px'}}>
Vise o Proizvodima pogledajte <Link to="/products">ovde</Link>.</p>

<p style={{paddingLeft:'15px'}}><b>
Zašto odabrati Powermax d.o.o.?</b></p>

<p style={{lineHeight: '50px', paddingLeft:'40px'}}> 
<ul>
  <li><b>
Kvalitet i pouzdanost:</b> Proizvodi su rezultat dugogodišnjeg iskustva i pažljivog odabira materijala, što garantuje konstantan kvalitet,
dugotrajnost i postojanost otisaka.
</li><li><b>
Visoka preciznost: </b>Omogućava precizne i jasne otiske, bez razlivanja ili gubitka detalja.
</li><li><b>
Prilagođena rešenja:</b> Nudimo rešenja koja će najbolje odgovarati vašim zahtevima.
</li><li><b>
 Ekološki prihvatljiv: </b>Izrađeni od materijala koji su sigurni za okolinu i ne sadrže štetne hemikalije.
</li>
</ul>
</p><br/>
<p style={{paddingLeft:'15px'}}><b>
<Link to="/contact" style={{textDecoration: 'none'}}>Kontaktirajte nas</Link></b></p>
<p style={{paddingLeft: '30px'}}>
Spremni smo da odgovorimo na sva vaša pitanja i zahteve.<br/>
</p>
    <br /><br />
  </p>

      )}
</div>

      </>
);
}

export default Home;