import React from 'react';
import SectionHeader from '../Shared/SectionHeader';
import GlassImg from '../../assets/img/glass.svg';

const titleText = [
  'Louvre Abu Dhabi',
  'marks 4th anniversary',
  'with world class',
  'exhibition Louvre',
  'Abu Dhabi marks 4th',
];
const btnText = [
  'Lorem ipsum dolor sit amet, consectetur',
  'adipiscing elit. Phasellus in odio vel.',
];

const StoryArticle = ({ left }) => (
  <div className="article-header-secondary">
    <div className={`btn ${left ? 'btn-primary-outline' : 'btn-primary'}`}>
      {left ? 'Half Empty' : 'Half Full'}
    </div>
    <div>
      {titleText.map((title, index) => (
        <div
          key={`${title}-heading-primary-${index}`}
          className="heading-primary"
        >
          {title}
        </div>
      ))}
    </div>
    <div>
      {btnText.map((btnText, index) => (
        <div
          key={`${btnText}-heading-primary-${index}`}
          className="author-name-secondary"
        >
          {btnText}
        </div>
      ))}
    </div>
  </div>
);

export default function StoryPage() {
  return (
    <div>
      <SectionHeader
        text="1 row: 2 stories with bg"
        textClass="text-secondary"
      />
      <section className="primary-container">
        <div className="celebrity-section">
          <StoryArticle />
          <div className="glass-img-wrapper">
            <div className="btn btn-primary">One Story, Two Perspectives</div>
            <img src={GlassImg} alt={'glass-img'} />
          </div>
          <StoryArticle left />
        </div>
      </section>
    </div>
  );
}
