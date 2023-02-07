import React from 'react';
import ThemeButton from './ThemeButton';

export default function ArticleHeader({
  btnText,
  titleText,
  descriptionText,
  author,
  center,
}) {
  return (
    <div
      className={`article-header ${center ? 'text-center align-center' : ''}`}
    >
      <ThemeButton btnText={btnText} />
      {titleText ? (
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
      ) : (
        ''
      )}
      <div>
        {descriptionText.map((description, index) => (
          <div
            key={`${description}-heading-secondary-${index}`}
            className="heading-secondary"
          >
            {description}
          </div>
        ))}
      </div>

      {author ? (
        <div>
          <span className="author-name">{author}</span>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}
