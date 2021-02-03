import './App.css';
import Navbar from './components/Navbar.js'
import Footer from './components/Footer.js'
import SidebarData from './components/SidebarData';

function App() {
  const divStyle = {
    color: 'black',
    height: '500px',
    marginTop: '119px',
    border: '2px solid blue',
    fontSize: '60px'
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
