import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <table></table>
        <img src={logo} className="App-logo" alt="logo" />

        <p>
            <h3>Ricardo @ 2023</h3>
            {/* Edit <code>src/App.js</code> and save to reload.  */}
        </p>

        <a
          className="App-link"
          href="https://www.linkedin.com/in/ricdefreitas/"
          target="_blank"
          rel="noopener noreferrer"
        >
        <FormattedMessage id="Meu!" LinkedIn />
        </a>

        <a
          className="App-link"
          href="https://github.com/freric-51/"
          target="_blank"
          rel="noopener noreferrer"
        >
        <FormattedMessage id="Meu!" GitHub />
        </a>

      </header>

    </div>
  );
}

export default App;
