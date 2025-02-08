import { StyleSheet, Text, View } from "react-native";

export const TasksScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Tasks</Text>
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
