import {
    Text, StyleSheet, TouchableOpacity,
    type ViewStyle
} from 'react-native'

interface Props{
    children: JSX.Element
    style?: ViewStyle
    onPress?: () => void
}

const CircleButton = (props: Props): JSX.Element => {
    const { children, style, onPress } = props
    return (
        <TouchableOpacity onPress={onPress} style={[styles.circleButton, style]}>
            <Text style={styles.circleButtonLabel}>{children}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    circleButton: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: '#467fd3',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 40,
        bottom: 40,
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowOffset: {
            width: 0,
            height: 8
        },
        shadowRadius: 8,
        elevation: 8 // For Android
    },
    circleButtonLabel: {
        color: '#ffffff',
        fontSize: 40,
        lineHeight: 48
    }
})
export default CircleButton

