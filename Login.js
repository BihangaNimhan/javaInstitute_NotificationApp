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
import { But } from "./But";
import { useEffect, useState } from "react";
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
export function Login({ navigation, route }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState(false);
  const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log("Authorization status:", authStatus);
    }
  };

  const ui = (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />
      <View  style={{
            position: "absolute",
            zIndex: 999999,
            width:"100%",
            height:"100%",
           
            justifyContent:"center",
            alignItems:"center"
          }}>
        <Image style={{
          height:100,
          aspectRatio:1
        }} source={require("./assets/loading.gif")}/>
      </View>

      <View
        style={{
          justifyContent: "center",
          display: "flex",
          width: "100%",
          height: "100%",
        }}
      >
        <View style={{ width: "100%", alignItems: "center", bottom: 50 }}>
          <Image style={styles.img} source={require("./assets/logo.png")} />
        </View>
        <View
          style={{ width: "100%", alignItems: "center", top: 32, zIndex: 99 }}
        >
          <Image
            style={{
              resizeMode: "contain",
            }}
            source={require("./assets/user.png")}
          />
        </View>
        <View style={styles.loginContainer}>
          <Text style={styles.mainText}>Login</Text>
          <TextInput
            value={userName}
            onChangeText={(val) => {
              setUserName(val);
            }}
            style={styles.textInput}
            inputMode="text"
            placeholder="User Name"
          />
          <TextInput
            onChangeText={(val) => {
              setPassword(val);
            }}
            value={password}
            secureTextEntry={true}
            style={styles.textInput}
            placeholder="Password"
          />
          <But
            disabled={disabled}
            color="white"
            onPress={() => {
              if (requestUserPermission()) {
                messaging()
                  .getToken()
                  .then((token) => {
                    const user = {};

                    user.username = userName;
                    user.password = password;
                    user.token = token;
                    console.log(user);
                    console.log("getting data.....");
                    setDisabled(true);
                    fetch("https://mobile.javainstitute.org/LoginStudnet", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                      },
                      body:
                        "username=" +
                        user.username +
                        "&password=" +
                        password +
                        "&fcmToken=" +
                        user.getToken,
                    })
                      .then((resp) => {
                        return resp.json();
                      })
                      .then((json) => {
                        console.log(json);
                        console.log("finished.....");
                        setDisabled(false);
                        if (json.status == 200) {
                          setUserName("");
                          setPassword("");
                          json.fcm = token;
                          navigation.navigate("Home", json);
                        } else {
                          Alert.alert("User Not Found", "Invalid User Details");
                        }
                      });
                  });
              }
            }}
            backgroundColor="#558ce5"
            name="Log In"
          />
        </View>
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
    resizeMode: "contain",
  },
  loginContainer: {
    backgroundColor: "white",
    marginLeft: 50,
    marginRight: 50,
    padding: 40,
    justifyContent: "center",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 10,
  },
  textInput: {
    borderRadius: 10,
    backgroundColor: "white",
    paddingLeft: 10,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 10,
    marginBottom: 20,
    width: "100%",
  },
  mainText: {
    textAlign: "center",
    fontSize: 40,
    margin: 50,
  },
});
