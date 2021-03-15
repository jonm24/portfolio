import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/main.module.css';
import React from 'react';

export default function Header() {
  return (
    <React.Fragment>
      <Head>
        <title>Jon Michalak</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.nav}>
        <Link href="/">
          <h1 className={styles.name}>Jon Michalak</h1>
        </Link>
        <div className={styles.links}>
          <div className={styles.link}>
            <Link href="/">
              <h2>About</h2>
            </Link>
            <div className={styles.loaders}></div>
          </div>
          <div className={styles.link}>
            <Link href="/work">
              <h2>Work</h2>
            </Link>
            <div className={styles.loaders}></div>
          </div>
          <div className={styles.link}>
            <a className={styles.resume_link} href="https://resume.jonm24.vercel.app/" target="_blank">Resume</a>
            <div className={styles.loaders}></div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}