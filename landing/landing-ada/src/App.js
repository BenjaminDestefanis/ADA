// src/App.js
import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { FaCode, FaLaptopCode, FaUsers, FaChalkboardTeacher, FaCertificate, FaClock, FaUserGraduate } from 'react-icons/fa';
import Header from './components/Header';
import HeroSection from './components/HeroSection';

// Estilos globales
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Open Sans', sans-serif;
    color: #1e293b;
    background-color: #f8fafc;
    line-height: 1.6;
  }
  
  h1, h2, h3, h4, h5 {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    line-height: 1.2;
  }
`;

// Componente Contenedor
const Container = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
`;


// Botón
const Button = styled.button`
  display: inline-block;
  padding: 12px 28px;
  background-color: ${props => props.primary ? '#2563eb' : props.secondary ? '#10b981' : '#2563eb'};
  color: white;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  
  &:hover {
    background-color: ${props => props.primary ? '#1d4ed8' : props.secondary ? '#0d9d6f' : '#1d4ed8'};
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;





const StatsSection = () => {
  return (
    <Stats>
      <Container>
        <StatsContainer>
          <StatItem>
            <h3>10,000+</h3>
            <p>Estudiantes</p>
          </StatItem>
          <StatItem>
            <h3>120+</h3>
            <p>Cursos Disponibles</p>
          </StatItem>
          <StatItem>
            <h3>98%</h3>
            <p>Tasa de Satisfacción</p>
          </StatItem>
          <StatItem>
            <h3>250+</h3>
            <p>Instructores Expertos</p>
          </StatItem>
        </StatsContainer>
      </Container>
    </Stats>
  );
};

const FeaturesSection = () => {
  return (
    <Features>
      <Container>
        <SectionTitle>
          <h2>Por Qué Elegirnos</h2>
          <p>Descubre las ventajas de aprender con nuestros cursos online de alta calidad</p>
        </SectionTitle>
        <FeaturesGrid>
          <FeatureCard>
            <FeatureIcon>
              <FaLaptopCode />
            </FeatureIcon>
            <h3>Contenido Actualizado</h3>
            <p>Nuestros cursos se mantienen siempre actualizados con las últimas tecnologías y metodologías de enseñanza.</p>
          </FeatureCard>
          <FeatureCard>
            <FeatureIcon>
              <FaUsers />
            </FeatureIcon>
            <h3>Comunidad Activa</h3>
            <p>Únete a nuestra comunidad de estudiantes y profesionales para compartir conocimientos y resolver dudas.</p>
          </FeatureCard>
          <FeatureCard>
            <FeatureIcon>
              <FaChalkboardTeacher />
            </FeatureIcon>
            <h3>Instructores Expertos</h3>
            <p>Aprende de profesionales con amplia experiencia en la industria y excelentes habilidades pedagógicas.</p>
          </FeatureCard>
          <FeatureCard>
            <FeatureIcon>
              <FaCertificate />
            </FeatureIcon>
            <h3>Certificados Reconocidos</h3>
            <p>Recibe certificados al completar tus cursos que puedes añadir a tu currículum y perfil de LinkedIn.</p>
          </FeatureCard>
        </FeaturesGrid>
      </Container>
    </Features>
  );
};

const CoursesSection = () => {
  const [activeTab, setActiveTab] = useState('ingles-tab');
  
  const coursesData = {
    'ingles-tab': [
      {
        category: 'Inglés General',
        title: 'Inglés para Principiantes',
        description: 'Curso completo para comenzar desde cero con vocabulario, gramática y pronunciación.',
        hours: '50 horas',
        level: 'Principiante',
        image: 'https://images.unsplash.com/photo-1503252947848-7338d3f92f31?auto=format&fit=crop&w=600&h=200&q=80'
      },
      {
        category: 'Inglés de Negocios',
        title: 'Inglés Corporativo Avanzado',
        description: 'Desarrolla habilidades de comunicación profesional para reuniones, presentaciones y negociaciones.',
        hours: '45 horas',
        level: 'Intermedio',
        image: 'https://images.unsplash.com/photo-1565538420870-da08ff96a207?auto=format&fit=crop&w=600&h=200&q=80'
      },
      {
        category: 'Preparación TOEFL',
        title: 'Curso Intensivo TOEFL',
        description: 'Preparación completa para el examen TOEFL con estrategias, prácticas y simulacros.',
        hours: '60 horas',
        level: 'Avanzado',
        image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=600&h=200&q=80'
      }
    ],
    'programacion-tab': [
      {
        category: 'Python',
        title: 'Fundamentos Python',
        description: 'Aprende los fundamentos de la programacion, desarrollando con Python.',
        hours: '40 horas',
        level: 'Intermedio',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&h=200&q=80'
      },
      {
        category: 'JavaScript',
        title: 'Fundamentos JavaScript',
        description: 'El lenguaje fundamental del desarrollo web, con este curso podras ser un experto en JavaScript.',
        hours: '60 horas',
        level: 'Avanzado',
        image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=600&h=200&q=80'
      },
      {
        category: 'PHP',
        title: 'Fundamentos PHP',
        description: 'Uno de los lenguajes mas antiguos, que sin duda, mas del 70 % de la web actual estan en este lenguaje, aprende a programar en este lenguaje con este curso.',
        hours: '80 horas',
        level: 'Avanzado',
        image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=600&h=200&q=80'
      }
    ],
    'ia-tab': [
      {
        category: 'Machine-Learning',
        title: 'Fundamentos Machine-Learning',
        description: 'Aprende los fundamentos de Machine Learning.',
        hours: '40 horas',
        level: 'Intermedio',
        image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=600&h=200&q=80'
      },
      {
        category: 'Deep-Learning',
        title: 'Fundamentos Deep-Learning',
        description: 'Aprender tanto a desarrollar como utilizar Deep-Learning, para nuevos proyectos, como para proyectos existentes.',
        hours: '60 horas',
        level: 'Avanzado',
        image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=600&h=200&q=80'
      },
      {
        category: 'Procesamiento de Lenguaje Natural (NLP)',
        title: 'NLP',
        description: 'Aprende a desarrollar ti IA, creando y programando software para que entienda el proceso de lenguaje humano.',
        hours: '80 horas',
        level: 'Avanzado',
        image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=600&h=200&q=80'
      }
    ],
    'desarrollo-tab': [
      {
        category: 'Desarrollo Web Front End',
        title: 'Front End',
        description: 'Aprende todo lo que necesitas desde 0 para poder crear paginas webs basicas.',
        hours: '40 horas',
        level: 'Intermedio',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&h=200&q=80'
      },
      {
        category: 'Desarrollo Web Back End',
        title: 'Back End',
        description: 'Domina las tegnologias necesarias como back end, para construir APIs funcionales, como e-commerce, LLM, etc..',
        hours: '60 horas',
        level: 'Avanzado',
        image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=600&h=200&q=80'
      },
      {
        category: 'Desarrollo Web Full Stack',
        title: 'Desarrollo Full Stack con React y Node',
        description: 'Aprende a crear aplicaciones web completas con el stack MERN (MongoDB, Express, React, Node).',
        hours: '80 horas',
        level: 'Avanzado',
        image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=600&h=200&q=80'
      }
    ]
  };

  return (
    <Courses id="programacion">
      <Container>
        <SectionTitle>
          <h2>Nuestros Cursos Destacados</h2>
          <p>Explora nuestros cursos más populares de programación e inglés</p>
        </SectionTitle>
        
        <Tabs>
          <TabBtn 
            className={activeTab === 'ingles-tab' ? 'active' : ''} 
            onClick={() => setActiveTab('ingles-tab')}
          >
            Inglés
          </TabBtn>
          <TabBtn 
            className={activeTab === 'programacion-tab' ? 'active' : ''} 
            onClick={() => setActiveTab('programacion-tab')}
          >
            Programación
          </TabBtn>
          <TabBtn 
            className={activeTab === 'ia-tab' ? 'active' : ''} 
            onClick={() => setActiveTab('ia-tab')}
          >
            Inteligencia Artificial
          </TabBtn>
          <TabBtn 
            className={activeTab === 'desarrollo-tab' ? 'active' : ''} 
            onClick={() => setActiveTab('desarrollo-tab')}
          >
            Desarrollo Web
          </TabBtn>
        </Tabs>

        <TabContent className={activeTab === 'ingles-tab' ? 'active' : ''}>
          <CoursesGrid>
            {coursesData['ingles-tab'].map((course, index) => (
              <CourseCard key={index}>
                <CourseImage style={{ backgroundImage: `url(${course.image})` }} />
                <CourseContent>
                  <CourseCategory className="english">{course.category}</CourseCategory>
                  <h3>{course.title}</h3>
                  <p>{course.description}</p>
                  <CourseMeta>
                    <span><FaClock /> {course.hours}</span>
                    <span><FaUserGraduate /> {course.level}</span>
                  </CourseMeta>
                </CourseContent>
              </CourseCard>
            ))}
          </CoursesGrid>
        </TabContent>

        <TabContent className={activeTab === 'programacion-tab' ? 'active' : ''}>
          <CoursesGrid>
            {coursesData['programacion-tab'].map((course, index) => (
              <CourseCard key={index}>
                <CourseImage style={{ backgroundImage: `url(${course.image})` }} />
                <CourseContent>
                  <CourseCategory>{course.category}</CourseCategory>
                  <h3>{course.title}</h3>
                  <p>{course.description}</p>
                  <CourseMeta>
                    <span><FaClock /> {course.hours}</span>
                    <span><FaUserGraduate /> {course.level}</span>
                  </CourseMeta>
                </CourseContent>
              </CourseCard>
            ))}
          </CoursesGrid>
        </TabContent>

        <TabContent className={activeTab === 'ia-tab' ? 'active' : ''}>
          <CoursesGrid>
            {coursesData['ia-tab'].map((course, index) => (
              <CourseCard key={index}>
                <CourseImage style={{ backgroundImage: `url(${course.image})` }} />
                <CourseContent>
                  <CourseCategory>{course.category}</CourseCategory>
                  <h3>{course.title}</h3>
                  <p>{course.description}</p>
                  <CourseMeta>
                    <span><FaClock /> {course.hours}</span>
                    <span><FaUserGraduate /> {course.level}</span>
                  </CourseMeta>
                </CourseContent>
              </CourseCard>
            ))}
          </CoursesGrid>
        </TabContent>

        <TabContent className={activeTab === 'desarrollo-tab' ? 'active' : ''}>
          <CoursesGrid>
            {coursesData['desarrollo-tab'].map((course, index) => (
              <CourseCard key={index}>
                <CourseImage style={{ backgroundImage: `url(${course.image})` }} />
                <CourseContent>
                  <CourseCategory>{course.category}</CourseCategory>
                  <h3>{course.title}</h3>
                  <p>{course.description}</p>
                  <CourseMeta>
                    <span><FaClock /> {course.hours}</span>
                    <span><FaUserGraduate /> {course.level}</span>
                  </CourseMeta>
                </CourseContent>
              </CourseCard>
            ))}
          </CoursesGrid>
        </TabContent>
      </Container>
    </Courses>
  );
};

const TestimonialsSection = () => {
  return (
    <Testimonials id="testimonios">
      <Container>
        <SectionTitle>
          <h2>Lo Que Dicen Nuestros Estudiantes</h2>
          <p>Historias de éxito de estudiantes que transformaron sus carreras</p>
        </SectionTitle>
        <TestimonialsGrid>
          <TestimonialCard>
            <TestimonialContent>
              <p>El curso de JavaScript me dio las bases sólidas que necesitaba para conseguir mi primer trabajo como desarrollador frontend. Las explicaciones son claras y los proyectos prácticos son geniales.</p>
            </TestimonialContent>
            <TestimonialAuthor>
              <AuthorAvatar style={{ backgroundImage: 'url(https://randomuser.me/api/portraits/men/32.jpg)' }} />
              <AuthorInfo>
                <h4>Carlos Rodríguez</h4>
                <p>Desarrollador Frontend</p>
              </AuthorInfo>
            </TestimonialAuthor>
          </TestimonialCard>
          <TestimonialCard>
            <TestimonialContent>
              <p>Gracias al curso de inglés corporativo, pude mejorar mi confianza al hablar en reuniones internacionales. Ahora lidero proyectos con equipos globales sin problemas de comunicación.</p>
            </TestimonialContent>
            <TestimonialAuthor>
              <AuthorAvatar style={{ backgroundImage: 'url(https://randomuser.me/api/portraits/women/44.jpg)' }} />
              <AuthorInfo>
                <h4>María Fernández</h4>
                <p>Gerente de Proyectos</p>
              </AuthorInfo>
            </TestimonialAuthor>
          </TestimonialCard>
          <TestimonialCard>
            <TestimonialContent>
              <p>El curso de Python para ciencia de datos superó mis expectativas. En solo 3 meses pude aplicar los conocimientos en mi trabajo y obtener un aumento significativo en mi salario.</p>
            </TestimonialContent>
            <TestimonialAuthor>
              <AuthorAvatar style={{ backgroundImage: 'url(https://randomuser.me/api/portraits/men/67.jpg)' }} />
              <AuthorInfo>
                <h4>Javier López</h4>
                <p>Data Analyst</p>
              </AuthorInfo>
            </TestimonialAuthor>
          </TestimonialCard>
        </TestimonialsGrid>
      </Container>
    </Testimonials>
  );
};

const CTASection = () => {
  return (
    <CTA>
      <Container>
        <h2>Comienza Tu Viaje de Aprendizaje Hoy</h2>
        <p>Únete a miles de estudiantes que ya están transformando sus carreras con nuestros cursos de programación e inglés.</p>
        <Button as="a" href="#">Comenzar Ahora</Button>
      </Container>
    </CTA>
  );
};

const FooterSection = () => {
  return (
    <Footer id="contacto">
      <Container>
        <FooterContent>
          <FooterColumn>
            <h3>ADA Devs School</h3>
            <p>Plataforma líder en cursos online de programación e inglés con enfoque práctico y resultados comprobados.</p>
            <SocialIcons>
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
            </SocialIcons>
          </FooterColumn>
          <FooterColumn>
            <h3>Cursos</h3>
            <FooterLinks>
              <li><a href="#">Programación Web</a></li>
              <li><a href="#">Python</a></li>
              <li><a href="#">Ciencia de Datos</a></li>
              <li><a href="#">Inglés para Principiantes</a></li>
              <li><a href="#">Inglés de Negocios</a></li>
              <li><a href="#">Preparación TOEFL/IELTS</a></li>
            </FooterLinks>
          </FooterColumn>
          <FooterColumn>
            <h3>Enlaces Rápidos</h3>
            <FooterLinks>
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#programacion">Cursos de Programación</a></li>
              <li><a href="#ingles">Cursos de Inglés</a></li>
              <li><a href="#testimonios">Testimonios</a></li>
              <li><a href="#">Precios</a></li>
              <li><a href="#">Blog</a></li>
            </FooterLinks>
          </FooterColumn>
          <FooterColumn>
            <h3>Contacto</h3>
            <FooterLinks>
              <li><i className="fas fa-envelope"></i> info@ADAdevsschool.com</li>
              <li><i className="fas fa-phone"></i> +54 2664 950045</li>
              <li><i className="fas fa-phone"></i> +34 645 342351</li>
              <li><i className="fas fa-map-marker-alt"></i> San Luis - Argentina</li>
              <li><i className="fas fa-map-marker-alt"></i> Islas Canarias - España</li>
            </FooterLinks>
          </FooterColumn>
        </FooterContent>
        <Copyright>
          <p>&copy; 2023 ADA Devs School. Todos los derechos reservados.</p>
        </Copyright>
      </Container>
    </Footer>
  );
};

// Estilos para componentes
const StyledHeader = styled.header`
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.8rem;
  font-weight: 700;
  color: #2563eb;
  text-decoration: none;
  
  i {
    color: #10b981;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 30px;
  
  @media (max-width: 992px) {
    display: none;
  }
`;

const NavLink = styled.li`
  a {
    text-decoration: none;
    color: #1e293b;
    font-weight: 500;
    transition: all 0.3s ease;
    
    &:hover {
      color: #2563eb;
    }
  }
`;

const Hero = styled.section`
  padding: 150px 0 100px;
  background: linear-gradient(135deg, #e0f2fe 0%, #d1fae5 100%);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: "";
    position: absolute;
    top: -100px;
    right: -100px;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background: linear-gradient(135deg, #2563eb 0%, #10b981 100%);
    opacity: 0.1;
  }
`;

const HeroContent = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  
  @media (max-width: 992px) {
    flex-direction: column;
    text-align: center;
  }
`;

const HeroText = styled.div`
  flex: 1;
  
  h1 {
    font-size: 3.5rem;
    margin-bottom: 20px;
    color: #1e293b;
    
    span {
      color: #2563eb;
    }
  }
  
  p {
    font-size: 1.2rem;
    margin-bottom: 30px;
    color: #64748b;
  }
  
  @media (max-width: 992px) {
    h1 {
      font-size: 2.8rem;
    }
  }
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 15px;
  
  @media (max-width: 992px) {
    justify-content: center;
  }
  
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const HeroImage = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  
  img {
    max-width: 100%;
    border-radius: 10px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }
`;

const Stats = styled.section`
  background-color: white;
  padding: 40px 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const StatsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  text-align: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
  }
`;

const StatItem = styled.div`
  h3 {
    font-size: 2.5rem;
    color: #2563eb;
    margin-bottom: 5px;
  }
  
  p {
    color: #64748b;
  }
`;

const Features = styled.section`
  padding: 100px 0;
`;

const SectionTitle = styled.div`
  text-align: center;
  margin-bottom: 60px;
  
  h2 {
    font-size: 2.5rem;
    margin-bottom: 15px;
    position: relative;
    display: inline-block;
    
    &::after {
      content: "";
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 4px;
      background: linear-gradient(to right, #2563eb, #10b981);
      border-radius: 2px;
    }
  }
  
  p {
    color: #64748b;
    max-width: 700px;
    margin: 20px auto 0;
  }
  
  @media (max-width: 768px) {
    h2 {
      font-size: 2rem;
    }
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
`;

const FeatureCard = styled.div`
  background: white;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  text-align: center;
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const FeatureIcon = styled.div`
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, #2563eb 0%, #10b981 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  color: white;
  font-size: 1.8rem;
`;

const Courses = styled.section`
  padding: 100px 0;
  background-color: #f1f5f9;
`;

const Tabs = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  gap: 10px;
  
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const TabBtn = styled.button`
  padding: 12px 30px;
  background-color: white;
  border: 2px solid #e2e8f0;
  border-radius: 30px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &.active, &:hover {
    background-color: #2563eb;
    color: white;
    border-color: #2563eb;
  }
`;

const TabContent = styled.div`
  display: none;
  
  &.active {
    display: block;
  }
`;

const CoursesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const CourseCard = styled.div`
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
`;

const CourseImage = styled.div`
  height: 200px;
  background-size: cover;
  background-position: center;
`;

const CourseContent = styled.div`
  padding: 25px;
`;

const CourseCategory = styled.span`
  display: inline-block;
  padding: 5px 15px;
  background-color: #dbeafe;
  color: #2563eb;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 15px;
  
  &.english {
    background-color: #dcfce7;
    color: #10b981;
  }
`;

const CourseMeta = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #e2e8f0;
  color: #64748b;
  font-size: 0.9rem;
  
  span {
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;

const Testimonials = styled.section`
  padding: 100px 0;
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
`;

const TestimonialCard = styled.div`
  background: white;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  
  &::before {
    content: """;
    position: absolute;
    top: 20px;
    left: 20px;
    font-size: 5rem;
    color: #2563eb;
    opacity: 0.1;
    font-family: Georgia, serif;
    line-height: 1;
  }
`;

const TestimonialContent = styled.div`
  margin-bottom: 20px;
  font-style: italic;
  color: #64748b;
  position: relative;
  z-index: 1;
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const AuthorAvatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
`;

const AuthorInfo = styled.div`
  h4 {
    margin-bottom: 5px;
  }
  
  p {
    color: #64748b;
    font-size: 0.9rem;
  }
`;

const CTA = styled.section`
  padding: 100px 0;
  background: linear-gradient(135deg, #2563eb 0%, #10b981 100%);
  color: white;
  text-align: center;
  
  h2 {
    font-size: 2.8rem;
    margin-bottom: 20px;
  }
  
  p {
    max-width: 700px;
    margin: 0 auto 30px;
    font-size: 1.2rem;
    opacity: 0.9;
  }
`;

const Footer = styled.footer`
  background-color: #1e293b;
  color: white;
  padding: 70px 0 20px;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-bottom: 50px;
`;

const FooterColumn = styled.div`
  h3 {
    margin-bottom: 25px;
    position: relative;
    padding-bottom: 10px;
    
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 50px;
      height: 3px;
      background: linear-gradient(to right, #2563eb, #10b981);
      border-radius: 2px;
    }
  }
  
  p {
    color: #cbd5e1;
    margin-bottom: 20px;
  }
`;

const FooterLinks = styled.ul`
  list-style: none;
  
  li {
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    gap: 10px;
    
    a {
      color: #cbd5e1;
      text-decoration: none;
      transition: all 0.3s ease;
      
      &:hover {
        color: white;
        padding-left: 5px;
      }
    }
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
  
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.1);
    color: white;
    transition: all 0.3s ease;
    
    &:hover {
      background-color: #2563eb;
      transform: translateY(-5px);
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: #94a3b8;
  font-size: 0.9rem;
`;

// Componente principal
function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <CoursesSection />
      <TestimonialsSection />
      <CTASection />
      <FooterSection />
    </>
  );
}

export default App;