import React from 'react';
import SectionHeader from '../Shared/SectionHeader';
import CelebImg1 from '../../assets/img/celebrity/celebrity-1.svg';
import CelebImg2 from '../../assets/img/celebrity/celebrity-2.svg';
import CelebImg3 from '../../assets/img/celebrity/celebrity-3.svg';
import CelebImg4 from '../../assets/img/celebrity/celebrity-4.svg';
import CelebImg5 from '../../assets/img/celebrity/celebrity-5.svg';
import ArticleHeader from '../Shared/ArticleHeader';

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
        <div className="celebrity-section ">
          {[1, 2, 3, 4, 5].map((element) => (
            <div className="celebrity-img-wrapper" key={'celem-img' + element}>
              <span>{element}</span>
              <img src={getCelebImg(element)} alt="celeb-img-1" />
              <ArticleHeader
                btnText={'Vladmir Putin'}
                descriptionText={['Meals on wheels best', 'in the UAE']}
                center
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
