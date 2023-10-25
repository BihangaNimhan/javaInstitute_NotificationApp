import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
} from "react-native";
import { useFonts } from "expo-font";

export function Comming_soon({navigation}) {
  const [fontsLoaded, error] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
  });
  const ui = (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />
      <View style={styles.top_content}>
        <Text style={styles.top_content_text}>Will be updated soon !</Text>
      </View>
      <View style={styles.mid_content}>
        <Image
          style={styles.comming_soon_img}
          source={require("./assets/comming_soon.gif")}
        />
      </View>
      <View style={styles.bottom_content}>
        <Pressable onPress={()=>navigation.navigate("LogIn")}>
          <View style={styles.custom_btn}>
            <Text style={{ color: "#585990", fontFamily: "Poppins-Bold",fontSize:18 }}>
              Go Back
            </Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
  return ui;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ECECF5",
  },
  top_content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  top_content_text: {
    fontSize: 30,
    color: "#585990",
    fontFamily: "Poppins-Bold",
  },
  mid_content: {
    flex: 2,
    justifyContent: "center",
  },
  comming_soon_img: {
    width: 450,
    height: 350,
  },
  bottom_content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  custom_btn: {
    width: 150,
    height: 50,
    backgroundColor: "#FFBE00",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
});
