// BackgroundPage.js
import React from 'react';
import './BackgroundPage.css';

const BackgroundPage = () => {

    const experienceData = [
        {
          role: "Freelancer / Technical Sales Lead",
          duration: "May 2022 – 2023",
          company: "Mishan Engineering Ltd., Malindi",
          responsibilities: [
            "Led Process Optimization: Spearheaded process improvements to enhance team productivity, aligning operational efficiencies with strategic objectives.",
            "Managed Client Engagement: Translated client visions into actionable project plans, defining specifications and timelines to meet customer requirements effectively.",
            "Resource and Budget Management: Coordinated budgeting and resource allocation to ensure projects remained within financial limits, balancing priorities for on-time delivery.",
            "Cross-Functional Collaboration: Worked with design and production teams to bring products to market, ensuring alignment with technical requirements and client expectations."
          ]
        },
        {
          role: "Branch Manager & Business Leader",
          duration: "Aug 2018 – Dec 2020",
          company: "Car and General Ltd., Kisii",
          responsibilities: [
            "Data-Driven Strategy Development: Conducted market research and competitive analysis, making strategic adjustments that optimized branch performance.",
            "Team Leadership and Collaboration: Established and led cross-functional teams, enhancing teamwork between sales, support, and administrative departments to drive results.",
            "Financial Oversight and Budgeting: Monitored financial performance, implemented budgeting practices that improved profitability, and ensured cost efficiency in operations."
          ]
        },
        {
          role: "Assistant Sales Manager",
          duration: "May 2016 – Jul 2018",
          company: "Car and General Ltd., Malindi",
          responsibilities: [
            "Sales and Technical Strategy Execution: Spearheaded the implementation of data-driven sales and marketing strategies, contributing to a significant increase in branch sales.",
            "Mentorship and Team Development: Coached and mentored technical and sales teams to improve performance and foster a positive, collaborative workplace culture.",
            "Client Relationship Management: Managed relationships with key clients, ensuring satisfaction, and fostering loyalty through reliable service and timely solutions."
          ]
        },
        {
          role: "Sales Engineer",
          duration: "Sep 2009 – Aug 2010",
          company: "Ecosave Ltd., Nairobi",
          responsibilities: [
            "Technical Sales and Product Presentation: Delivered technical product presentations and demos, enhancing client understanding and increasing sales by tailoring solutions to client needs.",
            "Competitor Analysis for Market Positioning: Analyzed competitor products to position offerings effectively, contributing to new client acquisition and revenue growth.",
            "Customer-Centric Solutions: Collaborated with technical teams to ensure customer requirements were met, enhancing satisfaction and encouraging repeat business."
          ]
        }
      ];

  return (
    <div className="background-page">
      <h1 className="title">Portfolio Background</h1>

      <section className="section">
        <h2>Professional Summary</h2>
        <p>Versatile Full-Stack Developer and Technical Sales Professional with over 10 years in management, technical sales, and customer relations, recently transitioned to full-stack development. Skilled in the MERN stack (MongoDB, Express.js, React, Node.js), and experienced in responsive web design and mobile app development. With a track record of driving business growth through strategic planning and hands-on project management, I am adept at delivering digital solutions that meet both user and business needs.</p>
      </section>

      <section className="section">
        <h2>Technical Skills</h2>
        <ul>
          <li><strong>Languages & Frameworks:</strong> JavaScript, Node.js, React, Express, HTML, CSS, React-Native</li>
          <li><strong>Databases:</strong> MongoDB, SQL</li>
          <li><strong>Development Tools:</strong> Git, GitHub, Visual Studio Code, Postman</li>
          <li><strong>Web & Graphic Design:</strong> Adobe Photoshop, Canva, Responsive Web Design</li>
          <li><strong>Certifications:</strong> FreeCodeCamp Responsive Web Design</li>
          <li><strong>Soft Skills:</strong> Market Research, Project Management, Customer Relations, Strategic Planning, Team Leadership</li>
        </ul>
      </section>

      <section className="section">
        <h2>Technical Projects</h2>
        <div className="project">
          <h3>Anyoka Eats</h3>
          <p><strong>Role:</strong> Lead Developer | <strong>Technologies:</strong> MERN stack (MongoDB, Express, React, Node.js)</p>
          <p><strong>Description:</strong> Designed and developed a full-stack web application for food ordering with user authentication, order tracking, and dynamic pricing.</p>
        </div>
        <div className="project">
          <h3>Ongoing Projects</h3>
          <p>Currently working on projects including a personalized health management app, AI radio platform, and digital print media platform.</p>
        </div>
      </section>

      <section className="section">
      <h2 className="heading">Professional Experience</h2>
      {experienceData.map((experience, index) => (
        <div key={index} className="experience-item">
          <h3 className="role">{experience.role}</h3>
          <p className="duration"><em>{experience.duration} | {experience.company}</em></p>
          <ul className="responsibilities-list">
            {experience.responsibilities.map((responsibility, idx) => (
              <li key={idx} className="responsibility">{responsibility}</li>
            ))}
          </ul>
        </div>
      ))}
      </section>

      <section className="section">
        <h2>Education</h2>
        <div className="education">
          <h3>Digitech Coursework</h3>
          <p><strong>2024</strong> | Elimu Resource Centre, Malindi</p>
          <p>Coursework in Web Development, Graphic Design, Mobile App Development, Robotics and Photography.</p>
        </div>
        https://freecodecamp.org/certification/Anyoshe/responsive-web-design

        <div className="education">
          <h3>Responsive Web Design</h3>
          <p><strong>2022</strong> | FreeCodeCamp, Online</p>
          <p>HTML, JavaScript, CSS </p>
        </div>
        <div className="education">
          <h3>Bachelor of Science in Manufacturing Engineering</h3>
          <p><strong>2004 – 2009</strong> | Kenyatta University, Nairobi</p>
        </div>
      </section>

      <section className="section">
        <h2>References</h2>
        <p>Available upon request.</p>
      </section>
    </div>
  );
};

export default BackgroundPage;
