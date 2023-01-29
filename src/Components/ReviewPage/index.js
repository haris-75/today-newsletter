import React from 'react';
import SectionHeader from '../Shared/SectionHeader';
import ReviewImg1 from '../../assets/img/review/review-img-1.svg';
import ReviewImg2 from '../../assets/img/review/review-img-2.svg';
import ReviewImg3 from '../../assets/img/review/review-img-3.svg';
import ReviewImg4 from '../../assets/img/review/review-img-4.svg';
import ArticleHeader from '../Shared/ArticleHeader';

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
        <div className="celebrity-section">
          {[1, 2, 3, 4].map((element) => (
            <div className="review-item">
              <div className="review-img-wrapper">
                <img
                  src={getReviewImg(element)}
                  alt={`review-img-${element}`}
                />
                <div className="btn btn-primary">4.4</div>
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
        </div>
      </section>
    </div>
  );
}
