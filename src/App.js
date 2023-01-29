import React from 'react';
import './App.css';
import ArticlePage from './Components/ArticlePage';
import CelebrityPage from './Components/CelebrityPage';
import FullWidthArticle from './Components/FullWidthArticle';
import HomePage from './Components/HomePage';
import Navbar from './Components/Navbar';
import PortraitPage from './Components/PortraitPage';

export default function App() {
  return (
    <div className="main-container">
      <Navbar />
      <HomePage />
      <CelebrityPage />
      <ArticlePage />
      <PortraitPage />
      <FullWidthArticle />
    </div>
  );
}
