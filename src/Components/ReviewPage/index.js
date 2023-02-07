import React from 'react';
import SectionHeader from '../Shared/SectionHeader';
import ReviewImg1 from '../../assets/img/review/review-img-1.png';
import ReviewImg2 from '../../assets/img/review/review-img-2.png';
import ReviewImg3 from '../../assets/img/review/review-img-3.png';
import ReviewImg4 from '../../assets/img/review/review-img-4.png';
import ArticleHeader from '../Shared/ArticleHeader';
import SecondaryContainer from '../Shared/SecondaryContainer';
import ThemeButton from '../Shared/ThemeButton';

export default function ReviewPage() {
  const getReviewImg = (idx) =>
    idx === 1
      ? ReviewImg1
      : idx === 2
      ? ReviewImg2
      : idx === 3
      ? ReviewImg3
      : idx === 4
      ? ReviewImg4
      : ReviewImg1;
  return (
    <div>
      <SectionHeader text="1 row: 4 reviews" textClass="text-primary" />
      <section className="primary-container">
        <SecondaryContainer>
          {[1, 2, 3, 4].map((element) => (
            <div className="review-item">
              <div className="review-img-wrapper">
                <img
                  width={280}
                  src={getReviewImg(element)}
                  alt={`review-img-${element}`}
                />
                <ThemeButton btnText={'4.4'} />
              </div>
              <ArticleHeader
                btnText={'Eat'}
                descriptionText={[
                  ' Meals on wheels: Meals on',
                  'wheels: best in the UAE best',
                  'in Meals on wheels: best in',
                ]}
                author={'U. R. Oliver'}
              />
            </div>
          ))}
        </SecondaryContainer>
      </section>
    </div>
  );
}
