import React from "react";

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
