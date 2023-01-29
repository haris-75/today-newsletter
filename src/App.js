import React from 'react';
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

export default function App() {
  return (
    <div className="main-container">
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
    </div>
  );
}
