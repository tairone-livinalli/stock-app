import { useCallback, useEffect, useState } from 'react'

import { mockStockData } from '@data'
import { getRecommendation } from '@services'
import { StockData } from '@models'

interface RecommendationParams {
  stockSymbol: keyof typeof mockStockData
  daysAmount?: number
}

export function useRecommendation({
  stockSymbol,
  daysAmount = 10,
}: RecommendationParams) {
  const [action, setAction] = useState<'buy' | 'hold' | 'sell'>('hold')
  const [stockData, setStockData] = useState<StockData[]>([])

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [hasError, setHasError] = useState<boolean>(false)

  const callRecommendation = useCallback(
    async (recommendationParams: RecommendationParams) => {
      try {
        setIsLoading(true)
        setHasError(false)

        const recommendation = await getRecommendation({
          stockSymbol: recommendationParams.stockSymbol,
          daysAmount: recommendationParams.daysAmount,
        })

        setAction(recommendation.action)
        setStockData(recommendation.stockData)
      } catch (error) {
        console.error(error)
        setHasError(true)
      } finally {
        setIsLoading(false)
      }
    },
    []
  )

  useEffect(() => {
    callRecommendation({ stockSymbol, daysAmount })
  }, [stockSymbol, daysAmount])

  return {
    action,
    stockData,
    isLoading,
    hasError,
  }
}
