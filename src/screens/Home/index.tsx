import React from 'react'
// import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown'

import { Container, Title, Slogan } from './styles'
import { mockStockData } from '@data'

export function Home() {
  const stockSymbols = Object.keys(mockStockData)
  console.log('🚀 ~ stockSymbols:', JSON.stringify(stockSymbols, null, 2))

  const setSelectedItem = (item: any) => {
    console.log('Selected item:', item)
  }

  return (
    <Container>
      <Title>Stock Recommender</Title>
      <Slogan>The best stock recommendations. For free.</Slogan>

      {/* <AutocompleteDropdown
        clearOnFocus={false}
        closeOnBlur={true}
        closeOnSubmit={true}
        onSelectItem={setSelectedItem}
        dataSet={stockSymbols.map((symbol) => ({ id: symbol, value: symbol }))}
      /> */}
    </Container>
  )
}
