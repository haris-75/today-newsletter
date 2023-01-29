import React from 'react';
import HomeImg1 from '../../assets/img/homepage/homepage-img-1.png';
import HomeImg2 from '../../assets/img/homepage/homepage-img-2.png';
import HomeImg3 from '../../assets/img/homepage/homepage-img-3.png';
import ArticleHeader from '../Shared/ArticleHeader';

export default function HomePage() {
  const titleSection1 = [
    'Louvre Abu Dhabi marks 4th',
    'anniversary with world class',
    'exhibitions, programming for all',
  ];
  const descriptionSection1 = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing',
    'elit. Phasellus in odio vel risus dignissim interdum.',
  ];
  const descriptionSection2a = [
    'Lorem ipsum dolor sit amet,',
    'consectetur adipiscing elit. Phasellus',
    'in odio vel',
  ];
  const descriptionSection2b = [
    'Phasellus in odio vel risus dignissim',
    'interdum. Sed vulputate pretium',
    'lobortis.',
  ];
  const descriptionSection2c = [
    'Meals on wheels best food trucks',
    'in the UAE',
  ];
  const descriptionSection3a = [
    'UAE: CBSE Term 1 exams begin',
    'tomorrow; important guidelines',
    'announced',
  ];
  const descriptionSection3b = [
    'World Expo in Dubai: MP delegation',
    'holds discussion over film city and',
    'institute',
  ];

  return (
    <section className="homepage primary-container">
      <div className="home-section-1">
        <ArticleHeader
          btnText={'Travel'}
          titleText={titleSection1}
          descriptionText={descriptionSection1}
          author={'U.R Oliver'}
          center
        />
        <div>
          <img width={650} src={HomeImg1} alt="home-image-1" />
        </div>
      </div>

      <div className="home-section-2">
        <ArticleHeader
          btnText={'Dine'}
          descriptionText={descriptionSection2a}
          author={'U.R Oliver'}
        />
        <ArticleHeader
          btnText={'Dine'}
          descriptionText={descriptionSection2b}
          author={'U.R Oliver'}
        />
        <div className="homepage-image-sm">
          <img width={300} src={HomeImg2} alt="home-image-2" />
        </div>
        <ArticleHeader
          btnText={'Open House'}
          descriptionText={descriptionSection2c}
          author={'U.R Oliver'}
        />
      </div>

      <div className="home-section-2">
        <div className="homepage-image-sm">
          <img width={300} src={HomeImg3} alt="home-image-3" />
        </div>
        <ArticleHeader
          btnText={'Open House'}
          descriptionText={descriptionSection2c}
          author={'U.R Oliver'}
        />
        <ArticleHeader
          btnText={'Dine'}
          descriptionText={descriptionSection3a}
          author={'U.R Oliver'}
        />
        <ArticleHeader
          btnText={'Dine'}
          descriptionText={descriptionSection3b}
          author={'U.R Oliver'}
        />
      </div>
    </section>
  );
}
