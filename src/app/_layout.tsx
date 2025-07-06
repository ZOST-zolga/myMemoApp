import { Stack } from 'expo-router'
import { View } from 'react-native'

const Layout = (): JSX.Element => {
  return <Stack screenOptions={{
    headerStyle:{
      backgroundColor: '#467fd0'
    },
    headerTintColor: '#ffffff',
    headerTitle: 'Memo App',
    headerBackTitle: 'Back',
    headerTitleStyle:{
      fontWeight: 'bold',
      fontSize: 22
    }
  }} />
}
export default Layout
