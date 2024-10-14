import { mockStockData } from '@data'

export function useStockSymbols() {
  return Object.keys(mockStockData)
}
