import { Carousel, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import sample from '../Pics/test.jpg';
import coverPhoto2 from '../Pics/pic2.png';
import taylor from '../Pics/taylor.png';
import interests from '../Pics/various interests.png';
import { Constants } from '../constants';

const HomeGallery = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <Row xs={1} lg={2} style={{ backgroundColor: Constants.GRAY }}>
                    <Col className="text-end text-right px-0 bg-white">
                        <img src={coverPhoto2} className="d-inline text-end w-100"></img>
                    </Col>
                    <Col className="my-auto d-flex d-none d-lg-block">
                        <Container className="align-middle text-center text-lg-start">
                            <h2>More about me,</h2>
                            <h3>I'm a little weird and neurotic but I make up for it with my work ethic</h3>
                        </Container>
                    </Col>
                </Row>
                <Carousel.Caption className="d-block d-lg-none">
                    <h3 className="text-dark fw-bolder">More about me</h3>
                    <p className="text-dark">
                        I'm a little weird and neurotic but I make up for it with my work ethic
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Row xs={1} lg={2} style={{ backgroundColor: Constants.GRAY }}>
                    <Col className="text-end text-end px-0">
                        <img src={interests} className="d-inline text-end w-100"></img>
                    </Col>
                    <Col className="my-auto d-flex d-none d-lg-block">
                        <Container className="align-middle text-center text-lg-start">
                            <h2>Varied interests</h2>
                            <h3>I'm a die hard fan of musicals but I dabble in various genres of entertainment</h3>
                        </Container>
                    </Col>
                </Row>
                <Carousel.Caption className="d-block d-lg-none">
                    <h3 className="text-white fw-bold">Varied Interests</h3>
                    <p className="text-white">
                        I'm a die hard fan of musicals but I dabble in various genres of entertainment
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ backgroundColor: Constants.GRAY }}>
                <Row xs={1} lg={2}>
                    <Col className="text-end text-right px-0">
                        <img src={taylor} className="d-inline text-end w-100"></img>
                    </Col>
                    <Col className="my-auto d-flex d-none d-lg-block">
                        <Container className="align-middle text-center text-lg-start">
                            <h2>Swiftie</h2>
                            <h3>My top 3 in order are: Speak Now, Folklore/Evermore, and Lover.</h3>
                        </Container>
                    </Col>
                </Row>
                <Carousel.Caption className="d-block d-lg-none">
                    <h3 className="text-white fw-bold">Swiftie</h3>
                    <p>
                        My top 3 in order are: Speak Now, Folklore/Evermore, and Lover.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default HomeGallery;
