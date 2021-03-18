import React, { useState, useRef } from 'react';
import './Accordion.css';

import arrow from '../../../assets/images/icon-arrow-down.svg';

function Accordion(props) {
  const [setActive, setActiveState] = useState('');
  const [setHeight, setHeightState] = useState('0px');
  const [setRotate , setRotateState] = useState('');

  const content = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === '' ? 'active' : '');
    setHeightState(setActive === 'active' ? '0px' : `${content.current.scrollHeight}px`);
    setRotateState(setRotate === '' ? 'rotate' : '');
  }

  return (
    <div className="accordion__section">
      <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
        <p className="accordion__title">{props.title}</p>
        <img src={arrow} alt="arrowIcon" className={`arrowIcon ${setRotate}`}/>
      </button>
      <div ref={content} style={{maxHeight: `${setHeight}`}} className="accordion__content">
        <div className="accordion__text">{props.text}</div>
      </div>
    </div>
  )
}

export default Accordion;