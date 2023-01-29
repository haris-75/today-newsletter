import React from 'react';

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
      <div className="heading-btn">{btnText}</div>
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
