import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import AlataRegular from "./assets/fonts/Alata-Regular.ttf";
import { useEffect } from "react";
import * as Notifications from "expo-notifications";
import * as Device from "expo-device";
import { Platform } from "react-native";

import { Home } from "./pages/Home/Home";
import { Forecast } from "./pages/Forecast/Forecast";

const Stack = createNativeStackNavigator();

const navTheme = {
    colors: {
        background: "transparent",
    },
};

export default function App() {
    const [isFontLoaded] = useFonts({
        AlataRegular: AlataRegular,
    });

    async function subscribeToNotifications() {
        if (Device.isDevice) {
            const { status: existingStatus } =
                await Notifications.getPermissionsAsync();
            let finalStatus = existingStatus;

            if (existingStatus !== "granted") {
                const { status } =
                    await Notifications.requestPermissionsAsync();
                finalStatus = status;
            }

            if (finalStatus !== "granted") {
                alert("Failed to get push token for push notification!");
                return;
            }
            const token = (
                await Notifications.getExpoPushTokenAsync({
                    projectId: "6004f235-9075-4b00-8273-995e30f52022",
                })
            ).data;

            // Envoi du token a notre serveur
        } else {
            alert("Must use physical device for Push Notifications");
        }

        if (Platform.OS === "android") {
            Notifications.setNotificationChannelAsync("default", {
                name: "default",
                importance: Notifications.AndroidImportance.MAX,
                vibrationPattern: [0, 250, 250, 250],
                lightColor: "#FF231F7C",
            });
        }
    }

    useEffect(() => {
        Notifications.addNotificationResponseReceivedListener((response) => {
            console.log("data", response.notification.request.content.data);
        });
        subscribeToNotifications();
    }, []);

    return (
        <NavigationContainer theme={navTheme}>
            {isFontLoaded ? (
                <Stack.Navigator
                    screenOptions={{ headerShown: false, animation: "fade" }}
                    initialRouteName="Home"
                >
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Forecast" component={Forecast} />
                </Stack.Navigator>
            ) : null}
        </NavigationContainer>
    );
}
