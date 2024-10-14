import { mockStockData } from '@data'
import { StockData } from '@models'

interface RecommendationParams {
  stockSymbol: keyof typeof mockStockData
  daysAmount?: number
}

interface RecommendationResponse {
  action: 'buy' | 'hold' | 'sell'
  stockData: StockData[]
}

export function getRecommendation({
  stockSymbol,
  daysAmount = 10,
}: RecommendationParams): Promise<RecommendationResponse> {
  const days = Math.max(daysAmount, 2)

  const recentData = mockStockData[stockSymbol].slice(0, days)

  let totalPriceChange = 0
  let totalSocialChange = 0

  for (let i = 1; i < recentData.length; i++) {
    totalPriceChange += recentData[i - 1].price - recentData[i].price
    totalSocialChange +=
      recentData[i - 1].socialCount - recentData[i].socialCount
  }

  const avgPriceChange = totalPriceChange / (days - 1)
  const avgSocialChange = totalSocialChange / (days - 1)

  const priceThreshold = 10
  const socialThreshold = 50

  let action: 'buy' | 'hold' | 'sell' = 'hold'

  if (avgPriceChange < -priceThreshold && avgSocialChange > socialThreshold) {
    action = 'buy' // Price drop with hight social support
  } else if (
    avgPriceChange > priceThreshold &&
    avgSocialChange > socialThreshold / 2
  ) {
    action = 'buy' // Price rise with moderate social support
  } else if (
    avgPriceChange > priceThreshold &&
    avgSocialChange < -socialThreshold
  ) {
    action = 'sell' // Price rise with low social support
  } else if (
    avgPriceChange < -priceThreshold &&
    avgSocialChange < -socialThreshold
  ) {
    action = 'sell' // Price drop with low social support
  }

  return Promise.resolve({ action, stockData: recentData })
}
