import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/unmeshgb/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/unmeshgb/Bits-0f-C0de"
              demoLink="https://bits-of-code-liart.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/unmeshgb/Editor.io"
              demoLink="https://editor-io-one.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Chatspace"
              description="ChatSpace is a secure, real-time messaging application engineered with the MERN stack and Socket.IO, featuring custom JWT middleware that authenticates 100% of socket connections to ensure authorized, low-latency communication. The platform integrates the Groq AI SDK to power an in-app 'Digital Assistant' with granular admin controls for rate-limiting, effectively reducing API costs by 20%. Additionally, it utilizes an optimized media processing pipeline with automated cleanup routines, which prevents server memory leaks and reduces bandwidth consumption by 33%."
              ghLink="https://github.com/unmeshgb/Chatspace"
              demoLink="https://chatspace-avc.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Blogspace"
              description="BlogSpace is a robust full-stack Content Management System (CMS) built on the MERN stack that features granular Role-Based Access Control (RBAC) with seven distinct permission levels for secure content administration. The platform prioritizes security through JWT authentication and HttpOnly cookies to mitigate XSS and CSRF risks, ensuring data protection for its user base. Furthermore, it delivers a high-performance user experience by implementing server-side pagination and Redux Toolkit for efficient state management, which successfully reduced initial page load times by 1.2 seconds."
              ghLink="https://github.com/unmeshgb/Blogspace"
              demoLink="https://blogspace-mern-website-frontend.onrender.com/"
              
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="One Stop Movie (OSM)"
              description="One Stop Movie (OSM) is a fully responsive website, which is responsive for all devices. It is completely built using HTML, CSS, JavaScript with Firebase authentication as a backend.You can create a account(SignUp) with your email address and created password for using OSM which is a quick process after which you can LogIn using your credentials."
              ghLink="https://github.com/unmeshgb/one_stop"
              demoLink="https://osm-avc24.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
