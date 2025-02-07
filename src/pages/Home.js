// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";
import PortfolioGallery from './PortfolioGallery';
// import portfolioImage1 from '../assets/WhatsApp Image 2024-10-19 at 11.56.55_cc26e35f.jpg';

const Home = () => {


  return (
    <div className='homePage'>
      <div className='home_intro1'>
        <div className='me-intro'>
          <h1>Eliud Anyoka</h1>
          <p>A Versatile Full-Stack Developer and Technical Sales Professional who leverage technical and business skills to develop
            digital solutions that meet both user and business needs </p>
        </div>
        {/* <h1>Welcome to My Portfolio</h1> */}
        <div className="summary-profile">
          <ul className='my-links'>
            <li>
              <Link to="/portfolio"><span>10+ Years</span>
                <p>In Technical Sales Experience</p></Link>
            </li>
            <li>
              <Link to="/management"><span>4+ Years</span>
                <p>In Management Experience</p></Link>
            </li>
            <li>
              <Link to="/projects"><span>4+ Projects</span>
                <p>Developed and still developing more</p></Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="portfolioImageSlide">
        <PortfolioGallery />
      </div>

    </div>

  );
};

export default Home;
