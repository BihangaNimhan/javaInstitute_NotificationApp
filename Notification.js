import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";

export function Notification({}) {
  const [fontsLoaded, error] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
  });
  const ui = (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={false} />

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

      <ScrollView style={styles.scrollView}>
        <View style={styles.box1}>
          <Text style={styles.main_title}>Notifications</Text>
        </View>
        <View style={styles.notification_box_container}>
          <View style={styles.notification_box}>
            <View style={styles.notification_box_left}>
              <Text style={styles.notification_year}>2023 December</Text>
              <Text style={styles.notification_date}>20</Text>
              <Text style={styles.notification_time}>15 : 30 a.m</Text>
            </View>
            <View style={styles.notification_box_right}>
              <Text style={styles.notification_title}>
                Lorem ipsum dolor sit
              </Text>
              <Text style={styles.notification_description}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget...
              </Text>
            </View>
          </View>
          <View style={styles.notification_box}>
            <View style={styles.notification_box_left}>
              <Text style={styles.notification_year}>2023 December</Text>
              <Text style={styles.notification_date}>20</Text>
              <Text style={styles.notification_time}>15 : 30 a.m</Text>
            </View>
            <View style={styles.notification_box_right}>
              <Text style={styles.notification_title}>
                Lorem ipsum dolor sit
              </Text>
              <Text style={styles.notification_description}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget...
              </Text>
            </View>
          </View>
          <View style={styles.notification_box}>
            <View style={styles.notification_box_left}>
              <Text style={styles.notification_year}>2023 December</Text>
              <Text style={styles.notification_date}>20</Text>
              <Text style={styles.notification_time}>15 : 30 a.m</Text>
            </View>
            <View style={styles.notification_box_right}>
              <Text style={styles.notification_title}>
                Lorem ipsum dolor sit
              </Text>
              <Text style={styles.notification_description}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget...
              </Text>
            </View>
          </View>
          <View style={styles.notification_box}>
            <View style={styles.notification_box_left}>
              <Text style={styles.notification_year}>2023 December</Text>
              <Text style={styles.notification_date}>20</Text>
              <Text style={styles.notification_time}>15 : 30 a.m</Text>
            </View>
            <View style={styles.notification_box_right}>
              <Text style={styles.notification_title}>
                Lorem ipsum dolor sit
              </Text>
              <Text style={styles.notification_description}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget...
              </Text>
            </View>
          </View>
          <View style={styles.notification_box}>
            <View style={styles.notification_box_left}>
              <Text style={styles.notification_year}>2023 December</Text>
              <Text style={styles.notification_date}>20</Text>
              <Text style={styles.notification_time}>15 : 30 a.m</Text>
            </View>
            <View style={styles.notification_box_right}>
              <Text style={styles.notification_title}>
                Lorem ipsum dolor sit
              </Text>
              <Text style={styles.notification_description}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget...
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.downArrowContainer}>
        <Pressable>
          <Image
            style={styles.down_arrow}
            source={require("./assets/down_arrow.png")}
          />
        </Pressable>
      </View>
    </SafeAreaView>
  );
  return ui;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  scrollView: {},
  downArrowContainer: {
    position: "absolute",
    bottom: 10, // Adjust the distance from the bottom as needed
    left: "50%",
    transform: [{ translateX: -15 }], // Center the arrow horizontally
  },
  img: {
    width: 80,
    height: 25,
    marginTop: "15%",
    position: "absolute",
    resizeMode: "contain",
  },
  box1: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#ECECF5",
  },
  main_title: {
    fontFamily: "Poppins-Bold",
    fontSize: 25,
    margin: 30,
    color: "#585990",
  },
  notification_box_container: {
    flex: 5,
    width: "100%",
    height: "100%",
    backgroundColor: "#ECECF5",
    alignItems: "center",
  },
  notification_box: {
    flexDirection: "row",
    width: "90%",
    height: "30",
    backgroundColor: "#F8F7FE",
    margin: 20,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    elevation: 5,
  },
  notification_box_left: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#FFBE00",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  notification_box_right: {
    flex: 2,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "#F8F7FE",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  notification_title: {
    fontFamily: "Poppins-Bold",
    fontSize: 16,
    marginTop: 10,
    marginLeft: 10,
    color: "#585990",
  },
  notification_description: {
    fontFamily: "Poppins-Medium",
    fontSize: 12,
    marginLeft: 10,
    color: "#ABABD3",
  },
  notification_year: {
    fontFamily: "Poppins-Bold",
    fontSize: 13,
    color: "#F8F7FE",
    marginTop: 10,
  },
  notification_date: {
    fontFamily: "Poppins-Bold",
    fontSize: 30,
    color: "#F8F7FE",
    marginTop: 5,
  },
  notification_time: {
    fontFamily: "Poppins-Bold",
    fontSize: 13,
    color: "#585990",
    marginTop: 0,
  },
  down_arrow: {
    width: 30,
    height: 30,
    resizeMode: "contain",
    elevation: 5,
  },
});
