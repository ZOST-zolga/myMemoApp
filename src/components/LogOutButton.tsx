import {
    TouchableOpacity, Text,
    Alert, StyleSheet } from 'react-native'
import { signOut } from 'firebase/auth'
import { router } from 'expo-router'

import { auth } from '../config' // Adjust the import path as <necessary></necessary>

const handlePress = (): void => {
    signOut(auth)
        .then(() => {
            console.log('User signed out');
            router.replace('/auth/log_in'); // Navigate to login screen after logout
        })
        .catch(() => {
            Alert.alert('ログアウトに失敗しました');
        })
    // Handle logout logic here
    console.log('LogOut button pressed');
    // You can add your logout logic here, such as clearing user data or navigating to a different screen
    // For example, if using Firebase:
    // signOut(auth).then(() => {
    //     console.log('User signed out');
    // }).catch((error) => {
    //     console.error('Sign out error:', error);
    // });
}

const LogOutButton = (): JSX.Element => {
    return (
        <TouchableOpacity onPress={handlePress}>
            <Text style={styles.text}>LogOut</Text>
        </TouchableOpacity>
    )
    }

    const styles = StyleSheet.create({
        text: {
            fontSize: 12,
            lineHeight: 24,
            color: 'rgba(255, 255, 255, 0.7)'
        }
    })
    export default LogOutButton
