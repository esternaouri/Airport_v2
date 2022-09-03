import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router,Route,Link, Routes,BrowserRouter,Navigate,} from "react-router-dom";
import One from './one';
import Two from './two';
import FlightRegist from './flightRegist';
import React, { useState } from 'react';
import Homepage from './homepage';

function NavbarRoute() {
  const [update,isUserAuthenticated]= React.useState(true)

  return (
    <div>
    <Router>
    <>
    
      <br />
      <Navbar bg="primary" variant="dark">
        <Container>
          <Nav className="me-auto">
          <Nav.Link as={Link} to ={"homepage"}>עמוד הבית</Nav.Link>
            <Nav.Link as={Link} to ={"one"}>מידע חיוני לתעופה </Nav.Link>
            <Nav.Link as={Link} to ={"two"} >מזג אוויר ותנאי שיוט</Nav.Link>
            <Nav.Link as={Link} to ={"flightRegist"} >רישום טיסות צפויות</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>

      <br />

    </>
    <div>
      <Routes>
        <Route>
          <Route exact path=""element={<Homepage />}/> 
          <Route exact path="homepage" element={<Homepage />}/> 
          <Route path="one" element={<One />} />
          <Route path="two" element={<Two />} />
          <Route path="flightRegist" element={<FlightRegist />} />
        </Route>
      </Routes>
    </div>
    </Router>

    </div>
  );
}

export default NavbarRoute;