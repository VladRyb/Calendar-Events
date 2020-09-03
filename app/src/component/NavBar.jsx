import React from 'react';

import { Navbar, Nav } from 'react-bootstrap';

export default function NavBar() {
  return (
    <>
      <Navbar bg='dark' variant='dark'>
        <Navbar.Brand href='#home'>Calendar Events</Navbar.Brand>
        <Nav className='mr-auto'></Nav>
      </Navbar>
    </>
  );
}
