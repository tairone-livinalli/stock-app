function generateRandomData() {
  return Array.from({ length: 30 }, (_, i) => {
    const date = new Date()
    date.setDate(date.getDate() - i)
    return {
      date: date.toISOString().split('T')[0],
      price: parseFloat((Math.random() * 1000).toFixed(2)),
      socialCount: Math.floor(Math.random() * 1000),
    }
  })
}

export const mockStockData = {
  AAPL: generateRandomData(),
  GOOG: generateRandomData(),
  MSFT: generateRandomData(),
  AMZN: generateRandomData(),
  TSLA: generateRandomData(),
}
