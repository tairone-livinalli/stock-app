import styled from 'styled-components/native'

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

export const RecommendationCard = styled.View`
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

export const RecommendationContainer = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
`

export const RecommendationText = styled.Text`
  padding: 8px;
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`
