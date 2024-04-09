import './App.css';
import React, { useRef, useState } from 'react'
import { Header } from './components/HeaderSection';
import { RelatedCombinationSection } from './components/RelatedCombinationSection';
import dataJson from './assets/_jsons/combinations/combinations.json'
import { ICombination } from './interfaces';

interface IProvider {
  selectedConbination?: ICombination
  onChangeSelectedCombination?: (selectedItemId?: number) => void
}
export const AppContext = React.createContext<IProvider>({})

function App() {
  const data = useRef<ICombination[]>(dataJson.combinations as ICombination[]).current
  console.log(data)
  const [selectedConbination, setSelectedConbination] = useState(data[0])

  const onChangeSelectedCombination = (selectedItemId?: number) => {
    const dataItem = data?.find(d => d?.combination?.id === selectedItemId)

    if (!dataItem) return

    setSelectedConbination(dataItem)
  }
  return (
    <AppContext.Provider
      value={{
        selectedConbination,
        onChangeSelectedCombination: (selectedItemId?: number) => onChangeSelectedCombination(selectedItemId)
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
