import { Container, Row, Col } from 'react-bootstrap';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import lophils from '../Pics/lophils_logo_name.png';
import css_org from '../Pics/css_org_logo.png';
import comelec from '../Pics/comelec_org_logo.png';
import coverPhoto from '../Pics/green_cloud.png'
import '../index.css';

function ExtraCurricularPage() {
    return (
        <Container className="mt-5 min-vh-100 py-2 d-flex">
            <div className="my-auto w-100 py-5">
                <Row xs={1} lg={2} className="pb-5 mb-3 border-bottom special cover">
                    <Col className="my-auto d-flex">
                        <Container className="align-middle text-lg-end text-center">
                            <h1>Extra Curriculars</h1>
                        </Container>
                    </Col>
                    <Col className="d-flex">
                        <Container className="my-auto text-center text-lg-start">
                            <h3>Along my college life, I've joined two organizations and one internship program. Listed below are more information about them</h3>
                        </Container>
                    </Col>
                </Row>
                <div className="flex-container border-bottom">
                    <center>
                        <img src={lophils} className="px-3 order-1 order-lg-2 thumbnail"  ></img>
                    </center>
                    <div className="d-flex order-2 order-lg-1">
                        <div className="m-auto text-center">
                            <h2>LOPhils</h2>
                            <p>Was a major contributor to the implementation of the mobile responsiveness of their ongoing website application project using ReactJS and Tailwind CSS.</p>
                            <p>Aided in the improvement of the overall responsiveness of their project using ReactJS and Tailwind CSS</p>
                        </div>

                    </div>
                </div>
                <div className="flex-container border-bottom">
                    <center>
                        <img src={css_org} className="px-3 thumbnail"></img>
                    </center>
                    <div className="d-flex">
                        <div className="m-auto text-center">
                            <h2>Computer Science Society</h2>
                            <p>Prepared academic reviewers for Computer Science students and designed publication materials for the CSS social media platforms.</p>
                        </div>

                    </div>
                </div>
                <div className="flex-container">
                    <center>
                        <img src={comelec} className="px-3 thumbnail"></img>
                    </center>
                    <div className="d-flex">
                        <div className="m-auto text-center">
                            <h2>CICS Commission on Elections</h2>
                            <p>Wrote memorandum and cover letters, collaborated with the organization of “E-Voter Automation in Elections”, organized the flow of the UST ICS Elections, and facilitated classes for the UST ICS Elections.</p>
                            <p>Designed publication materials for the CSS social media platforms.</p>
                        </div>

                    </div>
                </div>

            </div>
        </Container>

    );
}

export default ExtraCurricularPage;
