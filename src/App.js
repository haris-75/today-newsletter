import React, { useState } from 'react';
import './App.css';
import ArticlePage from './Components/ArticlePage';
import CelebrityPage from './Components/CelebrityPage';
import FullWidthArticle from './Components/FullWidthArticle';
import HomePage from './Components/HomePage';
import InvertedPage from './Components/InvertedPage';
import Navbar from './Components/Navbar';
import PortraitPage from './Components/PortraitPage';
import RecipePage from './Components/RecipePage';
import ReviewPage from './Components/ReviewPage';
import StoryPage from './Components/StoryPage';
import Footer from './Components/Footer';
import ThemeContext from './theme';

export default function App() {
  const [style, setStyle] = useState('light');

  function toggleStyle() {
    setStyle((style) => (style === 'light' ? 'dark' : 'light'));
    var element = document.getElementById('BODY');
    element.classList.toggle('light-theme');
    element.classList.toggle('dark-theme');
  }

  const checkThemeIsLight = () => style === 'light';

  return (
    <div className="main-container">
      <ThemeContext.Provider value={{ checkThemeIsLight, toggleStyle }}>
        <Navbar />
        <HomePage />
        <CelebrityPage />
        <ArticlePage />
        <PortraitPage />
        <FullWidthArticle />
        <InvertedPage />
        <StoryPage />
        <ReviewPage />
        <RecipePage />
        <Footer />
      </ThemeContext.Provider>
    </div>
  );
}
