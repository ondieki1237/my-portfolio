import React from 'react';

const skillsData = [
  {
    skill: "Project Management",
    description: "Expertise in managing project timelines, coordinating resources, and balancing objectives, ensuring on-time delivery and efficient workflow. This helps in managing development projects effectively from start to finish."
  },
  {
    skill: "Collaboration",
    description: "Worked with cross-functional teams in design, production, and technical support to bring products to market. This experience translates well into a collaborative development environment where cross-team alignment is essential."
  },
  {
    skill: "Client Engagement & Communication",
    description: "Skilled at transforming client requirements into actionable project plans. Communicates effectively with stakeholders, ensuring that all technical requirements align with user needs, which is crucial for gathering and implementing client feedback in development."
  },
  {
    skill: "Data Analysis",
    description: "Utilized data-driven strategies to improve performance metrics. This analytical skill is useful for debugging, optimizing code, and refining user experiences based on performance metrics."
  },
  {
    skill: "Sales and Marketing Insight",
    description: "Enhanced brand visibility and client engagement, skills that are beneficial for user-centric design and improving application engagement and retention."
  },
  {
    skill: "Technical Presentations",
    description: "Delivered technical product presentations, which aids in explaining complex technical concepts to both technical and non-technical team members."
  }
];

const SkillsComponent = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Key Skills Developed</h2>
      <ul style={styles.skillsList}>
        {skillsData.map((skill, index) => (
          <li key={index} style={styles.skillItem}>
            <h3 style={styles.skillTitle}>{skill.skill}</h3>
            <p style={styles.skillDescription}>{skill.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f9',
    padding: '20px',
    borderRadius: '8px',
    maxWidth: '800px',
    margin: '0 auto',
    color: '#333',
  },
  heading: {
    fontSize: '1.8em',
    color: '#0073e6',
    marginBottom: '20px',
    textAlign: 'center',
  },
  skillsList: {
    listStyleType: 'none',
    padding: '0',
  },
  skillItem: {
    marginBottom: '15px',
    padding: '15px',
    backgroundColor: '#fff',
    borderRadius: '5px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  skillTitle: {
    fontSize: '1.3em',
    color: '#333',
    marginBottom: '8px',
  },
  skillDescription: {
    fontSize: '1em',
    color: '#666',
  },
};

export default SkillsComponent;
