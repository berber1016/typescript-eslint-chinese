import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';
import ErrorBoundary from '@docusaurus/ErrorBoundary';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero',styles.heroSyme, styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary"
            to="/docs/">
            入门
          </Link>
        </div>
      </div>
    </header>
  );
}

    
 
export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <ErrorBoundary
    fallback={({error, tryAgain}) => (
      <div>
        <p>这个组件崩溃了，因为错误：{error.message}.</p>
        <button onClick={tryAgain}>再试一次！</button>
      </div>
    )}>
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        {/* <HomepageFeatures /> */}
      </main>
    </Layout>
    </ErrorBoundary>
  );
}
