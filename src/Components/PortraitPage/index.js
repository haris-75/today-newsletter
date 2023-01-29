import React from 'react';
import SectionHeader from '../Shared/SectionHeader';
import ArticleHeader from '../Shared/ArticleHeader';

import PortraitImg1 from '../../assets/img/portrait/portrait-img-1.png';
import PortraitImg2 from '../../assets/img/portrait/portrait-img-2.png';
import PortraitImg3 from '../../assets/img/portrait/portrait-img-3.png';
import PortraitImg4 from '../../assets/img/portrait/portrait-img-4.png';

export default function PortraitPage() {
  const getPortraitImg = (idx) =>
    idx === 1
      ? PortraitImg1
      : idx === 2
      ? PortraitImg2
      : idx === 3
      ? PortraitImg3
      : idx === 4
      ? PortraitImg4
      : PortraitImg1;

  return (
    <div>
      <SectionHeader text="1 row: 5 circles with bg" textClass="text-warning" />
      <section className="primary-container">
        <div className="celebrity-section ">
          {['omar mukhtar', 'lil larry', 'lubna hamdan', 'shawn john'].map(
            (btnText, index) => (
              <div className="celebrity-img-wrapper" key={btnText}>
                <img
                  width={280}
                  src={getPortraitImg(index + 1)}
                  alt="celeb-img-1"
                />
                <ArticleHeader
                  btnText={btnText}
                  descriptionText={[
                    ' Meals on wheels: Meals on',
                    'wheels: best in the UAE best',
                    'in Meals on wheels: best in',
                  ]}
                  author={'U. R. Oliver'}
                  center
                />
              </div>
            )
          )}
        </div>
      </section>
    </div>
  );
}
