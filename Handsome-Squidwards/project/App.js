// import Profile from "./components/Profile";
// import "react-native-gesture-handler";
// import { createStackNavigator } from "@react-navigation/stack";
// import { NavigationContainer } from "@react-navigation/native";
// import EditProfile from "./components/EditProfile";
// import { PaperProvider } from "react-native-paper";
// import Password from "./components/Password";

// const Stack = createStackNavigator();
// import { NavigationContainer } from "@react-navigation/native";

// import { Post } from "./components/Post";

// import { createStackNavigator } from "@react-navigation/stack";

// import { Comments } from "./components/Comments";

// import { ClerkProvider, SignedIn, SignedOut, useAuth } from "@clerk/clerk-expo";

// import { PaperProvider } from "react-native-paper";

// import { useState } from "react";

// import SignInScreen from "./screen/SignInScreen";

// import SignUpScreen from "./screen/SignUpScreen";

// import Homescreen from "./screen/HomeScreen";

// export default function App() {
//   CLERK_PUBLISHABLE_KEY =
//     "pk_test_cmFwaWQtb3JjYS0zNi5jbGVyay5hY2NvdW50cy5kZXYk";

//   const [signed, setSigned] = useState(true);

//   return (
//     <PaperProvider>
//       <NavigationContainer>
//         <Stack.Navigator>
//           <Stack.Screen
//             name="Profile"
//             component={Profile}
//             options={{ title: "My profile" }}
//           />
//           <Stack.Screen
//             name="EditProfile"
//             component={EditProfile}
//             options={{ title: "Edit Profile" }}
//           />
//           <Stack.Screen
//             name="Password"
//             component={Password}
//             options={{ title: "Change Password" }}
//           />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </PaperProvider>
//   );
// }
//       <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY}>
//         <SignedIn>
//           <MyStack />
//         </SignedIn>

//         <SignedOut>
//           {/* {signed ? (

//             <SignInScreen pressed={() => setSigned(false)} />

//           ) : (

//             <SignUpScreen pressed={() => setSigned(true)} />

//           )} */}

//           <Homescreen />
//         </SignedOut>
//       </ClerkProvider>
//     </PaperProvider>
//   );
// }

// function MyStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Home" component={Homescreen} />

//       <Stack.Screen name="Post" component={Post} />

//       <Stack.Screen name="Comments" component={Comments} />
//     </Stack.Navigator>
//   );
// }
