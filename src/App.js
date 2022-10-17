import logo from './logo.svg';
import {Link} from 'react-router-dom'
import './App.css';

function App() {
  const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: "#f5deb3",
  };
  return (
    <div className="App">
      <div className='titleBcg'>
        <div className='titleContent'>
        <h1> Welcome to Pete's Produce</h1>
        <p> Click <Link to="shop" style={linkStyle}>here</Link> to shop.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
