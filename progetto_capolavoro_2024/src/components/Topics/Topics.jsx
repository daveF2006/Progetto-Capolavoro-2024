import './Topics.css'
import React from 'react';

const Topics= ({topics, click}) => {

  return (
    <article className='topic-box'>
      <img src={topics.image} alt={topics.title_topics} className='topic-img'/>
      <div className='topic-header'>
      </div>
      <h2>{topics.title_topics}</h2>
      <p>{topics.description}</p>
      <button onClick={click}> Leggi argomento </button>
    </article>
  );
};

export default Topics;
