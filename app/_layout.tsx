import { Tabs } from "expo-router";
import "../global.css";

export default function RootLayout() {
    return (
        <Tabs screenOptions={{ headerShown: false }}>
            <Tabs.Screen name="settings" />
        </Tabs>
    );
}
