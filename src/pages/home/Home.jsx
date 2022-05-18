import React from 'react';
import './Home.css';
import { Navbar, Header, Depart, Possibilities, University, Footer } from '../../components';
import bg1 from '../../assets/2.png';

const Home = () => {
    return (
        <div className='home'>
            <Navbar />
            <Header />
            <Depart />
            <img className='pbg1' src={bg1} alt="bg1" />
            <Possibilities />
            <University />
            <Footer />
        </div>
    )
}

export default Home