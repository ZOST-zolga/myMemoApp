import {
    View, TextInput, StyleSheet
    } from 'react-native'
import CircleButton from '../../components/CircleButton'
import { Feather } from '@expo/vector-icons'
import { router } from 'expo-router'
import { collection, addDoc,Timestamp } from 'firebase/firestore'
import { db,auth } from '../../config' // Adjust the import path as necessary
import { useState } from 'react'
import KeyboardAvoidingView from '../../components/KeyboardAvoidingView'

const handlePress =  (bodyText: string): void => {
    if(auth.currentUser === null) { return }
    const ref = collection(db, `users/${auth.currentUser.uid}/memos`)
    addDoc(ref, {
        bodyText,
        updatedAt: Timestamp.fromDate(new Date())
    })
    .then((docRef) => {
        console.log('Memo saved successfully', docRef.id)
        router.back() // Navigate back after saving
    })
    .catch((error) => {
        console.log(error)
    })
}

const Create = (): JSX.Element => {
    const [bodyText, setBodyText] = useState('')
    return (
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    multiline
                    style={styles.input}
                    value={bodyText}
                    onChangeText={(text) => { setBodyText(text) }}
                    autoFocus
                />
            </View>
            <CircleButton onPress={() => {handlePress(bodyText)}}>
                <Feather name='check' size={40} color='#ffffff'/>
            </CircleButton>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inputContainer: {
        flex: 1,
        paddingVertical: 32,
        paddingHorizontal: 27,
    },
    input: {
        flex: 1,
        textAlignVertical: 'top',
        fontSize: 16,
        lineHeight: 24,
    }
})
export default Create
