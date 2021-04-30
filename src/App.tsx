import React, { useCallback, useState }  from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [flipColors, setFlipColors] = useState(false)

  const toggleFlipColors = useCallback(() => {
    setFlipColors(!flipColors)
  }, [ flipColors ])

  const headerCn = flipColors
    ? 'App-header App-header-flipped'
    : 'App-header'

  return (
    <div className="App">
      <header className={headerCn}>
        <img src={logo} className="App-logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={toggleFlipColors} type="button">
          Flip colors
        </button>
      </header>
    </div>
  );
}

export default App;
