import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { ThemeProvider } from 'styled-components/native'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

import theme from './src/theme'
import { Loading } from './src/components'

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  })

  if (fontsLoaded) {
    return (
      <>
        <StatusBar style="light" backgroundColor="transparent" translucent />
        <Loading />
      </>
    )
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" backgroundColor="transparent" translucent />
      <View style={styles.container}>
        <Text>Hello World!</Text>
        <StatusBar style="auto" />
      </View>
    </ThemeProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
