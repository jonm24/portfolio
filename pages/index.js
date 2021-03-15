import { useEffect, useState, useRef} from 'react';
import Header from '../components/Header.js';
import styles from '../styles/main.module.css';
import data from '../data';


export default function About() {
  const [rangeVal, setRange] = useState(1);
  const ranger = useRef(rangeVal);

  useEffect(() => {
    setRange(ranger.current.value);
    console.log(rangeVal, ranger.current.value);
    // swap content
    let title = document.getElementById("title");
    title.innerHTML = data[rangeVal].title;
    let content = document.getElementById("content");
    content.innerHTML = data[rangeVal].text;

  }, [rangeVal, ranger.current.value])

  return (
    <div className={styles.container}>
      <Header></Header>
      <h1 className={styles.who}>Who am I?</h1>
        <div style={{width: "120px"}}>
          <input 
          onChange={(e) => setRange(e.target.value)} 
          className={styles.range}
          ref={ranger}
          type="range"
          min="0"
          max="2"
          step="1"
          ></input>
        </div>
      <div className={styles.content}>
        <h2 id="title"></h2>
        <p id="content"></p>
        <h3 style={{marginTop: "20px"}}>
          Check out my work. <a href="mailto:themichalakfeed@gmail.com" className={styles.underline}>Connect with me</a>. Let's work together!
        </h3>
      </div>
      
    </div>
  )
}
