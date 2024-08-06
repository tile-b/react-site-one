import { FaDownload} from 'react-icons/fa';
import { useState,useEffect } from 'react';
import forth from '../pics/cp125sPic.png';
import "../css/Modal.css";
import pdf125s from '../pdfs/125S.pdf'

const Pdf125s = () => {
  const openModal = () => {
    document.getElementById('125').style.display = 'block';
  };

  const closeModal = () => {
    document.getElementById('125').style.display = 'none';
  };
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1268); // Adjust the breakpoint as needed
    };

    handleResize(); // Set initial state
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className="details" onClick={openModal}><i>More details&nbsp;&#x279F;</i></div>
      <div id="125" className="modal" onClick={closeModal}>
        <div className="modal-content animate" >
          {!isMobile ? (
            <a href={pdf125s} download="125S" target="_blank" rel="noreferrer" className='custom-link2'>
          <button className="dwload" href={pdf125s} download={"pdf125s"}>
              <b style={{fontSize: '20px'}}>Download&nbsp;</b><FaDownload/></button></a>
          ):(
            <a href={pdf125s} download="125S" target="_blank" rel="noreferrer" className='custom-link2'>
            <button className="dwloadM">
                <b style={{fontSize: '20px'}}>Download&nbsp;</b><FaDownload/></button></a>
          )};
            {!isMobile ? (
          <button className="closebtn" onClick={closeModal}>×</button>
            ):(
          <button className="closebtnM" onClick={closeModal}>×</button>
            )};
          <img className="pdfSlika" src={forth} alt="plav" 
          style={{width: isMobile ? '100vw':'50%',marginTop: isMobile ? '100px': "0" }}
          onClick={(e) => {e.stopPropagation();}}/>



        </div>
      </div>
    </>
  );
};

export default Pdf125s;