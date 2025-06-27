// src/components/Hero.js
import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-800 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Domina Habilidades Digitales con Expertos</h1>
        <p className="text-xl mb-10 max-w-2xl mx-auto">
          Cursos en vivo, mentorías personalizadas y recursos prácticos para programación e idiomas
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full transition-colors">
            Acceso Anticipado Gratis
          </button>
          <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-3 px-8 rounded-full transition-colors">
            Ver Recursos Gratis
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;