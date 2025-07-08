import { View, Text, TextInput, Alert,
    TouchableOpacity, StyleSheet
} from 'react-native'

import { Link, router } from 'expo-router'
import { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'

import { auth } from '../../config'
import Button from '../../components/Button'

const handlePress = (email:string, password:string): void => {
    // Handle the press event here 会員登録
    console.log(email, password);
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log('userCredential.user.uid')
            router.replace('/memo/list')
        })
        .catch((error) => {
            const { code, message } = error
            console.log(code, message)
            Alert.alert(message)
        });

    }
const signUp = (): JSX.Element => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <View style={styles.container}>
            <View style={styles.inner}>
                <Text style={styles.title}>Sign Up</Text>
                <TextInput
                style={styles.input}
                value={email}
                onChangeText={(text) => { setEmail(text) }}
                autoCapitalize='none'
                keyboardType='email-address'
                placeholder='Email Address'
                textContentType='emailAddress'
                />
                <TextInput
                style={styles.input}
                value={password}
                onChangeText={(text) => { setPassword(text) }}
                    autoCapitalize='none'
                    secureTextEntry
                    placeholder='Password'
                    textContentType='password'
                />
                <Button label='Submit'  onPress={() =>{handlePress(email, password)} }/>
                <Link href='/auth/log_in' asChild replace>
                    <TouchableOpacity style={styles.footer}>
                        <Text style={styles.footerText}>Already registered?</Text>
                        <Text style={styles.footerLink}>Log in</Text>
                    </TouchableOpacity>
                </Link>
            </View>
        </View>
    )
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f4f8'
    },
    inner:{
        paddingVertical: 24,
        paddingHorizontal: 27
    },
    title: {
        fontSize: 24,
        lineHeight: 32,
        fontWeight: 'bold',
        marginBottom: 24
    },
    input: {
        backgroundColor: '#fff',
        borderWidth: 1,
        padding: 8,
        borderColor: '#ddd',
        borderRadius: 5,
        marginBottom: 15,
        height: 48,
        fontSize: 16
    },
    footer: {
        flexDirection: 'row'
    },
    footerText: {
        fontSize: 14,
        lineHeight: 24,
        marginRight: 8,
        color: '#000'
    },
    footerLink: {
        fontSize: 14,
        lineHeight: 24,
        color: '#467fd3'
    }
})

export default signUp
