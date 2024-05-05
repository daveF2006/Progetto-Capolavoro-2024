import './App.css';
import { BrowserRouter as Router, Route, Switch}  from 'react-router-dom';
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/About_us" component={About} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
