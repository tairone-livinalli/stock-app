import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { Container, Title } from './styles'

export function ShowRecommendation({ route }: any) {
  const insets = useSafeAreaInsets()

  return (
    <Container style={{ paddingTop: insets.top }}>
      <Title>Recommendation</Title>
    </Container>
  )
}
