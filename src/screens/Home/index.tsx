import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker'

import {
  Container,
  HeaderContainer,
  Title,
  Slogan,
  StockPickerContainer,
  StockPickerTitle,
} from './styles'
import { mockStockData } from '@data'
import theme from '@theme'
import { Button } from '@components'

export function Home() {
  const stockSymbols = Object.keys(mockStockData)

  const [stockSymbol, setStockSymbol] = useState(stockSymbols[0])

  const setSelectedItem = (item: any) => {
    setStockSymbol(item)
  }

  return (
    <Container>
      <HeaderContainer>
        <Title>Stock Recommender</Title>
        <Slogan>The best stock recommendations. For free.</Slogan>
      </HeaderContainer>

      <StockPickerContainer>
        <StockPickerTitle>
          Select a stock symbol to get started
        </StockPickerTitle>
        <Picker
          selectedValue={stockSymbol}
          onValueChange={setSelectedItem}
          style={{ color: theme.COLORS.WHITE, paddingVertical: 8 }}
          itemStyle={{ color: theme.COLORS.WHITE }}
        >
          {stockSymbols.map((symbol) => (
            <Picker.Item key={symbol} label={symbol} value={symbol} />
          ))}
        </Picker>
        <Button title="Get Recommendations" />
      </StockPickerContainer>
    </Container>
  )
}
