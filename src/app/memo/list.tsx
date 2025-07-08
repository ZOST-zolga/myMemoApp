import { View, Text, StyleSheet, FlatList } from 'react-native'
import Feather from '../../components/Icon'
import { useEffect, useState } from 'react'
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore'

import MemoListItem from '../../components/MemoListItem'
import CircleButton from '../../components/CircleButton'
import Icon from '../../components/Icon'
import { router, useNavigation } from 'expo-router'
import LogOutButton from '../../components/LogOutButton'
import { db, auth } from '../../config'
import {type Memo} from '../../../types/memo'// Adjust the import path as necessary

const handlePress = (): void => {
    // Handle the press event here
    console.log('Button pressed');
    router.push('/memo/create'); // Navigate to edit page
}

const List = (): JSX.Element => {
    const [memos, setMemos] = useState<Memo[]>([])
    const navigation = useNavigation()
    useEffect(() => {
        navigation.setOptions({
        headerRight: () => { return <LogOutButton /> }
    })
    }, [])
    useEffect(() => {
        if (auth.currentUser === null) { return }
        const ref = collection(db, `users/${auth.currentUser.uid}/memos`)
        const q = query(ref,orderBy('updatedAt', 'desc'))
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const remoteMemos: Memo[] = []
            snapshot.forEach((doc) => {
                // console.log('memo', doc.data())
                const { bodyText, updatedAt } = doc.data()
                remoteMemos.push({
                    id: doc.id,
                    bodyText,
                    updatedAt  // Convert Firestore Timestamp to JavaScript Date
            })
        })
            setMemos(remoteMemos)
        })
        // Cleanup function to unsubscribe from the snapshot listener
        return unsubscribe
    }, [])
    return (
        <View style={styles.container}>
            <FlatList
                data={memos}
                renderItem={({ item }) => <MemoListItem memo={item} />}
             />
            <CircleButton onPress={handlePress}>
                <Feather name='plus' size={40} color='#ffffff' />
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
export default List

