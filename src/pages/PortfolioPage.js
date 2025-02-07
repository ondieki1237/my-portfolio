import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faMapMarkerAlt, faBullseye, faUserCheck, faSearchDollar, faUsersCog, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';

import './PortfolioPage.css';
import SkillsComponent from './SkillsComponent';



const PortfolioPage = () => {
  return (
    <div className='ten-years'>
     <div className='achievements'>
  <h2>Key Achievements</h2>
  <ul>
        <li>
          <FontAwesomeIcon className='fa-icon' icon={faChartLine} /> <strong>Sales Growth:</strong> Led a branch to a 70% increase in annual sales, transforming it into a model branch that received company-wide recognition.
        </li>
        <li>
          <FontAwesomeIcon className='fa-icon' icon={faMapMarkerAlt} /> <strong>Market Expansion:</strong> Successfully opened new territories for underperforming products, establishing sustainable business growth in challenging markets.
        </li>
        <li>
          <FontAwesomeIcon className='fa-icon' icon={faBullseye} /> <strong>Sales Strategy:</strong> Spearheaded the development and implementation of sales and marketing strategies, contributing to a 40% increase in branch sales.
        </li>
        <li>
          <FontAwesomeIcon className='fa-icon' icon={faUserCheck} /> <strong>Client Relationship Management:</strong> Managed relationships with key clients, ensuring satisfaction and fostering loyalty through reliable service and timely solutions.
        </li>
        <li>
          <FontAwesomeIcon className='fa-icon' icon={faSearchDollar} /> <strong>Competitive Analysis:</strong> Analyzed competitor products to position offerings effectively, contributing to new client acquisition and revenue growth.
        </li>
        {/* <li>
          <FontAwesomeIcon className='fa-icon' icon={faUsersCog} /> <strong>Cross-Functional Collaboration:</strong> Worked with design and production teams to bring products to market, ensuring alignment with technical requirements and client expectations.
        </li> */}
         <li>
          <FontAwesomeIcon className='fa-icon' icon={faChalkboardTeacher} /> <strong>Sales Presentations:</strong> Conducted technical product presentations and demos, increasing sales by tailoring solutions to client needs.
        </li>
      </ul>
</div>

      <div className='skillsArea'>
    <SkillsComponent />
    </div>
    </div>
  );
};

export default PortfolioPage;
