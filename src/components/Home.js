// import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import lngs from '../data/lngs';
import isocomb from '../logos/BACK_1.png';
import { Carousel } from 'react-bootstrap';
import gallery from '../data/media';

const Home = () => {

    const {t,i18n} = useTranslation(); 

    return (
      <div className="App">
        <div className="container-dark" >
          <a href="#carousel"><img src={isocomb} alt="humedal" className="main-logo" /></a>
        </div>
        
        <div id="carousel">
          <Carousel indicators={false} controls={false} fade={true} interval={2000}>
            {Object.keys(gallery).map((pic) => (
                <Carousel.Item key={ gallery[pic].key }>
                  <a href="#grilla">
                    <img 
                          src= { gallery[pic].src }
                          alt= { gallery[pic].caption } />
                    <Carousel.Caption className='caption-right' >
                      <h2>{ t(gallery[pic].caption).toUpperCase() }</h2>
                    </Carousel.Caption>
                  </a>
                </Carousel.Item>                
            ))}
          </Carousel>
        </div>

        <div className="container-green" id="grilla">
          <div className="grilla">
            <a href="#date"><h2>CARL BERGSTRØM - NIELSEN • UTE VOLKER + ANGELIKA SHERIDAN • FEDERICO ORIO • GUSTAVO GALUPPO • KILLICK HINDS • ANA GONZÁLEZ GAMBOA • ES BAILAR • ERNESTO JODOS + ZYPCE • EL SONIDO DE ROSARIO • RETROSPECTIVA IMPROVISACIÓN DE RAÍZ AFRO</h2></a>
          </div>
        </div>    

        <a href='about'>
          <div className="container-light" id="date">
            <h1>FESTIVAL HUMEDAL 2023</h1>
            <h4>28___30 SEP | ROSARIO</h4>
            <h6>ARGENTINA</h6>        
          </div>    
        </a>

        <div className="container-button">
          {Object.keys(lngs).map((lng) => (
            <button className='button' tipe='submit' key={lng} onClick={ () => i18n.changeLanguage(lng)} >{lngs[lng].NativeName}</button>
          ))}
        </div>          

      </div>
    );
}

export default Home;