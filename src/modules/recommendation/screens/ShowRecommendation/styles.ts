import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  padding: 56px 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_800};
`

export const LoadingContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
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

export const Subtitle = styled.Text`
  margin: 24px 0;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  text-align: left;
`

export const StockDataCard = styled.View`
  margin-top: 8px;
  padding: 16px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
`

export const StockList = styled.ScrollView`
  flex: 1;
`

export const IconButton = styled.TouchableOpacity`
  margin: 0;
  padding: 8px;
  border-radius: 6px;

  justify-content: center;
  align-items: center;
`
