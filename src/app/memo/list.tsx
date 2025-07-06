import { View, Text, StyleSheet } from 'react-native'
import Feather from '../../components/Icon'
import { useEffect } from 'react'

import MemoListItem from '../../components/MemoListItem'
import CircleButton from '../../components/CircleButton'
import Icon from '../../components/Icon'
import { router, useNavigation } from 'expo-router'
import LogOutButton from '../../components/LogOutButton'

const hanclePress = (): void => {
    // Handle the press event here
    console.log('Button pressed');
    router.push('/memo/create'); // Navigate to edit page
}

const Index = (): JSX.Element => {
    const navigation = useNavigation()
    useEffect(() => {
        navigation.setOptions({
        headerRight: () => { return <LogOutButton /> }
    })
    }, [])
    return (
        <View style={styles.container}>
            <View>
                <MemoListItem />
                <MemoListItem />
                <MemoListItem />
            </View>
            <CircleButton onPress={hanclePress}>
                <Feather name='plus' size={40} color='#ffffff'/>
            </CircleButton>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    }
})
export default Index

