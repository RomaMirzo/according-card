import React from 'react';
import styles from './card.module.css';

import Data from './Data';
import Accordion from './accordion/Accordion';

import desktopBg from '../../assets/images/bg-pattern-desktop.svg';
import desktopWoman from '../../assets/images/illustration-woman-online-desktop.svg';
import box from '../../assets/images/illustration-box-desktop.svg';

function Card() {
  return (
    <div className={styles.card}>
      
      <div className={styles.logoContainer}>
        <img src={desktopBg} alt='desktop-bg' className={styles.desktopBg} />
        <img src={desktopWoman} alt='desktop-woman' className={styles.desktopWoman} />
      </div>
      <img src={box} alt='box' className={styles.box} />

      <div className={styles.accordionContainer}>
        <h1>FAQ</h1>
        {
          Data.map((item, i) => <Accordion title={item.title} text={item.info} key={i} />)
        }
      </div>
    </div>
  );
}

export default Card;