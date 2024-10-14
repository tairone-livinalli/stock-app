import { useStockSymbols } from './useStockSymbols'

jest.mock('@data', () => ({
  mockStockData: {
    AAPL: { name: 'Apple Inc.', price: 150 },
    GOOGL: { name: 'Alphabet Inc.', price: 2800 },
    AMZN: { name: 'Amazon.com Inc.', price: 3400 },
  },
}))

describe('useStockSymbols', () => {
  it('should return an array of stock symbols', () => {
    const symbols = useStockSymbols()
    expect(symbols).toEqual(['AAPL', 'GOOGL', 'AMZN'])
  })
})
