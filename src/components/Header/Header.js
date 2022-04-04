import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/home" className='fs-3 mx-0'>MuslimShop</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <CustomLink to="/home">Home</CustomLink>
                        <CustomLink to="/reviews">Reviews</CustomLink>
                        <CustomLink to="/dashboard">Dashboard</CustomLink>
                        <CustomLink to="/blogs">Blogs</CustomLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;