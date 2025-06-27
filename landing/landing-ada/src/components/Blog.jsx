// src/components/Blog.js
import React, { useState } from 'react';
import { FaArrowRight, FaCalendar, FaUser } from 'react-icons/fa';

const Blog = ({ posts, onArticleClick, isFullBlog = false, viewAll }) => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  
  // Extraer categorías únicas
  const categories = ['Todos', ...new Set(posts.map(post => post.category))];
  
  // Filtrar posts por categoría
  const filteredPosts = selectedCategory === 'Todos' 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  return (
    <section className={`py-20 ${isFullBlog ? 'bg-gray-50' : ''}`}>
      <div className="container mx-auto px-4">
        <div className={`flex flex-col ${isFullBlog ? 'md:flex-row' : ''} justify-between items-start mb-12`}>
          <div className={`${isFullBlog ? 'mb-6 md:mb-0' : 'text-center mb-12 w-full'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {isFullBlog ? 'Todos los Artículos' : 'Recursos Gratuitos'}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              {isFullBlog ? 'Explora todos nuestros recursos educativos' : 'Aprende con nuestros artículos, tutoriales y guías de expertos'}
            </p>
          </div>
          
          {isFullBlog && (
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map(post => (
            <div 
              key={post.id} 
              className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
              onClick={() => onArticleClick(post)}
            >
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${post.image})` }}></div>
              <div className="p-6">
                <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  {post.category}
                </span>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {post.content.replace(/<[^>]*>/g, '').substring(0, 100)}...
                </p>
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <span className="flex items-center mr-4">
                    <FaUser className="mr-1" /> {post.author}
                  </span>
                  <span className="flex items-center">
                    <FaCalendar className="mr-1" /> {post.date}
                  </span>
                </div>
                <div className="text-blue-600 font-semibold flex items-center">
                  Leer artículo <FaArrowRight className="ml-2" />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {!isFullBlog && (
          <div className="text-center mt-12">
            <button 
              onClick={viewAll}
              className="text-blue-600 hover:text-blue-800 font-semibold flex items-center justify-center mx-auto"
            >
              Ver todos los artículos <FaArrowRight className="ml-2" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;