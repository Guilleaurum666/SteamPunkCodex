import React from 'react';
import Link from '@docusaurus/Link';

export default function BackButton({ to }) {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <Link
        to={to}
        style={{
          textDecoration: 'none',
          fontWeight: 700,
          fontSize: '1rem',
        }}
      >
        ← Volver
      </Link>
    </div>
  );
}