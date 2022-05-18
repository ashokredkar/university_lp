import React, { useEffect, useRef, useState } from 'react';
import './Possibilities.css';
import video from '../../assets/video.mp4';
import bg2 from '../../assets/3.png';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { BsPauseFill, BsFillPlayFill } from 'react-icons/bs'

const Possibilities = () => {

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = useRef();

  return (
    <div id="section3" className="possibilities section-padding">
      <img src={bg2} alt="bg2" />
      <div className="pLeft" data-aos='fade-right'>
        <video ref={vidRef} src={video} type="video/mp4" loop controls={false} muted />
        <div className="video-overlay">
        <div className="video-overlay_circle"
          onClick={() => {
            setPlayVideo(!playVideo);
            if (playVideo) {
              vidRef.current.pause();
            } else {
              vidRef.current.play();
            }
          }}>
          {playVideo ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
      </div>
      <div className="pRight" data-aos='fade-left'>
        <h1>Limitless learning, more possibilities</h1>
        <p>The University of Rochester is one of the country's top-tier research universities. Our campuses ar home to 200 academic majors, more than 2,000 faculty and insructional staff, and some 10,000 students - approximately half of whom are women.</p>
        <br />
        <p>Learning at the University of Rochester is also on a very professional scale. Rochester remains one of the smallest and most collegiate among top research universities, with smaller classes, a low 10:1 student to teacher ratio, and increased interactions with the faculty.</p>
        <div className="pNumbers" data-aos='fade-up'>
          <div className="students">
            <span>4000</span>
            <p>Students</p>
          </div>
          <div className="courses">
            <span>260</span>
            <p>Courses</p>
          </div>
          <div className="hours">
            <span>5679</span>
            <p>Hours Video</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Possibilities