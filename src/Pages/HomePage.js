import { Container, Row, Col } from 'react-bootstrap';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import '../global.css';

import bootstrap from '../Pics/bootstrap_logo.png';
import css from '../Pics/css_logo.png';
import html from '../Pics/html_logo.png';
import javascript from '../Pics/js_logo.png';
import jsp from '../Pics/jsp_logo.png';
import java from '../Pics/java_logo.png';
import python from '../Pics/python_logo.png';
import dart from '../Pics/dart_logo.png';
import flutter from '../Pics/flutter_logo.png';
import react from '../Pics/react_logo.png';
import tailwind from '../Pics/tailwind_logo.png';
import darknet from '../Pics/darknet_logo.png';
import coverPhoto from '../Pics/pic1.png';
import github from '../Pics/github_logo.png';
import linkedin from '../Pics/linkedin_logo.png';
import facebook from '../Pics/facebook_logo.png';

import HomeGallery from "../Components/HomeGallery";

function HomePage() {
  return (
    <div className="App">
      <Container className="mt-5 py-2">
        <Row xs={1} lg={2} className="pt-5 mb-3 border-bottom">
          <Col className="my-auto d-flex">
            <Container className="align-middle text-center text-lg-start">
              <h1>Hallo!</h1>
              <h3>I'm Juan Carlo Louis O. Miñano, a struggling 4th year BS Computer Science student aspiring to be a future Software Engineer</h3>
              <a href="https://github.com/Crufixs" target="_blank">
                <img src={github} className="socials mt-3 me-3"></img>
              </a>
              <a href="https://www.linkedin.com/in/carlo-minano-23b951237/" target="_blank">
                <img src={linkedin} className="socials mt-3 me-3"></img>
              </a>
              <a href="https://www.facebook.com/Crufixs" target="_blank">
                <img src={facebook} className="socials mt-3 me-3"></img>
              </a>
            </Container>
          </Col>
          <Col>
            <Container style={{ backgroundImage: `url(${coverPhoto})`, height: '500px'}}
              className="cover">
            </Container>
          </Col>
        </Row>
        <Container className="py-lg-3 text-center">
          <h2>Skillset</h2>
        </Container>
        <Row sm={3} lg={6} className="gy-5 text-center pb-5 border-bottom">
          <Col>
            <img src={java} className="logo" />
          </Col>
          <Col>
            <img src={python} className="logo" />
          </Col>
          <Col>
            <img src={react} className="logo" />
          </Col>
          <Col>
            <img src={dart} className="logo" />
          </Col>
          <Col>
            <img src={flutter} className="logo" />
          </Col>
          <Col>
            <img src={bootstrap} className="logo" />
          </Col>
          <Col>
            <img src={html} className="logo" />
          </Col>
          <Col>
            <img src={css} className="logo" />
          </Col>
          <Col>
            <img src={javascript} className="logo" />
          </Col>
          <Col>
            <img src={jsp} className="logo" />
          </Col>

          <Col>
            <img src={tailwind} className="logo" />
          </Col>
          <Col>
            <img src={darknet} className="logo" />
          </Col>

        </Row>
        <Row className="vh-100 d-flex align-items-center border-bottom">
          <HomeGallery />
        </Row>
        <Row>
          <Container className="d-flex align-items-center justify-content-center text-center vh-100">
            <div>
              <h2>Find out more</h2>
              <h3>Learn more about my projects, extra curricular activities and academic history by going through the Navigation bar</h3>
            </div>
          </Container>
          
        </Row>
      </Container>
    </div>
  );
}

export default HomePage;
