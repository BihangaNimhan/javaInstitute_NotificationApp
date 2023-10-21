import { useEffect } from "react";
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  TextInput,
  Alert,
  Image,
} from "react-native";
import messaging from "@react-native-firebase/messaging";
import * as Notifications from "expo-notifications";
import Constants from "expo-constants";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});
export function Home({ navigation, route }) {
  const user = route.params;
  useEffect(() => {
    messaging()
      .getInitialNotification()
      .then(async (remoteMessage) => {
        if (remoteMessage) {
          console.log(
            "Notification caused app to open from quit state:",
            remoteMessage.notification
          );
        }
      });

    messaging().onNotificationOpenedApp(async (remoteMessage) => {
      console.log(
        "Notification caused app to open from background state:",
        remoteMessage.notification
      );
    });

    messaging().setBackgroundMessageHandler(async (remoteMessage) => {
      console.log("Message handled in the background!", remoteMessage);
    });

    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      console.log(remoteMessage)
      Alert.alert(
        remoteMessage.notification.title,
        remoteMessage.notification.body
      );
    });

    return unsubscribe;
  }, []);
  const ui = (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />

      <Image style={styles.img} source={require("./assets/logo.png")} />
      <View
        style={{
          justifyContent: "center",
          display: "flex",
          width: "100%",
          height: "100%",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 30,
            margin: 30,
          }}
        >
          Welcome To JavaInstitute
        </Text>
        <Text>{user.name}</Text>
        <Text>{user.email}</Text>
      </View>
    </SafeAreaView>
  );
  return ui;
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    alignItems: "center",
    display: "flex",
    flex: 1,
  },
  img: {
    width: 300,
    height: 100,
    marginTop:"15%",
    position: "absolute",
    resizeMode: "contain",
  },
});
