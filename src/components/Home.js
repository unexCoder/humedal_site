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
          <a href="#talleres">            
            <div className="agenda-frame">
              <div className="agenda-col">
                <h2>28__SEP</h2>
                
                <h6>10:00 hs</h6>
                <h3>Carl Bergstrøm - Nielsen</h3>
                <p>Taller: Música intuitiva</p>
                <h5>Biblioteca Argentina Dr. Juan Álvarez</h5>                
                
                <h6>19:00 hs</h6>
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
                <p>Taller: Música intuitiva</p>
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
                <p>Taller: El acordeón en la música experimental</p>
                <h5>Instituto del Profesorado de Música Carlos Guastavino</h5>
                <h6>16:00 hs</h6>
                <h3>Federico Orio</h3>
                <p>Concierto de campanas</p>
                <h5>Plaza Sarmiento. (frente a Escuela Normal 1)</h5>
                <h6>18:00 hs</h6>
                <h3>El sonido de Rosario</h3>
                <p>Performance participativa</p>
                <h3>Es Bailar</h3>
                <p>Impro escénica multidisciplinaria</p>
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
            
        
        <div className="container-green" id="talleres">
          <div className="talleres-container"> 
            <a href="#fecha">
              <Carousel indicators={false} controls={false} fade={false} interval={5000}>
                <Carousel.Item className="taller-item">
                  <h5>TALLER</h5>   
                  <h2>Música intuitiva</h2>
                  <h3>a cargo de <span>Carl Bergstrøm - Nielsen</span></h3>
                  <p>"La improvisación libre es un excitante proceso creativo y comunicacional. A lo largo de los años, he recopilado ejercicios destinados a presentar esta práctica a otros músicos y a perfeccionarla, ya que siempre hay más que explorar. Algunos ejercicios tratan de cómo se pueden modificar los sonidos, tal vez comparables a los artistas visuales que estudian sus colores y materiales. Otros son grupos dinámicos y se centran en la interacción entre músicos. Otros más profundizan en nuestras capacidades de conciencia e imaginación. Estas dimensiones son igualmente 'básicas' y ofrecen infinitas oportunidades; centrarse en una a la vez puede ayudarnos a profundizar a la hora de improvisar libremente y aprovechar las oportunidades del momento" Carl Bergstrøm-Nielsen</p>
                  <h4 className="taller-item-date">Jueves 28 y Viernes 29 de septiembre. 10:00 - 14:00 hs</h4>   
                  <h4>Biblioteca Argentina Dr. Juan Álvarez - (SUM)</h4>    
                </Carousel.Item>                
                <Carousel.Item className="taller-item">
                  <h5>TALLER</h5>   
                  <h2>El acordeón en la música experimental</h2>
                  <h3>a cargo de <span>Ute Völker</span></h3>
                  <p>El taller será un espacio de encuentro con la acordeonista Ute Volker, para compartir experiencias, técnicas y características de la exploración del acordeón, así como la sonoridad del ensamble. Destinado a acordeonistas e interesadxs en el acordeón. (asistir con instrumento)</p>
                  <h4 className="taller-item-date">Sábado 30 de septiembre. 10:00 - 12:00 hs</h4>   
                  <h4>I.S.P.M N° 5932 "Carlos Guastavino" - Santa Fe 1429</h4>   
                </Carousel.Item>                
              </Carousel>
            </a>
          </div>
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