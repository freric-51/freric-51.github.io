import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            <h2>Ricardo @ 2023 08 17:54</h2>
            {/* Edit <code>src/App.js</code> and save to reload.  */}
        </p>

        <a
          className="App-link"
          href="https://www.linkedin.com/in/ricdefreitas/"
          target="_blank"
          rel="noopener noreferrer"
        >
          My LinkedIn
        </a>

      </header>
      <script>
        {/* ID da métrica   G-4W0ESB57EC */}
        gtag('config', 'G-4W0ESB57EC');
      </script>
    </div>
  );
}

export default App;
