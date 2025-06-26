// src/components/Footer.js
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaChevronRight } from 'react-icons/fa';

const Footer = ({ setView }) => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-6">Apollo</h3>
            <p className="text-gray-400 mb-6">
              La plataforma de aprendizaje práctico para dominar habilidades digitales con mentoría experta.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaFacebookF />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaInstagram />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaLinkedinIn />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaYoutube />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Categorías</h3>
            <ul className="space-y-3">
              {['Programación', 'Desarrollo Web', 'Inglés Técnico', 'Data Science', 'Alemán para Devs'].map((item, index) => (
                <li key={index}>
                  <button 
                    onClick={() => setView('blog')}
                    className="text-gray-400 hover:text-white transition-colors flex items-center"
                  >
                    <FaChevronRight className="text-xs mr-2" /> {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Recursos</h3>
            <ul className="space-y-3">
              {['Blog', 'Guías Rápidas', 'Webinars Gratis', 'Roadmaps', 'Comunidad'].map((item, index) => (
                <li key={index}>
                  <button 
                    onClick={() => setView('blog')}
                    className="text-gray-400 hover:text-white transition-colors flex items-center"
                  >
                    <FaChevronRight className="text-xs mr-2" /> {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Contacto</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <span className="mt-1 mr-3">✉️</span>
                <span>hola@apollo.com</span>
              </li>
              <li className="flex items-start">
                <span className="mt-1 mr-3">📱</span>
                <span>+34 912 345 678</span>
              </li>
              <li className="flex items-start">
                <span className="mt-1 mr-3">📍</span>
                <span>Madrid, España</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2025 Apollo Learning. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;