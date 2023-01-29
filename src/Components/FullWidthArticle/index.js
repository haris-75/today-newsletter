import React from 'react';
import SectionHeader from '../Shared/SectionHeader';
import FullArticleImg from '../../assets/img/full-width-article.svg';

export default function FullWidthArticle() {
  return (
    <div>
      <SectionHeader text="1 full width article" textClass="text-danger" />
      <section className="primary-container">
        <div className="full-width-article">
          <div className="full-width-img">
            <img src={FullArticleImg} alt="full-width-article" />
          </div>
          <div className="btn btn-primary">Long Read</div>
          <div className="full-article-content">
            <span className="title-content">
              Meals on wheels: best in the UAE
            </span>
            <div>
              <span className="header-content">
                Louvre Abu Dhabi marks 4th anniversary with world class
                exhibition
              </span>
              <span className="header-content">
                Louvre Abu Dhabi marks 4th anniversary with world class
              </span>
              <span className="header-content">
                exhibitions, programming for all
              </span>
            </div>
            <span className="author-content">A. R. Oliver</span>
          </div>
        </div>
      </section>
    </div>
  );
}
