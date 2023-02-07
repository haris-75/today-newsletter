import React, { useContext } from 'react';
import SectionHeader from '../Shared/SectionHeader';
import GlassBlackImg from '../../assets/img/glass-black.svg';
import GlassWhiteImg from '../../assets/img/glass-white.svg';
import SecondaryContainer from '../Shared/SecondaryContainer';
import ThemeButton from '../Shared/ThemeButton';
import ThemeContext from '../../theme';

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

const StoryArticle = ({ left }) => {
  const { checkThemeIsLight } = useContext(ThemeContext);
  return (
    <div className="article-header-secondary">
      <div
        className={`btn ${left ? 'btn-primary-outline' : 'btn-primary'}${
          checkThemeIsLight() ? '' : '-dark'
        }`}
      >
        {left ? 'Half Empty' : 'Half Full'}
      </div>
      <div className={`${left ? 'opacity-story' : ''}`}>
        {titleText.map((title, index) => (
          <div
            key={`${title}-heading-primary-${index}`}
            className="heading-primary"
          >
            {title}
          </div>
        ))}
      </div>
      <div className={`${left ? 'opacity-story' : ''}`}>
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
};

export default function StoryPage() {
  const { checkThemeIsLight } = useContext(ThemeContext);
  return (
    <div>
      <SectionHeader
        text="1 row: 2 stories with bg"
        textClass="text-secondary"
      />
      <section className="primary-container">
        <SecondaryContainer>
          <StoryArticle />
          <div className="glass-img-wrapper">
            <ThemeButton btnText={'One Story, Two Perspectives'} />
            <img
              className={`${
                checkThemeIsLight() ? 'mul-color-blend' : 'dodge-color-blend'
              }`}
              src={checkThemeIsLight() ? GlassWhiteImg : GlassBlackImg}
              alt={'glass-img'}
            />
          </div>
          <StoryArticle left />
        </SecondaryContainer>
      </section>
    </div>
  );
}
