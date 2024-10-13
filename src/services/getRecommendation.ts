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
  // Use the most recent data for the stock
  const recentData = mockStockData[stockSymbol].slice(0, daysAmount)

  // Calculate price and social media trends over the last X days
  const priceChange =
    recentData[0].price - recentData[recentData.length - 1].price
  const socialChange =
    recentData[0].socialCount - recentData[recentData.length - 1].socialCount

  // Define thresholds for significant changes
  const priceThreshold = 15 // Price change threshold
  const socialThreshold = 500 // Social media count change threshold

  // Buy logic
  if (priceChange < -priceThreshold && socialChange > socialThreshold) {
    return Promise.resolve({ action: 'buy', stockData: recentData }) // Price drop but increasing social interest
  } else if (
    priceChange > priceThreshold &&
    socialChange > socialThreshold / 2
  ) {
    return Promise.resolve({ action: 'buy', stockData: recentData }) // Rising price with moderate social media support

    // Sell logic
  } else if (priceChange > priceThreshold && socialChange < -socialThreshold) {
    return Promise.resolve({ action: 'sell', stockData: recentData }) // Price increase but low social media interest
  } else if (priceChange < -priceThreshold && socialChange < -socialThreshold) {
    return Promise.resolve({ action: 'sell', stockData: recentData }) // Both price and social media falling

    // Hold logic
  } else {
    return Promise.resolve({ action: 'hold', stockData: recentData }) // Stable or minor changes in price and social media
  }
}
