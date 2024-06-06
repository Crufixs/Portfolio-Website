import { Container, Row, Col, Card, CardGroup } from "react-bootstrap";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import sample from "../Pics/bean2_logo.png";
import sample2 from "../Pics/captain_puppy.png";
import sample3 from "../Pics/react_logo.png";
import coverPhoto from "../Pics/projects_cover.png";

import HomeGallery from "../Components/HomeGallery";
import ProjectsCards from "../Components/ProjectsCards";

function ProjectsPage() {
  return (
    <Container className="min-vh-100 mt-5 d-flex">
      <div className="my-auto py-5 text-center">
        <Row xs={1} lg={2} className="mb-3 border-bottom">
          <Col className="my-auto d-flex">
            <Container className="align-middle text-center text-lg-start">
              <h1>Projects</h1>
              <h3>
                I've worked on plenty of projects in pursuit of my goal. The
                ones' I'm most proud of are as follows
              </h3>
            </Container>
          </Col>
          <Col>
            <Container
              style={{ backgroundImage: `url(${coverPhoto})` }}
              className="cover"
            ></Container>
          </Col>
        </Row>
        <Row xs={1} className="d-block d-lg-none gy-5 gx-3 py-5">
          <Col>
            <ProjectsCards
              title="Bean and Bean Website"
              text="The website showcases the shop’s products and allows users to create an account to order a product, contact the shop, and leave a review."
            >
              <a
                href="https://github.com/Crufixs/SE_BeanAndBean"
                target="_blank"
              >
                <center>
                  <Card.Img
                    variant="top"
                    className="thumbnail rounded-circle"
                    src={sample}
                  />
                </center>
              </a>
            </ProjectsCards>
          </Col>
          <Col>
            <ProjectsCards
              title="Captain Puppy"
              text="The application allows users to create a profile for their dog, write to a personal journal, search for information regarding different dog breeds, and track expenses."
            >
              <center>
                <a
                  href="https://github.com/Crufixs/Captain-Puppy"
                  target="_blank"
                >
                  <Card.Img variant="top" className="thumbnail" src={sample2} />
                </a>
              </center>
            </ProjectsCards>
          </Col>
          <Col>
            <ProjectsCards
              title="Email Application"
              text="The website allows the users to interact with the predetermined set of emails by utilizing the delete function"
            >
              <a
                href="https://github.com/Crufixs/Email-Application"
                target="_blank"
              >
                <Card.Img variant="top" className="thumbnail" src={sample3} />
              </a>
            </ProjectsCards>
          </Col>
        </Row>

        <CardGroup className="d-none d-lg-flex">
          <ProjectsCards
            title="Bean and Bean Website"
            text="The website showcases the shop’s products and allows users to create an account to order a product, contact the shop, and leave a review."
          >
            <center>
              <a
                href="https://github.com/Crufixs/SE_BeanAndBean"
                target="_blank"
              >
                <Card.Img variant="top" className="thumbnail" src={sample} />
              </a>
            </center>
          </ProjectsCards>
          <ProjectsCards
            title="Captain Puppy"
            text="The application allows users to create a profile for their dog, write to a personal journal, search for information regarding different dog breeds, and track expenses."
          >
            <a href="https://github.com/Crufixs/Captain-Puppy" target="_blank">
              <Card.Img variant="top" className="thumbnail" src={sample2} />
            </a>
          </ProjectsCards>
          <ProjectsCards
            title="Email Application"
            text="The website allows the users to interact with the predetermined set of emails by utilizing the delete function
                        "
          >
            <center>
              <a
                href="https://github.com/Crufixs/Email-Application"
                target="_blank"
              >
                <Card.Img variant="top" className="thumbnail" src={sample3} />
              </a>
            </center>
          </ProjectsCards>
        </CardGroup>
      </div>
    </Container>
  );
}

export default ProjectsPage;
