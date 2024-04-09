import './App.css';
import React, { useRef, useState } from 'react'
import { Header } from './components/HeaderSection';
import { RelatedCombinationSection } from './components/RelatedCombinationSection';
import dataJson from './assets/_jsons/combinations/combinations.json'
import { ICombination } from './interfaces';

interface IProvider {
  selectedConbination?: ICombination
  onChangeSelectedCombination?: (selectedItem?: ICombination) => void
}
export const AppContext = React.createContext<IProvider>({})

function App() {
  const data = useRef<ICombination[]>(dataJson.combinations as ICombination[]).current
  console.log(data)
  const [selectedConbination, setSelectedConbination] = useState(data[5])

  const onChangeSelectedCombination = (selectedItem?: ICombination) => {

  }
  return (
    <AppContext.Provider
      value={{
        selectedConbination,
        onChangeSelectedCombination: (selectedItem?: ICombination) => onChangeSelectedCombination(selectedItem)
      }}>
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
