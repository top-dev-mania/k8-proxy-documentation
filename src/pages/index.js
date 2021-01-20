import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
// import Ticker from 'react-ticker'

const outlines = [
  {
    title: (
      <>
        Working from home means greater reliance on cloud technologies.
      </>
    ),
    imageUrl: 'img/digital-transformation-1150x700..2.png',
    description: (
      <>
        We are all having to work differently, remotely sharing, storing and accessing more files than ever before.
      </>
    ),
  },
  {
    title: (
      <>
        Increasing access elevates risk.
      </>
    ),
    imageUrl: 'img/digital-transformation-risk-1150x700.2.png',
    description: (
      <>
        There is a growing need for innovative solutions to address this expanding attack surface without compromising productivity.
      </>
    ),
  },
  {
    title: (
      <>
        Glasswall offers unparalleled protection from file-based threats.
      </>
    ),
    imageUrl: 'img/process-1150x700.1.png',
    description: (
      <>
        Signature-based security seeks to identify and remove dangerous files. Malware morphs and spreads at such a rate that malicious files are often missed and harmless files held, impacting both safety and productivity. Without relying on signatures or detections, Glasswall's products and solutions regenerate clean, safe and visually identical files in milliseconds, securing your organisation without compromise.
      </>
    ),
    url: 'https://glasswallsolutions.com/products',
    btnText: (
      <>
        VIEW OUR PRODUCTS
      </>
    ),
  },
  
];

const introduces = [
  {
    title: 'deep-File Inspection',
    imageUrl: 'img/deepfile-340.png',
    description: (
      <>
         deep-File Inspection breaks down the entire file and validates it against the file format’s specification. 
      </>
    ),
  },
  {
    title: 'Remediation',
    imageUrl: 'img/remediation-340.png',
    description: (
      <>
        All deviations uncovered during the inspection are remediated back into line with the file standard.
      </>
    ),
  },
  {
    title: 'Sanitisation',
    imageUrl: 'img/sanitisation-340.png',
    description: (
      <>
        Sanitisation removes high-risk Active Content such as macros, JavaScript, URLs and embedded files.
      </>
    ),
  },
];

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
    btnText: (
      <>
        LEARN MORE
      </>
    ),
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
    btnText: (
      <>
        LEARN MORE
      </>
    ),
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
    btnText: (
      <>
        LEARN MORE
      </>
    ),
  },
];

const trustButton = [
  {
    title: (
      <>
        LEARN MORE
      </>
    ),
    url: 'https://glasswallsolutions.com/glasswall-partners-with-link22/',
  },
  {
    title: (
      <>
        VIEW OUR PRODUCTS
      </>
    ),
    url: 'https://glasswallsolutions.com/rebuild-api-launch/',
  },
];

function ShowButton({title, url}) {
  return (
    <div className={clsx('col col--6', styles.feature)}>
        <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={url}>
              {title}
            </Link>
      </div>
    </div>
  );
}

const introButton = [
  {
    title: (
      <>
        LEARN MORE
      </>
    ),
    url: 'https://glasswallsolutions.com/technology/',
  },
];

function ShowOneButton({title, url}) {
  return (
    <div className={clsx('col col--12', styles.feature)}>
        <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={url}>
              {title}
            </Link>
      </div>
    </div>
  );
}


function Outline({imageUrl, title, description, btnText, url}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--12', styles.feature)}>
      <h1>{title}</h1>
      <p>{description}</p>
      
      {imgUrl && (
        <div className="text--center">
          <img className={styles.outlineImage} src={imgUrl} alt={title} />
        </div>
      )}
      
      {btnText && (<div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={url}>
              {btnText}
            </Link>
      </div>)}
      
    </div>
  );
}

function Feature({imageUrl, title, description, url, btnText}) {
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
      {btnText && (<div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={url}>
              {btnText}
            </Link>
      </div>)}
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
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/dashboards/client-welcome/index')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
      {outlines && outlines.length > 0 && (
          <section className={styles.outlines}>
            <div className="container">
              <div className="row">
                {outlines.map((props, idx) => (
                  <Outline key={idx} {...props} />         
                ))}
              </div>
            </div>
          </section>
        )}

        {introduces && introduces.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {introduces.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      
      {introButton && introButton.length > 0 && (
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              {introButton.map((props, idx) => (
                <ShowOneButton key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>
      )}

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

