// src/components/CTA.js
import React from 'react';

const CTA = () => {
  return (
    <section className="bg-gradient-to-r from-pink-500 to-purple-700 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Sé de los Primeros en Acceder</h2>
        <p className="text-xl mb-10 max-w-2xl mx-auto">
          Regístrate ahora para recibir acceso anticipado y 30% de descuento en el lanzamiento
        </p>
        <div className="max-w-lg mx-auto">
          <div className="flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Tu mejor correo electrónico" 
              className="flex-grow px-4 py-3 rounded-full focus:outline-none text-gray-800"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors whitespace-nowrap">
              Unirme a la Lista
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;