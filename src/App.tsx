import './App.css';
import React from 'react'
import { Header } from './components/HeaderSection';
import { RelatedCombinationSection } from './components/RelatedCombinationSection';


interface IProvider {
}
export const AppContext = React.createContext<IProvider>({})

function App() {
  return (
    <AppContext.Provider value={{}}>
      <div className="App">
        <div className="app-content">
          <Header />
          <RelatedCombinationSection />
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
