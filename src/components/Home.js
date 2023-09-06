import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import lngs from '../data/lngs';
import isocomb from '../logos/BACK_1.png';
import { Carousel } from 'react-bootstrap';
import gallery from '../data/media';

const Home = () => {

    const scrollToTop = () => {
      window.scrollTo(0, 0)
    };

    const {t,i18n} = useTranslation(); 

    return (
      <div className="App">
        <div className="container-dark" >
          <a href="#festival"><img src={isocomb} alt="humedal" className="main-logo" /></a>
        </div>
        
        <div id="festival">
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
            <a href="#agenda"><h2>CARL BERGSTRØM - NIELSEN • UTE VÖLKER + ANGELIKA SHERIDAN • FEDERICO ORIO • GUSTAVO GALUPPO • KILLICK HINDS • ANA GONZÁLEZ GAMBOA • ES BAILAR • ERNESTO JODOS + ZYPCE • EL SONIDO DE ROSARIO • RETROSPECTIVA IMPROVISACIÓN DE RAÍZ AFRO</h2></a>
          </div>
        </div>    
  
        <div className="container-light" id="agenda">
          <a href="#fecha">            
            <div className="agenda-frame">
              <div className="agenda-col">
                <h2>28__SEP</h2>
                
                <h6>10:00 hs</h6>
                <h3>Carl Bergstrøm - Nielsen</h3>
                <p>Taller de música intuitiva</p>
                <h5>Biblioteca Argentina Dr. Juan Álvarez</h5>                
                
                <h6>20:00 hs</h6>
                <h3>Gustavo Galuppo</h3>
                <p>Charla: "Diálogos e influencias recíprocas entre las Artes Sonoras y Visuales Experimentales"</p>
          
                <h3>Ana González Gamboa</h3>
                <p>Concierto</p>
                <h5>Paraphernalia Disquería</h5>
                
              </div>
              <div className="agenda-col">
                <h2>29__SEP</h2>

                <h6>10:00 hs</h6>
                <h3>Carl Bergstrøm - Nielsen</h3>
                <p>Taller de música intuitiva</p>
                <h5>Biblioteca Argentina Dr. Juan Álvarez</h5>                
                <h6>18:00 hs</h6>
                <h3>Poéticas II: Improvisación Libre</h3>
                <p>Presentación del libro compilado por Ute Völker</p>
                <h3>Ute Völker + Angelika Sheridan</h3>
                <p>Concierto</p>
                <h5>Biblioteca Argentina Dr. Juan Álvarez</h5>
                <h6>21:00 hs</h6>
                <h3>Ensamble Taller Carl Bergstrøm - Nielsen</h3>
                <h3>Killick Hinds</h3>
                <p>Concierto</p>
                <h5>Sala Lavardén</h5>
                <h6>23:00 hs</h6>
                <h3>Franco Pellini + Fabiana Galante</h3>
                <p>Concierto</p>
                <h5>Paraphernalia Disquería</h5>

              </div>
              <div className="agenda-col">
                <h2>30__SEP</h2>
                <h6>10:00 hs</h6>
                <h3>Ute Völker</h3>
                <p>Taller de improvisación con acordeón</p>
                <h5>Instituto del Profesorado de Música Carlos Guastavino</h5>
                <h6>16:00 hs</h6>
                <h3>Federico Orio</h3>
                <p>Concierto de campanas</p>
                <h5>Plaza Sarmiento. (frente a Escuela Normal 1)</h5>
                <h6>18:00 hs</h6>
                <h3>El sonido de Rosario</h3>
                <h3>Es Bailar</h3>
                <p>Concierto</p>
                <h5>Café Vinilo / CEC</h5>
                <h6>20:00 hs</h6>
                <h3>Ernesto Jodos + Zypce</h3>
                <p>Concierto</p>
                <h5>Museo Estévez</h5>
                <h6>23:00 hs</h6>
                <h3>Improvisación de raíz afro</h3>
                <p>Retrospectiva por Rocio Gimenez Lopez y Ernesto Jodos</p>
                <h5>Hum</h5>
                
              </div>
            </div>
          </a>
        </div>    
          
          <Link to={'about'}>
            <div onClick={scrollToTop} className="container-dark" id="fecha">
              <h1>FESTIVAL HUMEDAL 2023</h1>
              <h4>28___30 SEP | ROSARIO</h4>
              <h6>ARGENTINA</h6>        
            </div>    
          </Link>
        

        <div className="container-button">
          {Object.keys(lngs).map((lng) => (
            <button className='button' tipe='submit' key={lng} onClick={ () => i18n.changeLanguage(lng)} >{lngs[lng].NativeName}</button>
          ))}
        </div>          

      </div>
    );
}

export default Home;