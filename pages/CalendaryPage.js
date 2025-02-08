import { StyleSheet, Text, View } from "react-native";

export const CalendaryScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Calendary</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
