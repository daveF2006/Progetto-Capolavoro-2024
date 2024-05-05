import React from 'react'
import Topic_box from '../../components/Topics/Topics.jsx'
import list_topics from '../../list_topics.json'


export const Home = () => {
  return (
    <div id = "homepage">
      <div className='web-app-name'><h1> Nome web app </h1></div>
    <div className='description'>
      <img className='logo-archimede'> </img>
      <p> descrizione del progetto, come è diviso e organizzato</p>
    </div>
    <div className='title-main-section'><h1> Argomenti </h1></div>
    <section className='main-section'>
      <div>
      {list_topics.map(list_topics => (
          <Topic_box
            key={list_topics.id}
            list_topics={list_topics}
          />
        ))}
      </div>
    </section>

    </div>
  )
}

export default Home;
