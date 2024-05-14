import React from 'react'
import Topic_box from '../../components/Topics/Topics.jsx'
import list_topics from '../../list_topics.json'
import Topics_page  from '../../components/Topics_page/Topics_page.jsx'
import './Home.css'


export const Home = () => {

  const renderTopicPage = () =>{
    {list_topics.map(topics => (
      <Topics_page
      key = {topics.id}
      topics = {topics}
      />
    ))}
  
  }

  return (
    <div id = "homepage" className='wrapper2'>
      <div className='web-app-name'><h1> Nome web app </h1></div>
    <div className='description'>
      <p> descrizione del progetto, come è diviso e organizzato</p>
    </div>
    <div className='title-main-section'><h1> Argomenti </h1></div>
    <section className='main-section'>
      <div className='left-section'>
      {list_topics.map(topics => (
          <Topic_box
            key={topics.id}
            topics={topics}
            click = {renderTopicPage}
          />
        ))}
      </div>
    </section>

    </div>
  )
}

export default Home;
