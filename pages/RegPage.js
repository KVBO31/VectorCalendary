import { StyleSheet, Text, View } from "react-native";

export const RegScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Reg Page</Text>
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
