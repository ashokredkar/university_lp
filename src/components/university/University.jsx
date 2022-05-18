import React, { useEffect } from 'react';
import UniCard from '../../subcomponents/UniCard';
import './University.css';
import ubg1 from '../../assets/b1.png';
import ubg2 from '../../assets/b2.png';
import ubg3 from '../../assets/b3.png';
import ubg4 from '../../assets/b4.png';
import ubg5 from '../../assets/b5.jpeg';
import ubg6 from '../../assets/b6.png';
import ubg7 from '../../assets/b7.png';
import ubg8 from '../../assets/b8.png';
import Aos from 'aos';
import 'aos/dist/aos.css';

const University = () => {

  useEffect(() => {
    Aos.init({duration: 1000});
  }, []);

  return (
    <div id="section4" className="university section-padding">
      <h1 data-aos='fade-down'>Around the University</h1>
      <div className="uniCards">
        <UniCard image={ubg1} title="Photoshop CC 2022 Essential Training: The Basics" subtitle='Graphics Design' />
        <UniCard image={ubg2} title="Get Started Coding Android Apps With Kotlin" subtitle='Global System' />
        <UniCard image={ubg3} title="Create Turntable Animations With Cinema 4D" subtitle='Computer & Information Technology' />
        <UniCard image={ubg4} title="A Beginner's Guide to the New Bootstrap 5 Grid" subtitle='Web Development' />
        <UniCard image={ubg5} title="A Designer's Guide to Vue.js Components" subtitle='Art Development' />
        <UniCard image={ubg6} title="Code a Swift App with Realm Mobile Database" subtitle='Music' />
        <UniCard image={ubg7} title="10 Essential Design Tips in Adobe Illustrator" subtitle='Technology Information' />
        <UniCard image={ubg8} title="Modern PHP From The Beginning" subtitle='Data Science' />
      </div>
    </div>
  )
}

export default University