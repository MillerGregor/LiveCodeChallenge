import logo from './logo.svg';
import './App.css';
import { Content } from './components/articles';
import { Placeholder } from './components/messages';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span className="App-title">Live Coding Challenge</span>
      </header>
      <div className="Container-main">
        <div className="Sidebar">
          <div className="Sidebar-section">
            <p>Donec elementum tempor</p>
          </div>
          <div className="Sidebar-section">
            <p>Suspendisse rutrum vel</p>
        </div>
          <div className="Sidebar-section">
            <Placeholder />
          </div>
        </div>
        <Content />
      </div>
    </div>
  );
}

export default App;
