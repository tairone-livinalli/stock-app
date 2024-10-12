import styled from 'styled-components/native'

type Recommendation = {
  recommendation: 'buy' | 'sell' | 'hold'
}

export const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  padding: 52px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_800};
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.BRAND_LIGHT};
  font-size: ${({ theme }) => theme.FONT_SIZE.XXXL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  text-align: center;
`

export const RecommendationContainer = styled.View`
  margin-top: 32px;
  padding: 16px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
`

export const StockName = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`

export const Recommendation = styled.Text<Recommendation>`
  color: ${({ recommendation, theme }) =>
    recommendation === 'buy'
      ? theme.COLORS.BRAND_LIGHT
      : recommendation === 'sell'
        ? theme.COLORS.ERROR
        : theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`
