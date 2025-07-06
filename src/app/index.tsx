import { View, Text, StyleSheet } from 'react-native'

const Index = (): JSX.Element => {
    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <View style={styles.headerInner}>
                    <Text style={styles.headerTitle}>Memo App</Text>
                    <Text style={styles.headerRight}>ログアウト</Text>
                </View>
            </View>

            <View>

                <View style={styles.memoListItem}>
                    <View>
                        <Text style={styles.memoListItemTitle}>買い物リスト</Text>
                        <Text style={styles.memoListItemDate}>2025年7月6日 10:00</Text>
                    </View>
                    <View>
                        <Text>X</Text>
                    </View>
                </View>

                <View style={styles.memoListItem}>
                    <View>
                        <Text style={styles.memoListItemTitle}>買い物リスト</Text>
                        <Text style={styles.memoListItemDate}>2025年7月6日 10:00</Text>
                    </View>
                    <View>
                        <Text>X</Text>
                    </View>
                </View>

                <View style={styles.memoListItem}>
                    <View>
                        <Text style={styles.memoListItemTitle}>買い物リスト</Text>
                        <Text style={styles.memoListItemDate}>2025年7月6日 10:00</Text>
                    </View>
                    <View>
                        <Text>X</Text>
                    </View>
                </View>

            </View>
            <View style={styles.circleButton}>
                <Text style={styles.circleButtonLabel}>＋</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    header: {
        backgroundColor: '#467fd3',
        height: 104,
        justifyContent: 'flex-end'
    },
    headerInner:{
        alignItems: 'center',
    },
    headerRight: {
        position: 'absolute',
        right: 16,
        bottom: 16,
        color: 'rgba(255, 255, 255, 0.7)',
        fontSize: 16
    },
    headerTitle: {
        color: '#ffffff',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 8,
        lineHeight: 32
    },
    memoListItem: {
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 16,
        paddingHorizontal: 19,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0, 0, 0, 0.15)',
    },
    memoListItemTitle: {
        fontSize: 16,
        lineHeight: 32,
    },
    memoListItemDate: {
        fontSize: 12,
        color: '#848484',
        lineHeight: 16
    },
    circleButton: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: '#467fd3',
        position: 'absolute',
        right: 40,
        bottom: 40,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.25,
        shadowRadius: 8,
        elevation: 8 // For Android
    },
    circleButtonLabel: {
        color: '#ffffff',
        fontSize: 40,
        lineHeight: 48,
    },
})
export default Index

