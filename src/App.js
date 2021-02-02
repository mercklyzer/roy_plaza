import './App.css';
import Navbar from './components/Navbar.js'
import Footer from './components/Footer.js'

function App() {
  const divStyle = {
    color: 'black',
    height: '500px'
  }

  return (
    <div className="App">
      <Navbar />
      <div style={divStyle}>
        Some content
      </div>
      <Footer />
    </div>
  );
}

export default App;
