import Head from 'next/head';
import Script from 'next/script';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Premium Chicago Mesh Network Domains</title>
        <link rel="icon" href="/favicon.png" />
        <meta name="description" content="Premium Chicago Mesh Network domain names for sale - Secure your digital presence in Chicago's tech ecosystem" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-4QHEJ3XJ4Q"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-4QHEJ3XJ4Q');
        `}
      </Script>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Chicago Mesh Network<br />
          <span style={{ color: '#6b7280', fontSize: '0.8em' }}>Premium Domains</span>
        </h1>
        
        <div className={styles.domains}>
          <h2>Available Domains</h2>
          <ul>
            <li>ChicagoMesh.net</li>
            <li>ChicagoMesh.org</li>
            <li>ChicagoMeshNetwork.com</li>
          </ul>
          <p>Available as a complete package or individually</p>
        </div>

        <div className={styles.contact}>
          <h2>Ready to Discuss?</h2>
          <p>Contact us for pricing and availability</p>
          <a 
            href="mailto:hello@chicagomesh.net"
            onClick={() => {
              gtag('event', 'contact', {
                'event_category': 'engagement',
                'event_label': 'email_click'
              });
            }}
          >
            hello@chicagomesh.net
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Chicago Mesh Network Domains</p>
      </footer>
    </div>
  )
}
