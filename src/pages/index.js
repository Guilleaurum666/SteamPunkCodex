import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout
      title="SteamPunk Codex"
      description="La guía definitiva de SteamPunk [LPS]">

      <main className={styles.hero}>

        <img
          src="/img/steampunk-logo.png"
          alt="SteamPunk Logo"
          className={styles.logo}
        />

        <h1>SteamPunk Codex</h1>

        <p className={styles.subtitle}>
          La guía definitiva de SteamPunk [LPS] v19
        </p>

        <section className={styles.cards}>

          <Link className={styles.card} to="/docs/intro">
            <div className={styles.icon}>🚀</div>
            <h2>Empezar aquí</h2>
            <p>
              Aprende cómo funciona el servidor y prepárate antes de comenzar tu aventura.
            </p>
          </Link>

          <Link className={styles.card} to="/docs/guia">
            <div className={styles.icon}>📖</div>
            <h2>Guía</h2>
            <p>
              Aprende SteamPunk paso a paso desde el primer día.
            </p>
          </Link>

          <Link className={styles.card} to="/docs/quiero">
            <div className={styles.icon}>🎯</div>
            <h2>Quiero...</h2>
            <p>
              Encuentra rápidamente cualquier cosa que necesites.
            </p>
          </Link>

          <Link className={styles.card} to="/docs/mods">
            <div className={styles.icon}>📦</div>
            <h2>Mods</h2>
            <p>
              Consulta todos los mods del modpack organizados.
            </p>
          </Link>

        </section>

      </main>

    </Layout>
  );
}