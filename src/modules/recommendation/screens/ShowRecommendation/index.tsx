import React, { useEffect, useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import {
  Container,
  Recommendation,
  RecommendationContainer,
  StockName,
  Title,
} from './styles'

import { getRecommendation } from '@services'

export function ShowRecommendation({ route }: any) {
  const insets = useSafeAreaInsets()
  const { stockSymbol } = route.params

  const [stockRecommendation, setStockRecommendation] = useState<
    'buy' | 'hold' | 'sell'
  >('hold')

  useEffect(() => {
    const callRecommendation = async () => {
      const recommendation = await getRecommendation(stockSymbol)

      setStockRecommendation(recommendation)
    }

    callRecommendation()
  }, [stockSymbol])

  return (
    <Container style={{ paddingTop: insets.top }}>
      <Title>Recommendation</Title>

      <RecommendationContainer>
        <StockName>{stockSymbol}</StockName>
        <Recommendation recommendation={stockRecommendation}>
          {stockRecommendation.toUpperCase()}
        </Recommendation>
      </RecommendationContainer>
    </Container>
  )
}
