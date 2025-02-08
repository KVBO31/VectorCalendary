import { StyleSheet, Text, View } from "react-native";

export const RatingScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Rating</Text>
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
