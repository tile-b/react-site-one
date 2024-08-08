import { FaDownload} from 'react-icons/fa';
import { useState,useEffect } from 'react';
import fifth from '../pics/bw120Pic.png';
import "../css/Modal.css";
import pdf120bw from '../pdfs/120BW.pdf'

const Pdf120bw = () => {
  const openModal = () => {
    document.getElementById('120').style.display = 'block';
  };

  const closeModal = () => {
    document.getElementById('120').style.display = 'none';
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
      <div id="120" className="modal" onClick={closeModal}>
        <div className="modal-content animate" >
          {!isMobile ? (
            <a href={pdf120bw} download="120BW" target="_blank" rel="noreferrer" className='custom-link2'>
          <button className="dwload" href={pdf120bw} download={"pdf120bw"}>
              <b style={{fontSize: '20px'}}>Download&nbsp;</b><FaDownload/></button></a>
          ):(
            <a href={pdf120bw} download="120BW" target="_blank" rel="noreferrer" className='custom-link2'>
            <button className="dwloadM">
                <b style={{fontSize: '20px'}}>Download&nbsp;</b><FaDownload/></button></a>
          )};
            {!isMobile ? (
          <button className="closebtn" onClick={closeModal}>×</button>
            ):(
          <button className="closebtnM" onClick={closeModal}>×</button>
            )};
          <img className="pdfSlika" src={fifth} alt="plav" 
          style={{width: isMobile ? '100vw':'50%',marginTop: isMobile ? '100px': "0" }}
          onClick={(e) => {e.stopPropagation();}}/>



        </div>
      </div>
    </>
  );
};

export default Pdf120bw;