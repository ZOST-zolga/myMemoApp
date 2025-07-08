import {View, Text, ScrollView, StyleSheet} from 'react-native'
import { FontAwesome6 } from '@expo/vector-icons'
import { router, useLocalSearchParams } from 'expo-router'
import { onSnapshot, doc } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import CircleButton from '../../components/CircleButton'
import { db, auth } from '../../config'
import { type Memo } from '../../../types/memo' // Adjust the import path as necessary

const handlePress = (id: string): void => {
    // Handle edit logic here
    // console.log('Edit button pressed');
    router.push({ pathname: '/memo/edit', params: {id}}); // Navigate to edit page
}

const Detail = (): JSX.Element => {
    const id = String(useLocalSearchParams().id)
    // console.log(id)
    const [memo, setMemo] = useState<Memo | null>(null)
    useEffect(() => {
        if (auth.currentUser === null ) { return }
        const ref = doc(db, `users/${auth.currentUser.uid}/memos`, id)
        const unsbscribe = onSnapshot(ref, (memoDoc) => {
            if (!memoDoc.exists()) {
                // Handle case where memo does not exist
                setMemo(null)
                return
            }
            const { bodyText, updatedAt } = memoDoc.data() as Memo
            setMemo({
                id: memoDoc.id,
                bodyText,
                updatedAt
            })
        })
        return unsbscribe
    },[])
    return (
        <View style={styles.container}>
            <View style={styles.memoHeader}>
                <Text style={styles.memoTitle} numberOfLines={1}>{memo?.bodyText}</Text>
                <Text style={styles.memoDate}>{memo?.updatedAt?.toDate().toLocaleString('ja-JP')}</Text>
            </View>
            <ScrollView style={styles.memoBody}>
                <Text style={styles.memoBodyText}>
                    {memo?.bodyText}
                </Text>
            </ScrollView>
            <CircleButton onPress={() => { handlePress(id) }} style={{ top: 60, bottom: 'auto' }}>
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
        paddingHorizontal: 27
    },
    memoBodyText: {
        paddingVertical: 32,
        fontSize: 16,
        lineHeight: 24,
        color: '#000000'
    }
})

export default Detail


