import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Image,
  Text,
} from "react-native";
import { useFonts } from "expo-font";

export function Detailed_view({navigation, route}) {
  const [fontsLoaded, error] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
  });
  const ui = (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />
      <View style={styles.header}>
        <View style={styles.left}>
          <Image
            style={styles.img}
            source={require("./assets/left_arrow.png")}
          />
        </View>
        <View style={styles.right}>
          <Image
            style={styles.img}
            source={require("./assets/notify_icon.png")}
          />
        </View>
      </View>
      <View style={styles.title_box}>
        <Text style={styles.main_title}>Lorem ipsum dolor sit</Text>
        <Text style={styles.sub_title}>15 December 2021 • 12.00 to 15.00</Text>
      </View>
      <View style={styles.content_box}>
        <Text style={styles.content}>
          Our website is currently undergoing a major transformation to bring
          you an extraordinary online experience. We're hard at work behind the
          scenes, laying the foundation for something truly spectacular.
        </Text>
      </View>
      <View style={styles.bottom_box}>
        <View>
          <Text style={styles.datetime_title}>Date</Text>
          <Text style={styles.datetime_text}>2023 / 10 / 20</Text>
        </View>
        <View>
          <Text style={styles.datetime_title}>Time</Text>
          <Text style={styles.datetime_text}>05 : 20 a.m</Text>
        </View>
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
  header: {
    flexDirection: "row",
    backgroundColor: "#ECECF5",
    height: 80,
  },
  left: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  right: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-end",
  },
  img: {
    width: 80,
    height: 25,
    marginTop: "15%",
    position: "absolute",
    resizeMode: "contain",
  },
  title_box: {
    flex: 1,
  },
  main_title: {
    fontFamily: "Poppins-Bold",
    fontSize: 22,
    color: "#585990",
    marginTop: 50,
    marginLeft: 30,
  },
  sub_title: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    color: "#585990",
    marginLeft: 30,
    fontStyle: "italic",
  },
  content_box: {
    flex: 2,
    backgroundColor: "white",
    borderRadius: 20,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 30,
  },
  content: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    color: "#585990",
    marginLeft: 30,
    marginRight: 30,
    marginTop: 30,
  },
  bottom_box: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#ECECF5",
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 30,
  },
  datetime_title: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    color: "#585990",
    marginLeft: 30,
    marginRight: 30,
    marginTop: 30,
  },
  datetime_text: {
    fontFamily: "Poppins-Bold",
    fontSize: 14,
    color: "#585990",
    marginLeft: 30,
    marginRight: 30,
  },
});
