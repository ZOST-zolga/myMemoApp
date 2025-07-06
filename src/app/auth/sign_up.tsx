import { View, Text, TextInput,
    TouchableOpacity, StyleSheet
} from 'react-native'

import { Link, router } from 'expo-router'

import Button from '../../components/Button'

const handlePress = (): void => {
    // Handle the press event here 会員登録
    console.log('Button pressed');
    router.push('/auth/log_in');
}

const signUp = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <View style={styles.inner}>
                <Text style={styles.title}>Sign Up</Text>
                <TextInput  style={styles.input} value='Email address' />
                <TextInput  style={styles.input} value='Password' />
                <Button label='Submit'  onPress={ handlePress }/>
                <Link href='/auth/log_in' asChild>
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
