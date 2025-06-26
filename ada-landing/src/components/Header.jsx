// src/components/Header.js
import React, { useState } from 'react';
import { FaGraduationCap, FaBars, FaTimes } from 'react-icons/fa';

const Header = ({ setView }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Cursos', action: () => setView('home') },
    { label: 'Blog', action: () => setView('blog') },
    { label: 'Mentorías', action: () => setView('home') },
    { label: 'Recursos', action: () => setView('blog') },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center py-4">
          <div 
            className="flex items-center text-blue-600 cursor-pointer" 
            onClick={() => setView('home')}
          >
            <FaGraduationCap className="text-2xl mr-2" />
            <span className="text-2xl font-bold">Apollo<span className="text-pink-500">.</span></span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={item.action}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
          
          <div className="hidden md:block">
            <button 
              onClick={() => setView('home')}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition-colors"
            >
              Acceso Anticipado
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </nav>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    item.action();
                    setIsMenuOpen(false);
                  }}
                  className="text-gray-700 hover:text-blue-600 font-medium py-2"
                >
                  {item.label}
                </button>
              ))}
              <button 
                onClick={() => {
                  setView('home');
                  setIsMenuOpen(false);
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full transition-colors"
              >
                Acceso Anticipado
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;