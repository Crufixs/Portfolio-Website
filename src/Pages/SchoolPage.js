import { Container, Row, Col } from 'react-bootstrap';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Constants } from '../constants';
import coverPhoto from '../Pics/school_cover.png'
import lophils from "../Pics/lophils_logo_name.png";
import css_org from "../Pics/css_org_logo.png";
import comelec from "../Pics/comelec_org_logo.png";

import '../index.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
    },
    title: {
      display: true,
      text: 'Semestral Averages throughout my study in UST',
    },
  },
};

const labels = ['1st Sem', '2nd Sem', '3rd Sem', '4th Sem', '5th Sem', '6th Sem'];

const data = {
  labels: labels,
  datasets: [{
    label: 'Semestral Average',
    backgroundColor: Constants.SECONDARY1,
    borderColor: 'rgb(255, 99, 132)',
    data: [1.54, 1.729, 1.42, 1.313, 1.321, 1.175],
  }]
};

function SchoolPage() {
  return (
    <Container className="mt-5 min-vh-100 py-2 d-flex">
      <div className="my-auto w-100 pt-5">
        <Row xs={1} lg={2} className="mb-3 border-bottom">
          <Col className="my-auto d-flex">
            <Container className="align-middle text-center text-lg-start">
              <h1>School</h1>
              <h3>I've been at the University of Santo Tomas since Senior High School and am currently in their Computer Science program. Listed belows are the achievements I've accomplished along the way</h3>
            </Container>
          </Col>
          <Col>
            <Container style={{ backgroundImage: `url(${coverPhoto})`}} 
              className="cover">
            </Container>
          </Col>
        </Row>
        <Row xs={1} lg={2}>
          <Col>
            <h2 className="text-lg-start text-center pt-5 pt-lg-0">Academic Performance</h2>
            <h4 className="text-lg-start text-center" style={{ fontSize: "80px", fontWeight:"400" }}>1.42 GWA</h4>

            <Bar options={options} data={data} />
          </Col>
          <Col>
            <h2 className="text-lg-start text-center pt-5 pt-lg-0">Awards and Certificates</h2>
            <div>
              <p className="py-3">• Consistent Dean's Lister up until Present</p>
              <p className="py-3">• Receipient of San Martin de Porres External - DOST Scholarship</p>
              <p className="py-3">• Participant in Codesprint 2021</p>
            </div>
        </Col>
      </Row>
      <Row xs={1} lg={2} className="pb-5 mb-3 border-bottom special cover">
          <Col className="my-auto d-flex">
            <Container className="align-middle text-lg-end text-center">
              <h1>Extra Curriculars</h1>
            </Container>
          </Col>
          <Col className="d-flex">
            <Container className="my-auto text-center text-lg-start">
              <h3>
                Along my college life, I've joined two organizations and one
                internship program. Listed below are more information about them
              </h3>
            </Container>
          </Col>
        </Row>
        <div className="flex-container border-bottom">
          <center>
            <img
              src={lophils}
              className="px-3 order-1 order-lg-2 thumbnail"
            ></img>
          </center>
          <div className="d-flex order-2 order-lg-1">
            <div className="m-auto text-center">
              <h2>LOPhils</h2>
              <p>
                Was a major contributor to the implementation of the mobile
                responsiveness of their ongoing website application project
                using ReactJS and Tailwind CSS.
              </p>
              <p>
                Aided in the improvement of the overall responsiveness of their
                project using ReactJS and Tailwind CSS
              </p>
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
              <p>
                Prepared academic reviewers for Computer Science students and
                designed publication materials for the CSS social media
                platforms.
              </p>
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
              <p>
                Wrote memorandum and cover letters, collaborated with the
                organization of “E-Voter Automation in Elections”, organized the
                flow of the UST ICS Elections, and facilitated classes for the
                UST ICS Elections.
              </p>
              <p>
                Designed publication materials for the CSS social media
                platforms.
              </p>
            </div>
          </div>
        </div>
    </div>
    </Container >

  );
}

export default SchoolPage;
