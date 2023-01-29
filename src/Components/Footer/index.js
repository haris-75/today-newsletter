import React from 'react';

export default function Footer() {
  const FooterTopContent = ({ title, textArray }) => (
    <div>
      <h3 className="footer-heading">{title}</h3>
      {textArray.map((text) => (
        <p>{text}</p>
      ))}
    </div>
  );
  return (
    <div>
      <footer className="footer primary-container">
        <div className="footer-top">
          <div className="footer-left">
            <FooterTopContent
              title="News"
              textArray={['featured news', 'latest news']}
            />
            <FooterTopContent
              title="Life"
              textArray={[
                'latest news',
                'fashion',
                'dining',
                'recipes',
                'art & culture',
                'travel',
                'motoring',
              ]}
            />
            <FooterTopContent
              title="Business"
              textArray={[
                'open house',
                'what does that even mean?',
                'homegrown',
                'How do I...',
                'Bag off',
                'Where to spend it',
              ]}
            />
          </div>
          <div className="footer-right">
            <h3 className="footer-heading">subscribe</h3>
            <p>Get fresh updates about the fashion,</p>
            <p>beauty, trends</p>
            <div className="custom-input-box">
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          {['magazine', 'contact', 'about', 'press', 'sitemap', 'ts + cs'].map(
            (title) => (
              <h5 className="footer-heading">{title}</h5>
            )
          )}
        </div>
      </footer>
    </div>
  );
}
