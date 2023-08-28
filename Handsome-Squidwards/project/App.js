import Profile from "./components/Profile";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import EditProfile from "./components/EditProfile";
import { PaperProvider } from "react-native-paper";
import Password from "./components/Password";

const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{ title: "My profile" }}
          />
          <Stack.Screen
            name="EditProfile"
            component={EditProfile}
            options={{ title: "Edit Profile" }}
          />
          <Stack.Screen
            name="Password"
            component={Password}
            options={{ title: "Change Password" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
