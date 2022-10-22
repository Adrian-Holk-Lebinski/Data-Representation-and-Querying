import './App.css';

import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Content from './components/content';
import Read from './components/read';
import { Create } from './components/create';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/*Navbar */}
        <Router>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="/">Navbar</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/read">Read</Nav.Link>
                <Nav.Link href="/create">Create</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
          <br />

          <Routes>
            <Route path='/' element={<Content />}></Route>
            <Route path="/read" element={<Read></Read>}></Route>
            <Route path="/create" element={<Create></Create>}></Route>
          </Routes>
        </Router>
      </div>
    );

  }

}

export default App;
