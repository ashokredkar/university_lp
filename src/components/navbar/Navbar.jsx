import React, { useState } from 'react';
import './Navbar.css';
import { HiMenuAlt3 } from 'react-icons/hi';
import { GrFormClose } from 'react-icons/gr';
import navLogo from '../../assets/navLogo.png';
import { Link } from 'react-scroll';

const Navbar = () => {

    const MenuItems = () => (
        <>
            <Link spy={true} activeClass='active' to="section1" className="navItem navItem1">
                Study
            </Link>
            <Link spy={true} activeClass='active' to="section2" className="navItem navItem2">
                About Us
            </Link>
            <Link spy={true} activeClass='active' to="section3" className="navItem navItem3">
                Admission
            </Link>
            <Link spy={true} activeClass='active' to="section4" className="navItem navItem4">
                Pages
            </Link>
            <Link spy={true} activeClass='active' to="section5" className="navItem navItem5">
                News
            </Link>
            <div className="loginBtn btn2">Apply Now</div>
        </>
    )

    const [toggle, setToggle] = useState(false);

    return (
        <div className="navbar">
            <div className="logo">
                <img src={navLogo} alt="brand_logo" />
            </div>

            <div className="navList">
                <MenuItems />
            </div>

            <div className="loginBtn btn2">Apply Now</div>

            <div className="mobileNav">
                <div className="toggleIcon">
                    {toggle
                        ? <GrFormClose size={25} color='white' onClick={() => setToggle(false)} />
                        : <HiMenuAlt3 size={25} color='black' onClick={() => setToggle(true)} />}
                </div>

                {toggle && (
                    <div className="mobileNavList">
                        <MenuItems />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar