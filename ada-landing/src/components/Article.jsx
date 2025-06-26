// src/components/Article.js
import React from 'react';
import { FaArrowLeft, FaCalendar, FaUser, FaClock } from 'react-icons/fa';

const Article = ({ article, onBack }) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <button 
            onClick={onBack}
            className="text-blue-600 hover:text-blue-800 font-semibold flex items-center mb-8"
          >
            <FaArrowLeft className="mr-2" /> Volver al blog
          </button>
          
          <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1 rounded-full mb-4">
            {article.category}
          </span>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">{article.title}</h1>
          
          <div className="flex flex-wrap items-center text-gray-500 mb-8">
            <div className="flex items-center mr-6 mb-2">
              <FaUser className="mr-2" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center mr-6 mb-2">
              <FaCalendar className="mr-2" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center mb-2">
              <FaClock className="mr-2" />
              <span>8 min lectura</span>
            </div>
          </div>
          
          <div className="h-96 rounded-xl overflow-hidden mb-10">
            <div 
              className="h-full w-full bg-cover bg-center" 
              style={{ backgroundImage: `url(${article.image})` }}
            ></div>
          </div>
          
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          ></div>
          
          <div className="mt-12 pt-8 border-t border-gray-200">
            <button 
              onClick={onBack}
              className="text-blue-600 hover:text-blue-800 font-semibold flex items-center"
            >
              <FaArrowLeft className="mr-2" /> Volver al blog
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Article;