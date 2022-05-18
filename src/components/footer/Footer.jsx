import React from 'react';
import './Footer.css';
import logo from '../../assets/logodown.png';
import { AiOutlineTwitter, AiFillFacebook, AiFillApple, AiFillYoutube, AiFillLinkedin, AiOutlineInstagram } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerInfo section-padding">
        <div className="fiLeft">
          <div className="fList">
            <div className="fBrand">
              <img src={logo} alt="logo" />
              <div className="fbranding">
                <h2>EDUMODO</h2>
                <span>Education for everyone</span>
              </div>
            </div>
            <p>Edumodo focuses on creating magnificient education websites with ease. Take the lead in this race with Learned.</p>
            <hr />
            <div className="fIcons">
              <AiOutlineTwitter className='footerIcon' />
              <AiFillLinkedin className='footerIcon' />
              <AiFillFacebook className='footerIcon' />
              <AiOutlineInstagram className='footerIcon' />
              <AiFillYoutube className='footerIcon' />
              <AiFillApple className='footerIcon' />
            </div>
          </div>
          <div className="fList">
            <p className='listHead'>FEATURED PROGRAMS</p>
            <p>Fixed Responsive Issue <span>- Just Now</span></p>
            <p>New Portfolio Grid Layout <span>- Today</span></p>
            <p>Tested and Improved WP 3.6 <span>- 5 Hours Ago</span></p>
            <p>Fixed Google Map Issue <span>- Yesterday</span></p>
          </div>
          <div className="fList">
            <p className="listHead">LEARNINGS</p>
            <p>Our Plans</p>
            <p>Free Trial</p>
            <p>Academic Solutions</p>
            <p>Business Solutions</p>
          </div>
        </div>
        <div className="fiRight">
          <p className="listHead">SUPPORT FORUM</p>
          <p className='forumLabel'>Fill your email in the below field and join our quick support forum</p>
          <div className="inputBtn">
            <input type="email" placeholder='Email Address' />
            <button className="btn1">JOIN</button>
          </div>
        </div>
      </div>
      <div className="copyrights">
        <span>Copyright Ⓒ Learned</span>
        <div className="footerMenus">
          <span>Site Map</span>
          <span>Privacy Policy</span>
          <span>Website Line Policy</span>
          <span>Cookie Policy</span>
        </div>
      </div>
    </div>
  )
}

export default Footer