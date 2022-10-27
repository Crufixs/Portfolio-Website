import { Container, Navbar, Nav } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../global.css';
import { Constants } from '../constants.js';
import { useLocation } from "react-router-dom";


const NavigationBar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  const location = useLocation();

  const handleScroll = () => {
    const position = window.pageYOffset;
    console.log("POS: "+position);
    
    setScrollPosition(position);
  };

  const handleResize = () => {
    const width = window.innerWidth;
    console.log("W: "+width);
    setWindowWidth(width);
  }
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    setScrollPosition(window.pageYOffset);

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize );

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Navbar fixed="top" expand="sm" style={{ backgroundColor: scrollPosition > 50 || windowWidth < 573  ? Constants.PRIMARY1 : "rgb(150,210,200,0.15)" }}>
      <Container>
        <Navbar.Brand href="#home" className="d-flex">

            <p className="my-auto"style={{ fontWeight: "600"}}>Crufixs</p>


        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav >
            <Nav.Link>
              <Link to="/" className={"links " + (location.pathname === "/" ? "active" : "")}>
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/projects" className={"links " + (location.pathname === "/projects" ? "active" : "")}>
                Projects
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/school" className={"links " + (location.pathname === "/school" ? "active" : "")}>
                School
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/co-curriculars" className={"links " + (location.pathname === "/co-curriculars" ? "active" : "")}>
                Extra Curriculars
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;



