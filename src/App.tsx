import './App.css';
import { Body } from './components/Body';
import { Header } from './components/Header';

function App() {
  return (
    <div className="App">
      <div className="app-content">
        <Header />
        <Body />
      </div>
    </div>
  );
}

export default App;
