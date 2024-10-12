import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { ThemeProvider } from 'styled-components/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'
// import { AutocompleteDropdownContextProvider } from 'react-native-autocomplete-dropdown'

import theme from '@theme'
import { Loading } from '@components'
import { Routes } from '@routes'

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  })

  if (!fontsLoaded) {
    return <Loading />
  }

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        {/* <AutocompleteDropdownContextProvider> */}
        <StatusBar style="light" backgroundColor="transparent" translucent />
        <Routes />
        {/* </AutocompleteDropdownContextProvider> */}
      </SafeAreaProvider>
    </ThemeProvider>
  )
}
