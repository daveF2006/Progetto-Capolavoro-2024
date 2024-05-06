import React from 'react'
import Topic_box from '../../components/Topics/Topics.jsx'
import list_topics from '../../list_topics.json'
import './Home.css'


export const Home = () => {
  return (
    <div id = "homepage">
      <div className='web-app-name'><h1> Nome web app </h1></div>
    <div className='description'>
      <p> descrizione del progetto, come è diviso e organizzato</p>
    </div>
    <div className='title-main-section'><h1> Argomenti </h1></div>
    <section className='main-section'>
      <div>
      {list_topics.map(topics => (
          <Topic_box
            key={topics.id}
            topics={list_topics}
          />
        ))}
      </div>
    </section>

    </div>
  )
}

export default Home;
