import Head from 'next/head';
import Header from '../components/Header';
import styles from '../styles/main.module.css';

export default function work() {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"/>
      </Head>
      <Header></Header>
      <div className={styles.cardtainer} >
        <a href="https://stock-site.vercel.app/" target="_blank" className={styles.parent_card}>
          <div className={styles.card}>
            <div className={styles.thumbnail_1}></div>
            <div className={styles.teaser}>
              <h3 style={{marginTop: "5px"}}>Stock Market Research Site</h3>
              <p>A stock market research platform that provides <strong>rich charts</strong> and <strong>sentinment analyzed</strong> news on all your favorite stocks</p>
            </div>
          </div>
        </a>
        <a href="https://www.youtube.com/watch?v=LRxKiDpBBYc&t=7s" target="_blank" className={styles.parent_card}>
          <div className={styles.card}>
            <div className={styles.thumbnail_2}></div>
            <div className={styles.teaser}>
              <h3 style={{marginTop: "5px"}}>8-Puzzle Solver</h3>
              <p>An artifical intelligence algorithm that can solve the 8-puzzle using <strong>BFS, DFS, UCS, GBF, and A*</strong> search algorithms</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}