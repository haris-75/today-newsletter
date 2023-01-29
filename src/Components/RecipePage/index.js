import React from 'react';
import SectionHeader from '../Shared/SectionHeader';
import RecipeImg1 from '../../assets/img/recipe/recipe-img-1.svg';
import RecipeImg2 from '../../assets/img/recipe/recipe-img-2.svg';
import RecipeImg3 from '../../assets/img/recipe/recipe-img-3.svg';
import RecipeImg4 from '../../assets/img/recipe/recipe-img-4.svg';
import RecipeImg5 from '../../assets/img/recipe/recipe-img-5.svg';
import RecipeImg6 from '../../assets/img/recipe/recipe-img-6.svg';
import ArticleHeader from '../Shared/ArticleHeader';

export default function RecipePage() {
  const getRecipeImg = (idx) =>
    idx === 1
      ? RecipeImg1
      : idx === 2
      ? RecipeImg2
      : idx === 3
      ? RecipeImg3
      : idx === 4
      ? RecipeImg4
      : idx === 5
      ? RecipeImg5
      : idx === 6
      ? RecipeImg6
      : RecipeImg1;
  return (
    <div>
      <SectionHeader text="2 rows: 3 x 3" textClass="text-danger" />
      <section className="recipe-page primary-container">
        <div className="recipe-page-secondary">
          {['keto kebabs', 'italian deserts', 'japanese flavors'].map(
            (element, index) => (
              <div key={`recipe-page-${element}-${index}-0`}>
                <img src={getRecipeImg(index + 1)} alt="article-img-1" />
                <ArticleHeader
                  btnText={element}
                  descriptionText={[
                    'Meals on wheels best',
                    'food trucks',
                    'in the UAE',
                  ]}
                  author={'U. R. Oliver'}
                />
              </div>
            )
          )}
        </div>
        <div className="recipe-page-secondary">
          {['keto kebabs', 'italian deserts', 'japanese flavors'].map(
            (element, index) => (
              <div key={`recipe-page-${element}-${index}-1`}>
                <img src={getRecipeImg(index + 4)} alt="article-img-1" />
                <ArticleHeader
                  btnText={element}
                  descriptionText={[
                    'Meals on wheels best',
                    'food trucks',
                    'in the UAE',
                  ]}
                  author={'U. R. Oliver'}
                />
              </div>
            )
          )}
        </div>
      </section>
    </div>
  );
}
