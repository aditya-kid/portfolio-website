import React, { useState, useCallback } from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import ProjectSection from './components/ProjectSection';
import Footer from './components/Footer';
import { projectsData } from './data/projectsData';

function App() {
  const [activeCategory, setActiveCategory] = useState('hardware');

  const handleCategoryChange = useCallback((category) => {
    setActiveCategory(category);
  }, []);

  return (
    <div className="App">
      <Header />
      <Navigation
        activeCategory={activeCategory}
        setActiveCategory={handleCategoryChange}
      />
      <ProjectSection
        category={activeCategory}
        projects={projectsData}
      />
      <Footer />
    </div>
  );
}

export default App;
