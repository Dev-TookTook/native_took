import { useRouter } from "expo-router";
import { View, Text, Button } from "react-native";

export default function SettingsScreen() {
    const router = useRouter();
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontSize: 24, fontWeight: "bold" }} >Settings Screen</Text>
            <Button title="Go to Detail" onPress={() => router.push("/settings/details")} />
        </View>
    );
}
