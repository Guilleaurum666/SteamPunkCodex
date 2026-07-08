import React from 'react';
import Link from '@docusaurus/Link';
import styles from './CardLink.module.css';

export default function CardLink({
  icon,
  chapter,
  title,
  description,
  to,
}) {
  return (
    <Link to={to} className={styles.card}>

      <div className={styles.header}>

        <div className={styles.icon}>
          {icon}
        </div>

        <div className={styles.info}>
          <span className={styles.chapter}>
            {chapter}
          </span>

          <h3>{title}</h3>
        </div>

      </div>

      <p>{description}</p>

      <div className={styles.footer}>
        <span className={styles.button}>
          Abrir →
        </span>
      </div>

    </Link>
  );
}