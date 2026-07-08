import React from 'react';
import Link from '@docusaurus/Link';

export default function ChapterNavigation({ next, nextTitle }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        marginBottom: '2rem',
      }}
    >
      <Link
        to={next}
        style={{
          padding: '10px 18px',
          borderRadius: '10px',
          background: '#d7942d',
          color: 'white',
          textDecoration: 'none',
          fontWeight: 'bold',
        }}
      >
        {nextTitle} →
      </Link>
    </div>
  );
}