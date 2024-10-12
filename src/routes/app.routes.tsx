import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '../screens'
import { ShowRecommendation } from '@modules'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="ShowRecommendation" component={ShowRecommendation} />
    </Navigator>
  )
}
