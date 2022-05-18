import React, { useEffect } from 'react';
import './Header.css';
import homesvg from '../../assets/homesvg.png';
import grass1 from '../../assets/grass.png';
import grass2 from '../../assets/grass2.png';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Header = () => {

  useEffect(() => {
    Aos.init({duration: 1500});
  }, []);

  return (
    <div id="section1" className="header section-padding">
      <img className="headerbg1" src={homesvg} alt="home_bg" data-aos='fade-up'/>
      <img src={grass1} alt="home_bg" className="headerbg2" />
      <img src={grass2} alt="home_bg" className="headerbg3" />
      <div className="headerInfo" data-aos='fade-right'>
        <h1>Innovation for education and society</h1>
        <p>Our interdisciplinary majors and minors mean you can chart your own course for academic success.</p>
        <button className="btn1">Visit our Campus</button>
      </div>
    </div>
  )
}

export default Header