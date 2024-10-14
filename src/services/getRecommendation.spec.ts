import { getRecommendation } from './getRecommendation'

jest.mock('@data', () => {
  const today = new Date()

  return {
    mockStockData: {
      AAPL: [
        {
          date: today.toISOString().split('T')[0],
          price: 100,
          socialCount: 100,
        },
        {
          date: new Date(today.setDate(today.getDate() - 1))
            .toISOString()
            .split('T')[0],
          price: 90,
          socialCount: 200,
        },
        {
          date: new Date(today.setDate(today.getDate() - 2))
            .toISOString()
            .split('T')[0],
          price: 80,
          socialCount: 300,
        },
        {
          date: new Date(today.setDate(today.getDate() - 3))
            .toISOString()
            .split('T')[0],
          price: 70,
          socialCount: 400,
        },
        {
          date: new Date(today.setDate(today.getDate() - 4))
            .toISOString()
            .split('T')[0],
          price: 60,
          socialCount: 500,
        },
        {
          date: new Date(today.setDate(today.getDate() - 5))
            .toISOString()
            .split('T')[0],
          price: 50,
          socialCount: 600,
        },
        {
          date: new Date(today.setDate(today.getDate() - 6))
            .toISOString()
            .split('T')[0],
          price: 40,
          socialCount: 700,
        },
        {
          date: new Date(today.setDate(today.getDate() - 7))
            .toISOString()
            .split('T')[0],
          price: 30,
          socialCount: 800,
        },
        {
          date: new Date(today.setDate(today.getDate() - 8))
            .toISOString()
            .split('T')[0],
          price: 20,
          socialCount: 900,
        },
        {
          date: new Date(today.setDate(today.getDate() - 9))
            .toISOString()
            .split('T')[0],
          price: 10,
          socialCount: 1000,
        },
      ],
      AMZN: [
        {
          date: today.toISOString().split('T')[0],
          price: 1000,
          socialCount: 1000,
        },
        {
          date: new Date(today.setDate(today.getDate() - 1))
            .toISOString()
            .split('T')[0],
          price: 90,
          socialCount: 200,
        },
        {
          date: new Date(today.setDate(today.getDate() - 2))
            .toISOString()
            .split('T')[0],
          price: 80,
          socialCount: 300,
        },
        {
          date: new Date(today.setDate(today.getDate() - 3))
            .toISOString()
            .split('T')[0],
          price: 70,
          socialCount: 400,
        },
        {
          date: new Date(today.setDate(today.getDate() - 4))
            .toISOString()
            .split('T')[0],
          price: 60,
          socialCount: 500,
        },
        {
          date: new Date(today.setDate(today.getDate() - 5))
            .toISOString()
            .split('T')[0],
          price: 50,
          socialCount: 600,
        },
        {
          date: new Date(today.setDate(today.getDate() - 6))
            .toISOString()
            .split('T')[0],
          price: 40,
          socialCount: 700,
        },
        {
          date: new Date(today.setDate(today.getDate() - 7))
            .toISOString()
            .split('T')[0],
          price: 30,
          socialCount: 800,
        },
        {
          date: new Date(today.setDate(today.getDate() - 8))
            .toISOString()
            .split('T')[0],
          price: 20,
          socialCount: 900,
        },
        {
          date: new Date(today.setDate(today.getDate() - 9))
            .toISOString()
            .split('T')[0],
          price: 10,
          socialCount: 10,
        },
      ],
      GOOG: [
        {
          date: today.toISOString().split('T')[0],
          price: 1000,
          socialCount: 1000,
        },
        {
          date: new Date(today.setDate(today.getDate() - 1))
            .toISOString()
            .split('T')[0],
          price: 90,
          socialCount: 200,
        },
        {
          date: new Date(today.setDate(today.getDate() - 2))
            .toISOString()
            .split('T')[0],
          price: 80,
          socialCount: 300,
        },
        {
          date: new Date(today.setDate(today.getDate() - 3))
            .toISOString()
            .split('T')[0],
          price: 70,
          socialCount: 400,
        },
        {
          date: new Date(today.setDate(today.getDate() - 4))
            .toISOString()
            .split('T')[0],
          price: 60,
          socialCount: 500,
        },
        {
          date: new Date(today.setDate(today.getDate() - 5))
            .toISOString()
            .split('T')[0],
          price: 50,
          socialCount: 600,
        },
        {
          date: new Date(today.setDate(today.getDate() - 6))
            .toISOString()
            .split('T')[0],
          price: 40,
          socialCount: 700,
        },
        {
          date: new Date(today.setDate(today.getDate() - 7))
            .toISOString()
            .split('T')[0],
          price: 30,
          socialCount: 800,
        },
        {
          date: new Date(today.setDate(today.getDate() - 8))
            .toISOString()
            .split('T')[0],
          price: 20,
          socialCount: 900,
        },
        {
          date: new Date(today.setDate(today.getDate() - 9))
            .toISOString()
            .split('T')[0],
          price: 1000,
          socialCount: 1000,
        },
      ],
      MSFT: [
        {
          date: today.toISOString().split('T')[0],
          price: 1000,
          socialCount: 1000,
        },
        {
          date: new Date(today.setDate(today.getDate() - 1))
            .toISOString()
            .split('T')[0],
          price: 90,
          socialCount: 200,
        },
        {
          date: new Date(today.setDate(today.getDate() - 2))
            .toISOString()
            .split('T')[0],
          price: 80,
          socialCount: 300,
        },
        {
          date: new Date(today.setDate(today.getDate() - 3))
            .toISOString()
            .split('T')[0],
          price: 70,
          socialCount: 400,
        },
        {
          date: new Date(today.setDate(today.getDate() - 4))
            .toISOString()
            .split('T')[0],
          price: 60,
          socialCount: 500,
        },
        {
          date: new Date(today.setDate(today.getDate() - 5))
            .toISOString()
            .split('T')[0],
          price: 50,
          socialCount: 600,
        },
        {
          date: new Date(today.setDate(today.getDate() - 6))
            .toISOString()
            .split('T')[0],
          price: 40,
          socialCount: 700,
        },
        {
          date: new Date(today.setDate(today.getDate() - 7))
            .toISOString()
            .split('T')[0],
          price: 30,
          socialCount: 800,
        },
        {
          date: new Date(today.setDate(today.getDate() - 8))
            .toISOString()
            .split('T')[0],
          price: 20,
          socialCount: 900,
        },
        {
          date: new Date(today.setDate(today.getDate() - 9))
            .toISOString()
            .split('T')[0],
          price: 1000,
          socialCount: 1000,
        },
      ],
    },
  }
})

describe('get recommendation service', () => {
  it('should return a "sell" recommendation', async () => {
    // Arrange
    const stockSymbol = 'AAPL'
    const daysAmount = 10

    const expectedRecommendation = {
      action: 'sell',
    }

    // Act
    const { action } = await getRecommendation({ stockSymbol, daysAmount })

    // Assert
    expect(action).toEqual(expectedRecommendation.action)
  })

  it('should return a "buy" recommendation', async () => {
    // Arrange
    const stockSymbol = 'AMZN'
    const daysAmount = 10

    const expectedRecommendation = {
      action: 'buy',
    }

    // Act
    const { action } = await getRecommendation({
      stockSymbol,
      daysAmount,
    })

    // Assert
    expect(action).toEqual(expectedRecommendation.action)
  })

  it('should return a "hold" recommendation', async () => {
    // Arrange
    const stockSymbol = 'GOOG'
    const daysAmount = 10

    const expectedRecommendation = {
      action: 'hold',
    }

    // Act
    const { action } = await getRecommendation({
      stockSymbol,
      daysAmount,
    })

    // Assert
    expect(action).toEqual(expectedRecommendation.action)
  })
})
