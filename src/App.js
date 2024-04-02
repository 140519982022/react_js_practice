import logo from './owl.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h5>ISHA</h5>
        <img src={logo} className="App-logo" alt="logo" />
        <i>
          Coding like poetry should be short and concise
        </i>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn From Me
        </a>
      </header>
    </div>
  );
}

export default App;
