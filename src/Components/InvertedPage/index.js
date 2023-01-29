import React from 'react';
import SectionHeader from '../Shared/SectionHeader';
import ArticleHeader from '../Shared/ArticleHeader';

import InvertImg1 from '../../assets/img/inverted-article/invert-article-1.png';
import InvertImg2 from '../../assets/img/inverted-article/invert-article-2.png';
import InvertImg3 from '../../assets/img/inverted-article/invert-article-3.png';
const InvertedArticleHeader = () => (
  <ArticleHeader
    btnText={'Open House'}
    descriptionText={[
      'Lorem ipsum dolor sit amet, consectetur',
      'adipiscing elit. Phasellus in odio vel.',
    ]}
    author={'U. R. Oliver'}
    center
  />
);
export default function InvertedPage() {
  return (
    <div>
      <SectionHeader text="1 row: 2 x 1 inverted" textClass="text-warning" />
      <section className="primary-container">
        <div className="invert-article-section">
          <div>
            <img width={280} src={InvertImg1} alt="invert-img-1" />
            <InvertedArticleHeader />
          </div>
          <div>
            <InvertedArticleHeader />
            <img width={280} src={InvertImg2} alt="invert-img-2" />
          </div>
          <div>
            <img width={280} src={InvertImg3} alt="invert-img-3" />
            <InvertedArticleHeader />
          </div>
        </div>
      </section>
    </div>
  );
}
