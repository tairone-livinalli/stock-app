import React, { useCallback, useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { Picker } from '@react-native-picker/picker'

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
  TitleContainer,
  IconButton,
  StockPickerContainer,
  StockPickerTitle,
} from './styles'

import theme from '@theme'
import { useRecommendation, useStockSymbols } from '@hooks'
import { Button, Loading } from '@components'
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
  const navigation = useNavigation()
  const insets = useSafeAreaInsets()

  const [showFilter, setShowFilter] = useState(false)
  const [stockSymbolFilter, setStockSymbolFilter] = useState(
    route.params.stockSymbol
  )
  const [daysAmountFilter, setDaysAmountFilter] = useState(10)

  const { action, stockData, isLoading } = useRecommendation({
    stockSymbol: stockSymbolFilter,
    daysAmount: daysAmountFilter,
  })

  const stockSymbols = useStockSymbols()

  const goBack = useCallback(() => {
    navigation.goBack()
  }, [])

  const toggleShowFilter = useCallback(() => {
    setShowFilter((prev) => !prev)
  }, [])

  const onSelectStockSymbol = useCallback((stock: string) => {
    setStockSymbolFilter(stock)
  }, [])

  const onPressDone = useCallback(() => {
    setShowFilter(false)
  }, [])

  return (
    <Container style={{ paddingTop: insets.top }}>
      <TitleContainer>
        <IconButton onPress={goBack}>
          <Ionicons
            name={'chevron-back-outline'}
            size={32}
            color={theme.COLORS.WHITE}
          />
        </IconButton>
        <Title>Recommendation</Title>
        <IconButton onPress={toggleShowFilter}>
          <Ionicons
            name={'filter-outline'}
            size={32}
            color={theme.COLORS.WHITE}
          />
        </IconButton>
      </TitleContainer>

      {isLoading ? (
        <LoadingContainer>
          <Loading />
        </LoadingContainer>
      ) : (
        <>
          <RecommendationCard>
            <StockName>{stockSymbolFilter}</StockName>
            <RecommendationContainer>
              <Ionicons name={ICON[action]} size={32} color={COLOR[action]} />
              <RecommendationText style={{ color: COLOR[action] }}>
                {action.toUpperCase()}
              </RecommendationText>
            </RecommendationContainer>
          </RecommendationCard>
          {showFilter ? (
            <>
              <StockPickerContainer>
                <StockPickerTitle>
                  Change the stock symbol to get a new recommendation
                </StockPickerTitle>
                <Picker
                  selectedValue={stockSymbolFilter}
                  onValueChange={onSelectStockSymbol}
                  style={{ color: theme.COLORS.WHITE, paddingVertical: 8 }}
                  itemStyle={{ color: theme.COLORS.WHITE }}
                >
                  {stockSymbols.map((symbol) => (
                    <Picker.Item key={symbol} label={symbol} value={symbol} />
                  ))}
                </Picker>
                <Button title="Done" onPress={onPressDone} />
              </StockPickerContainer>
            </>
          ) : (
            <>
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
        </>
      )}
    </Container>
  )
}
