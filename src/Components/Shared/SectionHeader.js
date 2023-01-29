import React from 'react';

export default function SectionHeader({ text, textClass }) {
  return <div className={`section-header ${textClass}`}>{text}</div>;
}
