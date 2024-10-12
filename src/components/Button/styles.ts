import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  flex: 1;
  min-height: 56px;
  max-height: 56px;
  border-radius: 6px;

  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BRAND_MID};
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`

export const LoadingIndicator = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.COLORS.WHITE,
  size: 'small',
}))``
