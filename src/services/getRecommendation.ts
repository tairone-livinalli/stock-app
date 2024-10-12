export function getRecommendation(
  stockSymbol: string
): Promise<'buy' | 'hold' | 'sell'> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const random = Math.random()

      if (random < 0.33) {
        resolve('buy')
      } else if (random < 0.66) {
        resolve('hold')
      } else {
        resolve('sell')
      }
    }, 2000)
  })
}
