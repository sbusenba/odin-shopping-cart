import logo from './logo.svg';
import {Link} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <div> Welcome to my Produce <Link to="shop">Store</Link></div>
    </div>
  );
}

export default App;
