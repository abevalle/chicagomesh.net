import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <img src="logo.png"/>
      <h3>Future Home of the Chicago Mesh Network</h3>
      <h4>hello@chicagomesh.net</h4>
    </div>
  )
}
