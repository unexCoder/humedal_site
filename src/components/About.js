import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import lngs from '../data/lngs';
import elda from '../logos/elda.png'
import sntf from '../logos/fomento.png'
import caja from '../logos/caja.png'
import humedal from '../logos/humedal.png'
import fumi from '../logos/fhya.png'
import free from '../logos/free.png'
import biblio from '../logos/biblio.png'
import musica from '../logos/musica.png'
import qubil from '../logos/qubil.png'
import ispm from '../logos/ispm.png'
import flecha from '../logos/flecha.png'
import rosa from '../logos/rosario.png'
import consejo from '../logos/consejo.png'

export const About = () => {

  const {t,i18n} = useTranslation();

  return (
    <div className="App">
        <div className="container-dark">
            <div className="text-holder">
            <Link to='/'><h4>FESTIVAL INTERNACIONAL DE IMPROVISACIÓN LIBRE Y ARTES SONORAS</h4></Link>
                <p>{t('about')}</p> 
                <p>Con sede en la ciudad de Rosario, Argentina, Humedal: Festival Internacional de Improvisación Libre y Artes Sonoras es un un encuentro dedicado a difundir las experiencias artísticas vinculadas al sonido como materia prima.</p>    
                <p>Dentro de la programación de las diferentes actividades – conciertos, instalaciones, muestras, talleres, seminarios y mesas de debate – fomentamos el cruce entre artistas locales, artistas provenientes de diferentes ciudades del país y artistas internacionales.</p>
            </div>
        </div>
        <div className="container-light">
          <div className="container-logo">
            <img src={humedal} alt="humedal" style={{filter:'brightness(0)'}}/>
            <img src={biblio} alt="biblioteca argentina" style={{width:'5em'}}/>            
            <img src={free} alt="all free ciclo" />
            <img src={consejo} alt="consejo" style={{width:'6em',filter:'invert(100%)'}}/>
            <img src={sntf} alt="santa fe cultura" style={{width:'11em',filter:'brightness(0)'}}/>
            <img src={caja} alt="caja negra" style={{width:'7em'}}/>
            <img src={fumi} alt="facultad de humanidades" style={{width:'8em'}}/>
            <img src={elda} alt="america" style={{width:'6em',padding:'0 1em'}} />
            <img src={musica} alt="musica" />
            <img src={qubil} alt="el qubil" />
            <img src={flecha} alt="flechabus" style={{filter:'brightness(0)'}}/>
            <img src={rosa} alt="rosario" style={{width:'6em',filter:'invert(100%)'}}/>
            <img src={ispm} alt="carlos guastavino" style={{width:'6em'}}/>
          </div>
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