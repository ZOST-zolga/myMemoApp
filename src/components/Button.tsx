import { Text, TouchableOpacity, StyleSheet, Alert } from 'react-native'

interface Props {
    Label: string
    onPress?: () => void
}

const Button = (props: Props): JSX.Element => {
    const  { Label, onPress } = props
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.buttonLabel}>Submit</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#467fd3',
        borderRadius: 4,
        alignSelf: 'flex-start',
        marginBottom: 24
    },
    buttonLabel: {
        color: '#fff',
        fontSize: 16,
        lineHeight: 32,
        fontWeight: 'bold',
        paddingVertical: 8,
        paddingHorizontal: 24
    }
})

export default Button
