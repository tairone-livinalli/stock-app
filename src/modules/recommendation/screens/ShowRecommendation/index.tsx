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
  StockDataCard,
  Subtitle,
  StockList,
} from './styles'

import theme from '@theme'
import { useRecommendation } from '@hooks'
import { Loading } from '@components'
import { StockData } from '@models'

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

interface RenderStockDataProps {
  todayStockData: StockData
  yesterdayStockData: StockData
}

function RenderStockData({
  todayStockData,
  yesterdayStockData,
}: RenderStockDataProps) {
  const action =
    todayStockData?.price > yesterdayStockData?.price
      ? 'buy'
      : todayStockData?.price < yesterdayStockData?.price
        ? 'sell'
        : 'hold'

  return (
    <StockDataCard>
      <StockName>{todayStockData.date}</StockName>
      <RecommendationContainer>
        <Ionicons name={ICON[action]} size={32} color={COLOR[action]} />
        <RecommendationText style={{ color: COLOR[action] }}>
          {todayStockData.price}
        </RecommendationText>
      </RecommendationContainer>
    </StockDataCard>
  )
}

export function ShowRecommendation({ route }: any) {
  const insets = useSafeAreaInsets()
  const { stockSymbol } = route.params

  const { action, stockData, isLoading } = useRecommendation({
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
        <>
          <RecommendationCard>
            <StockName>{stockSymbol}</StockName>
            <RecommendationContainer>
              <Ionicons name={ICON[action]} size={32} color={COLOR[action]} />
              <RecommendationText style={{ color: COLOR[action] }}>
                {action.toUpperCase()}
              </RecommendationText>
            </RecommendationContainer>
          </RecommendationCard>
          <Subtitle>Stock History</Subtitle>
          <StockList>
            {stockData.map((todayStockData, index) => (
              <RenderStockData
                key={todayStockData.date}
                todayStockData={todayStockData}
                yesterdayStockData={stockData[index + 1]}
              />
            ))}
          </StockList>
        </>
      )}
    </Container>
  )
}
