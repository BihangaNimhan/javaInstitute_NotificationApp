import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "./Login";
import { Home } from "./Home";
import { Notification } from "./Notification";

const Stack = createNativeStackNavigator();

function App() {
  const ui = (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Notification"
          component={Notification}
          options={{ title: "Log In" }}
        />
        <Stack.Screen
          name="LogIn"
          component={Login}
          options={{ title: "Log In" }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Log In" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
  return ui;
}

export default App;
