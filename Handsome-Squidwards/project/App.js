<<<<<<< HEAD
import { StatusBar } from 'expo-status-bar';
import { ScrollView, SafeAreaView, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Post } from './components/Post'
import { createStackNavigator } from '@react-navigation/stack';
import { Comments } from './components/Comments';

const Stack = createStackNavigator();
=======
import { ClerkProvider, SignedIn, SignedOut, useAuth } from "@clerk/clerk-expo";
import { PaperProvider } from "react-native-paper";
import { useState } from "react";
import SignInScreen from "./screen/SignInScreen";
import SignUpScreen from "./screen/SignUpScreen";
import Homescreen from "./screen/HomeScreen";
>>>>>>> 4fd5b2ab7437b5fc2ebd757037f041fab74cdf4c

export default function App() {
  CLERK_PUBLISHABLE_KEY =
    "pk_test_cmFwaWQtb3JjYS0zNi5jbGVyay5hY2NvdW50cy5kZXYk";
  const [signed, setSigned] = useState(true);
  return (
<<<<<<< HEAD
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}

function MyStack () {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Post' component={Post} />
      <Stack.Screen name="Comments" component={Comments} />
    </Stack.Navigator>
  );
}
=======
    <PaperProvider>
      <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY}>
        <SignedIn>
          <Homescreen />
        </SignedIn>
        <SignedOut>
          {/* {signed ? (
            <SignInScreen pressed={() => setSigned(false)} />
          ) : (
            <SignUpScreen pressed={() => setSigned(true)} />
          )} */}
          <Homescreen />
        </SignedOut>
      </ClerkProvider>
    </PaperProvider>
  );
}
>>>>>>> 4fd5b2ab7437b5fc2ebd757037f041fab74cdf4c
