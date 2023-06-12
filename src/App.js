import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            <h2>Ricardo @ 2023</h2>
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

        {/* const nav = (
                    <nav>
                        <ul>
                        <li><a href="#">Início</a></li>
                        <li><a href="#">Sobre</a></li>
                        <li><a href="#">Contato</a></li>
                        </ul>
                    </nav>
                    ) */}


      </header>

    </div>
  );
}

export default App;
