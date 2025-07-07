import React from "react";
import styled, { createGlobalStyle } from 'styled-components';

// Componente Contenedor

const Container = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
`;

// Estilos para componentes
const StyledHeader = styled.header`
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`; 

function Header() {
  return (
    <StyledHeader>
      <Container>
        <Navbar>
          <Logo href="#">
            <FaCode style={{ marginRight: '10px' }} />
            ADA Dev School
          </Logo>
          <NavLinks>
            <NavLink><a href="#inicio">Inicio</a></NavLink>
            <NavLink><a href="#programacion">Programación</a></NavLink>
            <NavLink><a href="#ingles">Inglés</a></NavLink>
            <NavLink><a href="#testimonios">Testimonios</a></NavLink>
            <NavLink><a href="#contacto">Contacto</a></NavLink>
          </NavLinks>
          <Button>Iniciar Sesión</Button>
        </Navbar>
      </Container>
    </StyledHeader>
  );
};

export default Header;
