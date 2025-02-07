import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate, faUsers, faWallet, faClock, faTasks, faBullhorn, faClipboard } from '@fortawesome/free-solid-svg-icons';

import './ManagementExperience.css';

const experiences = [
  {
    title: "Project Planning & Execution",
    description:
      "Expert in translating client requirements into actionable plans, managing deadlines, and balancing short-term and long-term objectives to ensure project success."
  },
  {
    title: "Client Engagement & Communication",
    description:
      "Strong communicator skilled in aligning technical solutions with client needs and managing expectations to ensure high satisfaction."
  },
  {
    title: "Data-Driven Decision Making",
    description:
      "Skilled in using data to inform strategy adjustments and optimize outcomes, a valuable skill for refining application performance and ensuring responsive UI/UX."
  },
  {
    title: "Team Collaboration & Mentorship",
    description:
      "Experienced in leading and mentoring teams, fostering a collaborative and positive work culture, essential for productive and efficient development teamwork."
  }
];

const ManagementExperience = () => {
  return (
    <div className='mngmt-exp'>
      <div className="experience-container">
        <h2 className="experience-heading">Management Skills Developed</h2>
        <ul className="experience-list">
          {experiences.map((exp, index) => (
            <li key={index} className="experience-item">
              <h3 className="experience-title">{exp.title}</h3>
              <p className="experience-description">{exp.description}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="management-achievement">
        <h2>Management Achievements</h2>
        <ul>
          <li><FontAwesomeIcon icon={faUserGraduate} /> <strong>Employee Development:</strong> Mentored and trained sales and customer service teams, helping to create a high-performance environment that boosted overall team productivity and satisfaction.</li>
          <li><FontAwesomeIcon icon={faUsers} /> <strong>Team Leadership:</strong> Established and led cross-functional teams across sales, support, and administrative departments, enhancing teamwork and improving customer satisfaction.</li>
          <li><FontAwesomeIcon icon={faWallet} /> <strong>Financial Management:</strong> Monitored financial performance and managed branch budgets, resulting in improved profitability and cost savings.</li>
          <li><FontAwesomeIcon icon={faClock} /> <strong>Operational Efficiency:</strong> Spearheaded process optimization to boost team productivity and align with strategic goals.</li>
          <li><FontAwesomeIcon icon={faTasks} /> <strong>Project Management:</strong> Monitored project timelines, balancing short- and long-term objectives to ensure on-time delivery.</li>
          {/* <li><FontAwesomeIcon icon={faBullhorn} /> <strong>Brand Development & Marketing:</strong> Enhanced brand visibility to attract new clients and drive sales growth.</li> */}
          <li><FontAwesomeIcon icon={faClipboard} /> <strong>Strategic Business Planning:</strong> Led business strategy and planning efforts, helping to create efficient workflows and strengthen market position.</li>
        </ul>
      </div>
    </div>
  );
};

export default ManagementExperience;
