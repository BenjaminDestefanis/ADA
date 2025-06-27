// src/components/Hero.js
import React from 'react';
import styled from 'styled-components';

const HeroSection = styled.section`
  background: linear-gradient(135deg, #4361ee 0%, #3a0ca3 100%);
  color: white;
  padding: 100px 0;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  font-size: 1.3rem;
  max-width: 700px;
  margin: 0 auto 40px;
`;

const Button = styled.button`
  background: ${props => props.primary ? '#f72585' : 'transparent'};
  color: white;
  border: ${props => !props.primary && '2px solid white'};
  padding: 15px 40px;
  border-radius: 50px;
  font-weight: 600;
  margin: 0 10px;
  cursor: pointer;
  transition: all 0.3s;
  
  &:hover {
    background: ${props => props.primary ? '#b5179e' : 'white'};
    color: ${props => !props.primary && '#4361ee'};
  }
`;


const Hero = () => {
  return (
    <HeroSection>
      <Title>Domina Habilidades Digitales con Expertos</Title>
      <Subtitle>Cursos en vivo, mentorías personalizadas y recursos prácticos</Subtitle>
      <div>
        <Button primary>Acceso Anticipado</Button>
        <Button>Ver Cursos</Button>
      </div>
    </HeroSection>
    
  );
};

export default Hero;