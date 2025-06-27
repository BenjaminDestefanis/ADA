// src/components/Header.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { FaGraduationCap, FaBars, FaTimes } from 'react-icons/fa';


// Estilos con styled-components
const Navbar = styled.nav`
  background: white;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  padding: 20px 0;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.8rem;
  font-weight: 700;
  color: #4361ee;
  cursor: pointer;
  
  span {
    color: #f72585;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 30px;
  list-style: none;
`;

const NavLink = styled.li`
  a {
    color: #212529;
    font-weight: 600;
    text-decoration: none;
    transition: color 0.3s;
    
    &:hover {
      color: #4361ee;
    }
  }
`;

const Header = ({ setView }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Cursos', action: () => setView('home') },
    { label: 'Blog', action: () => setView('blog') },
    { label: 'Mentorías', action: () => setView('home') },
    { label: 'Recursos', action: () => setView('blog') },
  ];

  return (
     <Navbar>
      <div className="container">
        <Logo onClick={() => setView('home')}>
          <FaGraduationCap style={{ marginRight: '10px' }} />
          {/* <FaBars></FaBars>
          <FaTimes></FaTimes> */}
          ADA Dev School<span>.</span>
        </Logo>
        
        <NavLinks>
          <NavLink><a href="#cursos">Cursos</a></NavLink>
          <NavLink><a href="#blog">Blog</a></NavLink>
          <NavLink><a href="#mentorias">Mentorías</a></NavLink>
        </NavLinks>
      </div>
    </Navbar>
  );
};

export default Header;