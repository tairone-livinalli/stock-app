import React, { useEffect, useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'

import {
  Container,
  RecommendationText,
  RecommendationCard,
  StockName,
  Title,
  RecommendationContainer,
} from './styles'

import { getRecommendation } from '@services'
import theme from '@theme'

const COLOR = {
  buy: theme.COLORS.BRAND_LIGHT,
  sell: theme.COLORS.ERROR,
  hold: theme.COLORS.WHITE,
}

const ICON: {
  [key in 'buy' | 'hold' | 'sell']:
    | 'trending-up-outline'
    | 'trending-down-outline'
    | 'analytics-outline'
} = {
  buy: 'trending-up-outline',
  sell: 'trending-down-outline',
  hold: 'analytics-outline',
}

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

      <RecommendationCard>
        <StockName>{stockSymbol}</StockName>
        <RecommendationContainer>
          <Ionicons
            name={ICON[stockRecommendation]}
            size={32}
            color={COLOR[stockRecommendation]}
          />
          <RecommendationText style={{ color: COLOR[stockRecommendation] }}>
            {stockRecommendation.toUpperCase()}
          </RecommendationText>
        </RecommendationContainer>
      </RecommendationCard>
    </Container>
  )
}
