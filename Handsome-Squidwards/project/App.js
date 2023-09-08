import { NavigationContainer } from "@react-navigation/native";
import { Post } from "./components/Post";
import { createStackNavigator } from "@react-navigation/stack";
import { Comments } from "./components/Comments";
import Homescreen from "./screen/HomeScreen";
import Profile from "./components/Profile";
import EditProfile from "./components/EditProfile";
import Password from "./components/Password"
const Stack = createStackNavigator();
import { ClerkProvider, SignedIn, SignedOut, useAuth } from "@clerk/clerk-expo";
import { PaperProvider } from "react-native-paper";
import { useState } from "react";
import SignInScreen from "./screen/SignInScreen";
import SignUpScreen from "./screen/SignUpScreen";

export default function App() {
  CLERK_PUBLISHABLE_KEY =
    "pk_test_cmFwaWQtb3JjYS0zNi5jbGVyay5hY2NvdW50cy5kZXYk";

  const [signed, setSigned] = useState(true);

  return (
    <PaperProvider>
      <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY}>
        <SignedIn>
          <MyStack />
        </SignedIn>

        <SignedOut>
          {signed ? (

            <SignInScreen pressed={() => setSigned(false)} />

          ) : (

            <SignUpScreen pressed={() => setSigned(true)} />

          )}
        </SignedOut>
      </ClerkProvider>
    </PaperProvider>
  );
}

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={Homescreen} /> 
        <Stack.Screen name="Post" component={Post} />
        <Stack.Screen name="Comments" component={Comments} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="Password" component={Password} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
