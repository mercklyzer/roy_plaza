import './App.css';
import Navbar from './components/Navbar.js'
import Content from './components/Content.js'
import Footer from './components/Footer.js'
import {BrowserRouter as Router} from 'react-router-dom'
function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Content />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
