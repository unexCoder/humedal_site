import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import lngs from '../data/lngs';
import isocomb from '../logos/isotipo combinado crop.png'

const Home = () => {

    const {t,i18n} = useTranslation(); 
    
    return (
      <div className="App">
        <div className="container-dark">
          <Link to={'about'}>
            <img src={isocomb} alt="humedal" className="main-logo" style={{filter:'brightness(1)'}}/>
          </Link>
          {/* <h4>FESTIVAL INTERNACIONAL DE IMPROVISACIÓN LIBRE Y ARTES SONORAS</h4> */}
        </div>
        
        <div className="container-light">
          <h1><Link to='about'>FESTIVAL HUMEDAL 2023</Link></h1>
          <h4>28___30 SEP | ROSARIO</h4>
          <h6>ARGENTINA</h6>
        </div>    
        {/* <div className="container-button">
          {Object.keys(lngs).map((lng) => (
            <button className='button' tipe='submit' key={lng} onClick={ () => i18n.changeLanguage(lng)} >{lngs[lng].NativeName}</button>
          ))}
        </div>           */}
      </div>
    );
}

export default Home;