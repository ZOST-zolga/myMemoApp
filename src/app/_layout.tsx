import { Slot } from 'expo-router'
import { View } from 'react-native'

const Layout = (): JSX.Element => {
  return (
    <View style={{ flex: 1 }}>
      <Slot />
    </View>
  );
};

export default Layout
