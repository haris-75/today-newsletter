import React from 'react';
import SectionHeader from '../Shared/SectionHeader';
import MainArticleImg from '../../assets/img/article/article-main.png';
import ArticleImg1 from '../../assets/img/article/article-1.png';
import ArticleImg2 from '../../assets/img/article/article-2.png';
import ArticleImg3 from '../../assets/img/article/article-3.png';
import ArticleHeader from '../Shared/ArticleHeader';

export default function ArticlePage() {
  const titleText = [
    'Louvre Abu Dhabi marks 4th',
    'anniversary with world class',
    'exhibitions, programming for all',
  ];
  const descriptionText = [
    'Exhin imlave asfear asfasas afsfeaarsa asfasfasf',
    'asfasfa ten cultable doice inverum',
  ];
  const getArticleImg = (idx) =>
    idx === 1
      ? ArticleImg1
      : idx === 2
      ? ArticleImg2
      : idx === 3
      ? ArticleImg3
      : '';
  return (
    <div>
      <SectionHeader text="2 rows: 1 x 3" textClass="text-secondary" />
      <section className="article-page primary-container">
        <div className="article-page-primary">
          <img width={760} src={MainArticleImg} />
          <ArticleHeader
            btnText={'Travel'}
            titleText={titleText}
            descriptionText={descriptionText}
            author={'Cvita Doleschall'}
          />
        </div>
        <div className="article-page-secondary">
          {[1, 2, 3].map((element) => (
            <div key={'artice-page-secondary' + element}>
              <img
                width={170}
                src={getArticleImg(element)}
                alt="article-img-1"
              />
              <ArticleHeader
                btnText={'Culture'}
                descriptionText={[
                  'Meals on wheels best',
                  'food trucks',
                  'in the UAE',
                ]}
                author={'U. R. Oliver'}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
