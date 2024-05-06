import './Topics.css'
import React from 'react';

const Topic_box = ({topics}) => {

  return (
    <article className='topic-box'>
      <img src={topics.image} alt={topics.title_topics} className='topic-img'/>
      <div className='topic-header'>
      </div>
      <h2>{topics.title_topics}</h2>
      <p>{topics.description}</p>
      <p> Vai a pagina argomento </p>
    </article>
  );
};

export default Topic_box;
