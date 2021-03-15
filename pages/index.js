import Link from 'next/link';
import { useEffect, useState } from 'react';
import Header from '../components/Header.js';
import styles from '../styles/main.module.css';
import data from '../data';


export default function About() {
  const [rangeVal, setRange] = useState(1);

  useEffect(() => {
    handleChange(rangeVal)
  }, [rangeVal])

  function handleChange(val) {
    setRange(val);
    let content = document.getElementById("content")
    content.innerHTML = data[rangeVal].text;
  }


  return (
    <div className={styles.container}>
      <Header></Header>
      <h1 className={styles.who}>Who am I?</h1>
        <div style={{width: "120px"}}>
          <input 
          onChange={(e) => handleChange(e.target.value)} 
          className={styles.range}
          type="range"
          min="0"
          max="2"
          step="1"
          ></input>
        </div>
      <div style={{alignSelf: 'flex-start'}}> 
        <h2 style={{margin: "30px 0px 10px 0px;"}}>
          {data[rangeVal].title}
        </h2>
        <p id="content" style={{lineHeight: "20px;"}}>
          
        </p>
        <h3 style={{marginTop: "20px"}}>
          Check out my work. <a href="mailto:themichalakfeed@gmail.com" className={styles.underline}>Connect with me</a>. Let's work together!
        </h3>
      </div>
      
    </div>
  )
}
