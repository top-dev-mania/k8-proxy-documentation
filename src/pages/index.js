import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
// import Ticker from 'react-ticker'

const features = [
  {
    // title: 'deep-File Inspection',
    // imageUrl: 'img/undraw_docusaurus_mountain.svg',
    imageUrl: 'img/partnership-image-200x112.png',
    description: (
      <>
        {/* deep-File Inspection breaks down the 
         entire file and validates it against the 
                format’s specification. */}
        Glasswall Partners With Swedish Security Specialist link22 on Secure File Transfer
      </>
    ),
    url: 'https://glasswallsolutions.com/glasswall-partners-with-link22/',
  },
  {
    //title: 'Focus on What Matters',
    imageUrl: 'img/glasswallapinewsfeed-200x112.png',
    description: (
      <>
        {/* Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory. */}
        Glasswall Launches its Cloud-hosted File Regeneration Service
      </>
    ),
    url: 'https://glasswallsolutions.com/rebuild-api-launch/',
  },
  {
    //title: 'Powered by React',
    imageUrl: 'img/thumbnail1-200x112.jpg',
    description: (
      <>
        {/* Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer. */}
        Glasswall Offers Free Cyber Protection to Small Businesses as COVID-19 Crisis Continues
      </>
    ),
    url: 'https://glasswallsolutions.com/free-cyber-protection-for-small-businesses/',
  },
];

function Feature({imageUrl, title, description, url}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
      <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={url}>
              Read More
            </Link>
      </div>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout

    title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      {/* <Ticker mode="smoth" height = "100">
        {({ index }) => (
            <>
                <h4>PRODUCT LAUNCH: Rebuild API, a cloud-hosted service that allows organisations to safely and securely import files and documents. FIND OUT MORE.</h4>
            </>
        )}
      </Ticker> */}
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          {/* <h1 className="hero__title">{siteConfig.title}</h1> */}
          <h1 className="hero__title">Trust Every File.</h1>
          {/* <p className="hero__subtitle">{siteConfig.tagline}</p> */}
          <p className="hero__subtitle">We are a file regeneration and analytics company, and a leader 
          in the field of CDR: Content Disarm and Reconstruction</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/dashboards/websites/production')}>
              Get Started
            </Link>
          </div>
          
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      
      </main>
    </Layout>
  );
}

export default Home;
