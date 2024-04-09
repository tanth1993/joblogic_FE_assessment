import './App.css';
import React, { useRef, useState } from 'react'
import { Header } from './components/HeaderSection';
import { RelatedCombinationSection } from './components/RelatedCombinationSection';
import dataJson from './assets/_jsons/combinations/combinations.json'
import { ICombination } from './interfaces';

interface IProvider {
  selectedConbination?: ICombination
  onChangeSelectedCombination?: (selectedItemId?: number) => void
  onChangeColorItem?: (hexCode?: string, indexItem?: number) => void
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

  const onChangeColorItem = (hexCode?: string, indexItem?: number) => {
    const selectedConbinationTemp = { ...selectedConbination }

    selectedConbinationTemp.combination.colors = selectedConbinationTemp.combination.colors?.map((c, i) => {
      const newColor = c
      if (i === indexItem) {
        newColor.hex = hexCode
      }
      return newColor
    })

    setSelectedConbination(selectedConbinationTemp)
  }

  return (
    <AppContext.Provider
      value={{
        selectedConbination,
        onChangeSelectedCombination: (selectedItemId?: number) => onChangeSelectedCombination(selectedItemId),
        onChangeColorItem: (hexCode?: string, indexItem?: number) => onChangeColorItem(hexCode, indexItem)
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
