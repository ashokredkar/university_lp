import React, { useEffect } from 'react';
import './Depart.css';
import DepartCard from '../../subcomponents/DepartCard';
import d1 from '../../assets/pic1.png';
import d2 from '../../assets/pic2.png';
import d3 from '../../assets/pic3.png';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Depart = () => {

  useEffect(() => {
    Aos.init({duration: 1000});
  }, []);

  return (
    <div id="section2" className="depart section-padding">
      <div className="departInfo" data-aos='fade-down'>
        <h1>Our Department</h1>
        <p>A hundred thousand greatful lies to you dear mamma and papa. Is your poor brother recovered of his rack-punch? Oh, dear! Oh, dear! How men should beware of wicked punch!</p>
      </div>
      <div className="departCards">
        <div className="dCard">
          <DepartCard image={d1} title='Online Education' />
        </div>
        <div className="dCard">
          <DepartCard image={d2} title='University' />
        </div>
        <div className="dCard">
          <DepartCard image={d3} title='Self Learning' />
        </div>
      </div>
    </div>
  )
}

export default Depart