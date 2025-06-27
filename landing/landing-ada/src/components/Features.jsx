// src/components/Features.js
import React from 'react';
import { FaLaptopCode, FaBook, FaUserGraduate } from 'react-icons/fa';

const Features = () => {
  const features = [
    {
      icon: <FaLaptopCode className="text-4xl" />,
      title: 'Cursos en Vivo',
      description: 'Sesiones interactivas con expertos de la industria. Pregunta en tiempo real y resuelve tus dudas al instante.'
    },
    {
      icon: <FaBook className="text-4xl" />,
      title: 'Guías Prácticas',
      description: 'Recursos descargables, cheatsheets y proyectos reales para aplicar lo aprendido inmediatamente.'
    },
    {
      icon: <FaUserGraduate className="text-4xl" />,
      title: 'Mentorías 1:1',
      description: 'Sesiones personalizadas con profesionales para acelerar tu aprendizaje y resolver bloqueos específicos.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Nuestro Método Apollo</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Aprendizaje práctico con resultados reales en tecnología e idiomas
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 shadow-lg border-t-4 border-blue-500 transition-transform duration-300 hover:-translate-y-2">
              <div className="text-blue-500 mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;