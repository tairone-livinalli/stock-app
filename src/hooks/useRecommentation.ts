import { useEffect, useState } from 'react'

import { mockStockData } from '@data'
import { getRecommendation } from '@services'

interface RecommendationParams {
  stockSymbol: keyof typeof mockStockData
  daysAmount?: number
}

export function useRecommendation({
  stockSymbol,
  daysAmount = 10,
}: RecommendationParams) {
  const [action, setAction] = useState<'buy' | 'hold' | 'sell'>('hold')

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [hasError, setHasError] = useState<boolean>(false)

  useEffect(() => {
    const callRecommendation = async () => {
      try {
        setIsLoading(true)
        setHasError(false)
        const recommendation = await getRecommendation({
          stockSymbol,
          daysAmount,
        })
        setAction(recommendation.action)
      } catch (error) {
        console.error(error)
        setHasError(true)
      } finally {
        setIsLoading(false)
      }
    }

    callRecommendation()
  }, [stockSymbol])

  return {
    action,
    isLoading,
    hasError,
  }
}
