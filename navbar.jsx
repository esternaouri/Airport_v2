import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router,Route,Link, Routes,BrowserRouter,Navigate,out} from "react-router-dom";
import FlightRegist from './flightRegist';
import React, { useState } from 'react';
import Homepage from './homepage';
import LLHA from './LLHA';
import LLHZ from './LLHZ';
import LLBG from './LLBG';
import LLIB from './LLIB';

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
            <Nav.Link as={Link} to ={"flightRegist"} >פעילות טיסות </Nav.Link>
            
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
          <Route exact path="flightRegist" element={<FlightRegist />} />
          <Route exact path="flightRegist" >
          <Route path="LLHZ"   element={<LLHZ />} />
          <Route path="LLBG"   element={<LLBG />} />
          <Route path="LLHA"   element={<LLHA />} />
          <Route path="LLIB"   element={<LLIB />} />
</Route>
        </Route>
      </Routes>
    </div>
    </Router>

    </div>
  );
}

export default NavbarRoute;