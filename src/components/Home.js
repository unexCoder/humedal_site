import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import lngs from '../data/lngs';
import isocomb from '../logos/isotipo combinado crop.png'
import { Carousel } from 'react-bootstrap';
import gallery from '../data/media';

const Home = () => {

    const {t,i18n} = useTranslation(); 

    return (
      <div className="App">
        <div className="container-dark" id="main-logo">
          <Link to={'about'}>
            <img src={isocomb} alt="humedal" className="main-logo" style={{filter:'brightness(1)'}}/>
          </Link>
        </div>
        
        <div>
          <Carousel indicators={false} controls={false} fade={true} interval={2000}>
            {Object.keys(gallery).map((pic) => (
                <Carousel.Item key={ gallery[pic].key }>
                  <img 
                        src= { gallery[pic].src }
                        alt= { gallery[pic].caption } />
                  <Carousel.Caption className='caption-right' >
                    <h2>{ t(gallery[pic].caption).toUpperCase() }</h2>
                  </Carousel.Caption>
                </Carousel.Item>                
            ))}
          </Carousel>
        </div>

        <div className="container-light">
          <h1><Link to='about'>FESTIVAL HUMEDAL 2023</Link></h1>
          <h4>28___30 SEP | ROSARIO</h4>
          <h6>ARGENTINA</h6>
        </div>    

        <div className="container-button">
          {Object.keys(lngs).map((lng) => (
            <button className='button' tipe='submit' key={lng} onClick={ () => i18n.changeLanguage(lng)} >{lngs[lng].NativeName}</button>
          ))}
        </div>          

      </div>
    );
}

export default Home;