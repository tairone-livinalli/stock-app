import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'

import {
  Container,
  RecommendationText,
  RecommendationCard,
  StockName,
  Title,
  RecommendationContainer,
  LoadingContainer,
} from './styles'

import theme from '@theme'
import { useRecommendation } from '@hooks'
import { Loading } from '@components'

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

  const { action, isLoading } = useRecommendation({
    stockSymbol,
    daysAmount: 20,
  })

  return (
    <Container style={{ paddingTop: insets.top }}>
      <Title>Recommendation</Title>

      {isLoading ? (
        <LoadingContainer>
          <Loading />
        </LoadingContainer>
      ) : (
        <RecommendationCard>
          <StockName>{stockSymbol}</StockName>
          <RecommendationContainer>
            <Ionicons name={ICON[action]} size={32} color={COLOR[action]} />
            <RecommendationText style={{ color: COLOR[action] }}>
              {action.toUpperCase()}
            </RecommendationText>
          </RecommendationContainer>
        </RecommendationCard>
      )}
    </Container>
  )
}
