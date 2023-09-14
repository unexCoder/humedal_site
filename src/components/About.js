import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import lngs from '../data/lngs';
import elda from '../logos/elda.png'
//import sntf from '../logos/fomento.png'
// import caja from '../logos/caja.png'
import humedal from '../logos/humedal.png'
//import fumi from '../logos/fhya.png'
import free from '../logos/free.png'
import biblio from '../logos/biblio.png'
// import musica from '../logos/musica.png'
// import qubil from '../logos/qubil.png'
import ispm from '../logos/ispm.png'
import flecha from '../logos/flecha.png'
import rosa from '../logos/rosario.png'
import consejo from '../logos/consejo.png'
import caso from '../logos/caso.png'
import paraphernalia from '../logos/paraphernalia.png'
import estevez from '../logos/estevez-removebg-preview.png'
import hum from '../logos/hum.png'
import lavarden from '../logos/lavarden.png'
import { FaBandcamp, FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

export const About = () => {
  
  const scrollToTop = () => {
    window.scrollTo(0, 0)
  };
  
  const {t,i18n} = useTranslation();

  return (
    <div className="App">
        <a href="#auspicios">
          <div className="container-dark">
              <div className="text-holder">
                  <h4>FESTIVAL INTERNACIONAL DE IMPROVISACIÓN LIBRE Y ARTES SONORAS</h4>                
                  <p>{t('about_1')}</p> 
                  <p>{t('about_2')}</p> 
                  <p>{t('about_0')}</p> 
              </div>
              
              <div className='social'>
                <a href="https://festivalhumedal.bandcamp.com/" target="_blank" className='socialLink' rel="noreferrer"><FaBandcamp /></a>
                <a href="https://www.youtube.com/channel/UCZxI_xW8qbjIC2MDY40kfQw" target="_blank" className='socialLink' rel="noreferrer"><FaYoutube /></a>
                <a href="https://www.instagram.com/festivalhumedal/" target="_blank" className='socialLink' rel="noreferrer">< FaInstagram /></a>
                <a href="https://www.facebook.com/festivalhumedal/" target="_blank" className='socialLink' rel="noreferrer"><FaFacebook /></a>
                <a href="https://twitter.com/festivalhumedal" target="_blank" className='socialLink' rel="noreferrer"><FaTwitter /></a>
              </div>  
          </div>
        </a>

        <div className="container-green" onClick={scrollToTop} id="auspicios">
          <Link to={'/'}>
            <div className="container-logo">
              <img src={humedal} alt="humedal" style={{filter:'brightness(0)'}}/>
              <img src={biblio} alt="biblioteca argentina" style={{width:'5em'}}/>            
              <img src={free} alt="all free ciclo" />
              <img src={consejo} alt="consejo" style={{width:'6em',filter:'invert(100%)'}}/>
              {/* <img src={sntf} alt="santa fe cultura" style={{width:'11em',filter:'brightness(0)'}}/> */}
              {/* <img src={caja} alt="caja negra" style={{width:'7em'}}/> */}
              {/* <img src={fumi} alt="facultad de humanidades" style={{width:'8em'}}/> */}
              <img src={elda} alt="america" style={{width:'6em',padding:'0 1em'}} />
              {/* <img src={musica} alt="musica" /> */}
              {/* <img src={qubil} alt="el qubil" /> */}
              <img src={flecha} alt="flechabus" style={{filter:'brightness(0)'}}/>
              <img src={rosa} alt="rosario" style={{width:'6em',filter:'invert(100%)'}}/>
              <img src={ispm} alt="carlos guastavino" style={{width:'8em',padding:'0 1em'}}/>
              <img src={caso} alt="centro de arte sonoro" style={{width:'8em',padding:'1em'}}/>
              <img src={paraphernalia} alt="club de jazz rosario" style={{width:'6em'}}/>
              <img src={estevez} alt="museo estevez" style={{width:'8em',padding:'1em'}}/>
              <img src={hum} alt="hum salas" style={{padding:'0 0',width:'6em',filter:'invert(100%)'}}/>
              <img src={lavarden} alt="plataforma lavarden" style={{padding:'0 0',width:'8em',filter:'brightness(10%)'}}/>
            </div>
          </Link>
        </div>
        
        <div className="container-button">
          {Object.keys(lngs).map((lng) => (
            <button className='button' tipe='submit' key={lng} onClick={ () => i18n.changeLanguage(lng)} >{lngs[lng].NativeName}</button>
          ))}
        </div>  

    </div>
    
  )
}

export default About;