import React from 'react';
import './Projects.css'; // Add additional styling here if needed

function Projects() {
  return (
    <div className="projects">

      
        <h2>Technical Projects</h2>
        <div className='div-one-container'>
        {/* Anyoka Eats Project */}
        <div className="project-card">
          <img src="path/to/anyoka-eats-image.jpg" alt="Anyoka Eats" className="project-image" />
          <h3>Anyoka Eats</h3>
          <p><strong>Online Restaurant Platform</strong></p>
          <p><strong>Role:</strong> Lead Developer</p>
          <p><strong>Technologies:</strong> MERN stack (MongoDB, Express, React, Node.js)</p>
          <p><strong>Description:</strong> Designed and developed a full-stack web application for food ordering with user authentication, order tracking, and dynamic pricing. Integrated user feedback to create a responsive, accessible user interface and robust backend to manage orders and inventory.</p>
          <p><strong>Outcome:</strong> Successfully launched with positive user engagement, providing a seamless experience for ordering and tracking.</p>
          <a href="https://anyokaeats.com" target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
        </div>
      </div>
      {/* Ongoing Projects Section */}
      <div className='div-two-container'>
        <h2>Ongoing Projects</h2>
        <div className='ongoing-projects'>
          {/* Personalized Health Management App */}
          <div className="project-card">
            <img src="path/to/health-app-image.jpg" alt="Health Management App" className="project-image" />
            <h3>Personalized Health Management App</h3>
            <p><strong>Role:</strong> Lead Developer and Business Strategist</p>
            <p>Developing a personalized health management application that uses data-driven insights to help users track and improve their health. Leading the project to ensure a user-centered approach with features focused on long-term user engagement and revenue generation strategies.</p>
            <a href="https://health-app.example.com" target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
          </div>

          {/* Generative AI Radio */}
          <div className="project-card">
            <img src="path/to/generative-ai-radio-image.jpg" alt="Generative AI Radio" className="project-image" />
            <h3>Generative AI Radio</h3>
            <p><strong>Role:</strong> Lead Developer and Strategic Planner</p>
            <p>Building an innovative AI-driven radio platform that delivers personalized content to listeners. Responsible for both technical development and aligning the project with market needs, focusing on monetization opportunities and enhanced user experience to maximize engagement and growth potential.</p>
            <a href="https://ai-radio.example.com" target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
          </div>

          {/* Digital Print Media Platform */}
          <div className="project-card">
            <img src="path/to/digital-print-media-image.jpg" alt="Digital Print Media Platform" className="project-image" />
            <h3>Digital Print Media Platform</h3>
            <p><strong>Role:</strong> Lead Developer and User Experience Consultant</p>
            <p>Developing a digital media platform that combines AI and print media, offering personalized content and interactive features. In this role, overseeing development and ensuring that business strategies are implemented effectively to create a scalable, income-generating product.</p>
            <a href="https://digital-media-platform.example.com" target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
          </div>

          {/* Additional Startup Contributions */}
          <div className="project-card">
            <img src="path/to/startup-contributions-image.jpg" alt="Startup Contributions" className="project-image" />
            <h3>Additional Startup Contributions</h3>
            <p><strong>Role:</strong> Technical Developer & Strategic Business Planner</p>
            <p>Collaborating on various other startup projects, contributing to both the technical development and the strategic business planning. Providing insights into user experience, monetization strategies, and product-market fit to support these initiatives in achieving profitability and sustained growth.</p>
            <a href="https://startup-contributions.example.com" target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
          </div>
        </div>

      </div>
      
      <h2>Elimu Resource Center Projects</h2>
      <div className='div-one-container'>
        {/* Elimu Resource Center Projects Section */}
         <div className="project-card">
          <img src="path/to/elimu-resource-center.jpg" alt="Elimu Resource Center" className="project-image" />
          <h3>Educational and Community Applications</h3>
          <p><strong>Role:</strong> Developer</p>
          <p><strong>Technologies:</strong> React, Node.js, MongoDB, Adobe Photoshop (for UI design)</p>
          <p><strong>Description:</strong> Developed and deployed educational apps and social management platforms as part of Elimu Resource Center training, showcasing practical applications of web and mobile technologies in community-oriented projects.</p>
          <a href="https://elimu-resource.example.com" target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
