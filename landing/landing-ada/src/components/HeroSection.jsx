import React from "react";

function HeroSection() {
  return (
    <Hero id="inicio">
      <Container>
        <HeroContent>
          <HeroText>
            <h1>Aprende <span>Programación</span> e <span>Inglés</span> Online</h1>
            <p>Domina las habilidades más demandadas del mercado con nuestros cursos interactivos. Aprende a tu propio ritmo con instructores expertos y lleva tu carrera al siguiente nivel.</p>
            <HeroButtons>
              <Button as="a" href="#programacion">Ver Cursos</Button>
              <Button secondary as="a" href="#">Prueba Gratis</Button>
            </HeroButtons>
          </HeroText>
          <HeroImage>
            <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&h=400&q=80" alt="Aprendizaje online" />
          </HeroImage>
        </HeroContent>
      </Container>
    </Hero>
  );
};

export default HeroSection;