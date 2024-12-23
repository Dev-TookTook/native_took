import { Tabs } from "expo-router";
import "../../global.css";

export default function RootLayout() {
    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarStyle: {
                paddingBottom: 0,
                height: 40,
            },
        }}>
            <Tabs.Screen name="index" />
            <Tabs.Screen name="all" />
        </Tabs>
    );
}

