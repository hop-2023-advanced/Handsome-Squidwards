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
import AddPost from "./components/AddPost"
import {SafeAreaView} from "react-native"
import Camera from "./components/Camera"
import Photos from "./components/Photos"

export default function App() {
  CLERK_PUBLISHABLE_KEY =
    "pk_test_cmFwaWQtb3JjYS0zNi5jbGVyay5hY2NvdW50cy5kZXYk";

  return (
    <SafeAreaView style={{flex:1}}>
      <PaperProvider>
      <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY}>
        <SignedIn>
          <MyStack />
        </SignedIn>
        {/* <CheckLogIn/> */}
        <MyStack/>
      </ClerkProvider>
    </PaperProvider>
    </SafeAreaView>
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
        <Stack.Screen name="Addpost" component={AddPost} /> 
        <Stack.Screen name="Camera" component={Camera} /> 
        <Stack.Screen name="Photos" component={Photos} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function CheckLogIn() {
  const [signed, setSigned] = useState(true);
  return(
    <SignedOut>
          {signed ? (

            <SignInScreen pressed={() => setSigned(false)} />

          ) : (

            <SignUpScreen pressed={() => setSigned(true)} />

          )}
          {/* <MyStack /> */}
        </SignedOut>
  );
}
