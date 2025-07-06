import {
    View, TextInput, StyleSheet, KeyboardAvoidingView
    } from 'react-native'
import CircleButton from '../../components/CircleButton'
import { Feather } from '@expo/vector-icons'
import { router } from 'expo-router'

const handlePress = (): void => {
    // Handle save logic here
    console.log('Save button pressed');
    router.back() // Navigate back after saving
}

const Create = (): JSX.Element => {
    return (
        <KeyboardAvoidingView behavior='height' style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput multiline style={styles.input} value=""/>
            </View>
            <CircleButton onPress={handlePress}>
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
