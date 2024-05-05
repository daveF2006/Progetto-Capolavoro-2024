import React, { useState } from 'react';
import './Topics.css'

const Topic_box = ({list_topics}) => {

  return (
    <article className='topic-box'>
      <img src={list_topics.image} alt={list_topics.title} className='topic-img'/>
      <div className='topic-header'>
      </div>
      <h2>{list_topics.title}</h2>
      <p>{list_topics.intro}</p>
      <p> Vai a pagina argomento </p>
    </article>
  );
};

export default Topic_box;
