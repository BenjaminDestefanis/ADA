import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Blog from './components/Blog';
import Article from './components/Article';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {

  const [view, setView] = useState('home'); // 'home', 'blog', 'article'
  const [currentArticle, setCurrentArticle] = useState(null);

  // Datos de artículos (podrías moverlos a un archivo separado)
  const blogPosts = [
    {
      id: 1,
      title: "5 Proyectos de JavaScript para tu Portafolio",
      category: "Programación",
      date: "15 Jun 2025",
      author: "Carlos Martínez",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      content: `
        <p>Construir un portafolio sólido es esencial para cualquier desarrollador JavaScript que busca trabajo. En este artículo te presentamos 5 proyectos prácticos que demuestran habilidades clave y llaman la atención de reclutadores.</p>
        
        <h3>1. Clon de Trello</h3>
        <p>Crea un tablero Kanban con funcionalidad drag-and-drop. Este proyecto te permite demostrar:</p>
        <ul>
          <li>Manejo del DOM avanzado</li>
          <li>Uso de localStorage para persistencia</li>
          <li>Implementación de arrastrar y soltar (drag and drop)</li>
          <li>Diseño responsive y accesible</li>
        </ul>
        
        <h3>2. Buscador de Películas</h3>
        <p>Integra una API pública como OMDB para buscar y mostrar información de películas. Demuestra:</p>
        <ul>
          <li>Consumo de APIs REST</li>
          <li>Manejo de async/await</li>
          <li>Filtrado y búsqueda en tiempo real</li>
          <li>Paginación de resultados</li>
        </ul>
        
        <blockquote>
          "La mejor manera de aprender a programar es creando proyectos reales que resuelvan problemas concretos. Cada proyecto en tu portafolio cuenta una historia de tus habilidades."
        </blockquote>
      `
    },
    {
      id: 2,
      title: "Técnicas para Pensar en Inglés",
      category: "Idiomas",
      date: "10 Jun 2025",
      author: "Laura Gómez",
      image: "https://images.unsplash.com/photo-1529338296731-c4280a44fc48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      content: `
        <p>Dejar de traducir mentalmente es uno de los mayores desafíos al aprender un idioma. Aquí te presentamos técnicas efectivas para empezar a pensar directamente en inglés.</p>
        
        <h3>1. El Método de la Asociación Directa</h3>
        <p>En lugar de asociar palabras con su traducción, asócialas directamente con imágenes, emociones o conceptos.</p>
        
        <h3>2. Diálogos Internos</h3>
        <p>Comienza a tener conversaciones contigo mismo en inglés. Describe lo que estás haciendo, lo que ves y lo que sientes.</p>
        
        <h3>3. Inmersión Controlada</h3>
        <p>Dedica al menos 30 minutos diarios a actividades en inglés sin recurrir a tu lengua materna.</p>
      `
    },
    {
      id: 3,
      title: "Prepara tu LinkedIn para Ofertas Tech",
      category: "Carrera Tech",
      date: "5 Jun 2025",
      author: "Javier Torres",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      content: `
        <p>Optimizar tu perfil de LinkedIn es crucial para atraer reclutadores del sector tecnológico. Sigue estos pasos para destacar.</p>
        
        <h3>1. Título Profesional Efectivo</h3>
        <p>No uses solo "Desarrollador". Especifica tu stack y nivel: "Desarrollador Fullstack JavaScript | React & Node.js"</p>
        
        <h3>2. Resumen Orientado a Logros</h3>
        <p>Destaca resultados concretos: "Desarrollé una aplicación que redujo tiempos de proceso en un 40%" en lugar de "Responsable de desarrollo".</p>
        
        <h3>3. Palabras Clave</h3>
        <p>Incluye términos que buscan los reclutadores: React, Node.js, Python, AWS, etc.</p>
      `
    }
  ];

  const handleArticleClick = (article) => {
    setCurrentArticle(article);
    setView('article');
  };

  const handleBackToBlog = () => {
    setView('blog');
    setCurrentArticle(null);
  };

  // Componente -- APP
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header setView={setView} />
      <main className="flex-grow">
        {view === 'home' && (
          <>
            <Hero />
            <Features />
            <Blog 
              posts={blogPosts.slice(0, 3)} 
              onArticleClick={handleArticleClick}
              viewAll={() => setView('blog')}
            />
            <CTA />
          </>
        )}
        
        {view === 'blog' && (
          <Blog 
            posts={blogPosts} 
            onArticleClick={handleArticleClick}
            isFullBlog={true}
          />
        )}
        
        {view === 'article' && currentArticle && (
          <Article 
            article={currentArticle} 
            onBack={handleBackToBlog} 
          />
        )}
      </main>
      
      <Footer setView={setView} />
    </div>
  );
}

export default App;
