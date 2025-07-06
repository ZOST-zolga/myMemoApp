import {View, Text, ScrollView, StyleSheet} from 'react-native'
import { FontAwesome6 } from '@expo/vector-icons'
import { router } from 'expo-router'

import CircleButton from '../../components/CircleButton'

const handlePress = (): void => {
    // Handle edit logic here
    console.log('Edit button pressed');
    router.push('/memo/edit'); // Navigate to edit page
}

const Detail = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <View style={styles.memoHeader}>
                <Text style={styles.memoTitle}>買い物リスト</Text>
                <Text style={styles.memoDate}>2025年7月5日 10:00</Text>
            </View>
            <ScrollView style={styles.memoBody}>
                <Text style={styles.memoBodyText}>
                    買い物リスト
                    牛乳、卵、パン、洗剤、シャンプー、ボディーソープ、石鹸、折り紙、アルミホイル、お菓子。
                    ここからサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト
                </Text>
            </ScrollView>
            <CircleButton onPress={handlePress} style={{ top: 60, bottom: 'auto' }}>
                <FontAwesome6 name='pencil' size={40} color='#ffffff' />
            </CircleButton>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    memoHeader: {
        backgroundColor: '#467fd3',
        height: 96,
        justifyContent: 'center',
        paddingVertical: 24,
        paddingHorizontal: 19
    },
    memoTitle: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold',
        lineHeight: 32
    },
    memoDate: {
        color: '#ffffff',
        fontSize: 12,
        lineHeight: 16
    },
    memoBody: {
        paddingVertical: 32,
        paddingHorizontal: 27
    },
    memoBodyText: {
        fontSize: 16,
        lineHeight: 24,
        color: '#000000'
    }
})

export default Detail


