import styled from 'styled-components';
import { FaLaptopCode, FaBook, FaUserGraduate } from 'react-icons/fa';

const Section = styled.section`
  padding: 100px 0;
  background: white;
`;

const FeatureCard = styled.div`
  background: #f8f9fa;
  border-radius: 10px;
  padding: 30px;
  border-top: 4px solid #4361ee;
  transition: transform 0.3s;
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const Features = () => {
  return (
    <Section>
      <div className="container">
        <h2>Nuestro Método Apollo</h2>
        
        <div className="grid">
          <FeatureCard>
            <FaLaptopCode size={40} color="#4361ee" />
            <h3>Cursos en Vivo</h3>
            <p>Sesiones interactivas con expertos</p>
          </FeatureCard>

          <FeatureCard>
            <FaLaptopCode size={40} color="#4361ee" />
            <h3>Cursos en Vivo</h3>
            <p>Sesiones interactivas con expertos</p>
          </FeatureCard>
          
          {/* Más tarjetas... */}
        </div>
      </div>
    </Section>
  );
};

export default Features;