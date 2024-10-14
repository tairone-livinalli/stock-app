import { getRecommendation } from './getRecommendation'

jest.mock('@data', () => {
  return {
    mockStockData: {
      AAPL: [
        {
          date: '2024-10-14',
          price: 897.74,
          socialCount: 612,
        },
        {
          date: '2024-10-13',
          price: 494.11,
          socialCount: 692,
        },
        {
          date: '2024-10-12',
          price: 395.58,
          socialCount: 71,
        },
        {
          date: '2024-10-11',
          price: 76.61,
          socialCount: 767,
        },
        {
          date: '2024-10-10',
          price: 531.62,
          socialCount: 162,
        },
        {
          date: '2024-10-09',
          price: 515.48,
          socialCount: 700,
        },
        {
          date: '2024-10-08',
          price: 91.22,
          socialCount: 90,
        },
        {
          date: '2024-10-07',
          price: 339.93,
          socialCount: 216,
        },
      ],
      AMZN: [
        {
          date: '2024-10-14',
          price: 897.74,
          socialCount: 612,
        },
        {
          date: '2024-10-13',
          price: 494.11,
          socialCount: 692,
        },
        {
          date: '2024-10-12',
          price: 395.58,
          socialCount: 71,
        },
        {
          date: '2024-10-11',
          price: 76.61,
          socialCount: 767,
        },
      ],
      GOOG: [
        {
          date: '2024-10-14',
          price: 897.74,
          socialCount: 612,
        },
        {
          date: '2024-10-13',
          price: 494.11,
          socialCount: 692,
        },
        {
          date: '2024-10-12',
          price: 395.58,
          socialCount: 71,
        },
        {
          date: '2024-10-11',
          price: 76.61,
          socialCount: 767,
        },
        {
          date: '2024-10-10',
          price: 531.62,
          socialCount: 162,
        },
        {
          date: '2024-10-09',
          price: 515.48,
          socialCount: 700,
        },
      ],
      MSFT: [
        {
          date: '2024-10-14',
          price: 280.46,
          socialCount: 886,
        },
        {
          date: '2024-10-13',
          price: 697.88,
          socialCount: 580,
        },
        {
          date: '2024-10-12',
          price: 896.82,
          socialCount: 708,
        },
      ],
      TSLA: [
        {
          date: '2024-10-14',
          price: 367.84,
          socialCount: 544,
        },
        {
          date: '2024-10-13',
          price: 925.34,
          socialCount: 988,
        },
      ],
      META: [
        {
          date: '2024-10-14',
          price: 367.84,
          socialCount: 544,
        },
        {
          date: '2024-10-13',
          price: 925.34,
          socialCount: 988,
        },
        {
          date: '2024-10-12',
          price: 456.78,
          socialCount: 123,
        },
        {
          date: '2024-10-11',
          price: 789.01,
          socialCount: 456,
        },
        {
          date: '2024-10-10',
          price: 234.56,
          socialCount: 789,
        },
        {
          date: '2024-10-09',
          price: 678.9,
          socialCount: 321,
        },
        {
          date: '2024-10-08',
          price: 123.45,
          socialCount: 654,
        },
        {
          date: '2024-10-07',
          price: 567.89,
          socialCount: 987,
        },
        {
          date: '2024-10-06',
          price: 345.67,
          socialCount: 210,
        },
        {
          date: '2024-10-05',
          price: 890.12,
          socialCount: 432,
        },
      ],
    },
  }
})

describe('get recommendation service', () => {
  it('should return a "buy" recommendation when the price rise with moderate social media support', async () => {
    const stockSymbol = 'AAPL'
    const daysAmount = 8

    const expectedRecommendation = {
      action: 'buy',
    }

    const { action, stockData } = await getRecommendation({
      stockSymbol,
      daysAmount,
    })

    expect(action).toEqual(expectedRecommendation.action)
    expect(stockData.length).toBe(8)
  })

  it('should return a "buy" recommendation when the price drops with high social media support', async () => {
    const stockSymbol = 'MSFT'
    const daysAmount = 3

    const expectedRecommendation = {
      action: 'buy',
    }

    const { action, stockData } = await getRecommendation({
      stockSymbol,
      daysAmount,
    })

    expect(action).toEqual(expectedRecommendation.action)
    expect(stockData.length).toBe(3)
  })

  it('should return a "sell" recommendation when the price rise with low social media support', async () => {
    const stockSymbol = 'AMZN'
    const daysAmount = 4

    const expectedRecommendation = {
      action: 'sell',
    }

    const { action, stockData } = await getRecommendation({
      stockSymbol,
      daysAmount,
    })

    expect(action).toEqual(expectedRecommendation.action)
    expect(stockData.length).toBe(4)
  })

  it('should return a "sell" recommendation when the price drop with low social media support', async () => {
    const stockSymbol = 'TSLA'
    const daysAmount = 2

    const expectedRecommendation = {
      action: 'sell',
    }

    const { action, stockData } = await getRecommendation({
      stockSymbol,
      daysAmount,
    })

    expect(action).toEqual(expectedRecommendation.action)
    expect(stockData.length).toBe(2)
  })

  it('should return a "hold" recommendation when there is no significant change', async () => {
    const stockSymbol = 'GOOG'
    const daysAmount = 6

    const expectedRecommendation = {
      action: 'hold',
    }

    const { action, stockData } = await getRecommendation({
      stockSymbol,
      daysAmount,
    })

    expect(action).toEqual(expectedRecommendation.action)
    expect(stockData.length).toBe(6)
  })

  it('should return a recommendation when the amount of days requested is less then 2', async () => {
    const stockSymbol = 'GOOG'
    const daysAmount = 1

    const { stockData } = await getRecommendation({
      stockSymbol,
      daysAmount,
    })

    expect(stockData.length).toBe(2)
  })

  it('should return a recommendation when using the default amount of days', async () => {
    const stockSymbol = 'META'

    const expectedRecommendation = {
      action: 'hold',
    }

    const { action, stockData } = await getRecommendation({
      stockSymbol,
    })

    expect(action).toEqual(expectedRecommendation.action)
    expect(stockData.length).toBe(10)
  })
})
