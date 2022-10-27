import { Container, Row, Col } from 'react-bootstrap';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Constants } from '../constants';
import coverPhoto from '../Pics/school_cover.png'

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
    </div>
    </Container >

  );
}

export default SchoolPage;
