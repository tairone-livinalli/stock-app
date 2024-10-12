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
