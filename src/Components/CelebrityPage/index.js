import React from 'react';
import SectionHeader from '../Shared/SectionHeader';
import CelebImg1 from '../../assets/img/celebrity/celebrity-1.png';
import CelebImg2 from '../../assets/img/celebrity/celebrity-2.png';
import CelebImg3 from '../../assets/img/celebrity/celebrity-3.png';
import CelebImg4 from '../../assets/img/celebrity/celebrity-4.png';
import CelebImg5 from '../../assets/img/celebrity/celebrity-5.png';
import ArticleHeader from '../Shared/ArticleHeader';
import SecondaryContainer from '../Shared/SecondaryContainer';

export default function CelebrityPage() {
  const getCelebImg = (idx) =>
    idx === 1
      ? CelebImg1
      : idx === 2
      ? CelebImg2
      : idx === 3
      ? CelebImg3
      : idx === 4
      ? CelebImg4
      : idx === 5
      ? CelebImg5
      : CelebImg1;
  return (
    <div>
      <SectionHeader text="1 row: 5 circles with bg" textClass="text-warning" />
      <section className="primary-container">
        <SecondaryContainer>
          {[1, 2, 3, 4, 5].map((element) => (
            <div className="celebrity-img-wrapper" key={'celem-img' + element}>
              <span>{element}</span>
              <img width={185} src={getCelebImg(element)} alt="celeb-img-1" />
              <ArticleHeader
                btnText={'Vladmir Putin'}
                descriptionText={['Meals on wheels best', 'in the UAE']}
                center
              />
            </div>
          ))}
        </SecondaryContainer>
      </section>
    </div>
  );
}
