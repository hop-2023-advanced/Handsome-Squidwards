import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Profile from "./components/Profile";

export default function App() {
  return (
    <SafeAreaView>
      <View>
        <Profile></Profile>
      </View>
    </SafeAreaView>
  );
}
