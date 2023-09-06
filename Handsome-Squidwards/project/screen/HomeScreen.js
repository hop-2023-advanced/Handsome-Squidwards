import * as React from "react";
import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "@clerk/clerk-expo";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  ImageBackground,
  ScrollView,
  Animated,
  TouchableOpacity,
} from "react-native";
import { Button } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {Post} from "../components/Post"

export default function HomeScreen() {
  const { isLoaded, signOut } = useAuth();

  const TabButton = (props) => {
    const { item, onPress, accessibilityState } = props;
    const focused = accessibilityState.selected;
    useEffect(() => {
      if (focused) {
        viewRef.current.animate({
          0: { scale: 1 },
          1: { scale: 1.5 },
        });
      } else {
        viewRef.current.animate({ 0: { scale: 1.5 }, 1: { scale: 1 } });
      }
    }, [focused]);
  }

  return (
    // <SafeAreaView
    //   style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    // >
    //   {isLoaded ? (
    //     <Button
    //       mode="contained"
    //       onPress={() => {
    //         signOut();
    //       }}
    //       style={{ width: 150 }}
    //     >
    //       sign out
    //     </Button>
    //   ) : (
    //     ""
    //   )}
    // </SafeAreaView>
    <View
      style={{
        flex: 1,
        backgroundColor: "#F5EBE0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        paddingTop: 90,
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: "100%",
          backgroundColor: "#D5BDAF",
          height: 110,
          position: "absolute",
          alignItems: "center",
          justifyContent: "space-between",
          display: "flex",
          flexDirection: "row",
          padding: 30,
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>
          Good day, John Smith
        </Text>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="human-greeting-variant"
            size={24}
            color="white"
          />
        </TouchableOpacity>
        <View
          style={{
            width: 300,
            left: "12%",
            height: 40,
            backgroundColor: "#EDEDE9",
            borderRadius: 2000,
            position: "absolute",
            top: 90,
            shadowColor: "black",
            shadowOpacity: 0.2,
            shadowRadius: 3,
            shadowOffset: { width: -2, height: 4 },
            alignItems: "center",
            justifyContent: "space-evenly",
            zIndex: 1,
            display: "flex",
            flexDirection: "row",
          }}
        >
          <TextInput
            style={{ color: "black", width: "80%", height: "90%" }}
          ></TextInput>
          <TouchableOpacity>
            <FontAwesome
              name="search"
              size={24}
              color="#D5BDAF"
              style={{ paddingRight: 15, right: 0 }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView
        style={{
          backgroundColor: "#F5EBE0",
          width: "100%",
          zIndex: -1,
          paddingLeft: 20,
          paddingRight: 20,
        }}
      >
        <Post/>
      </ScrollView>
      <ImageBackground
        source={require("../assets/Footer3.png")}
        resizeMode="cover"
        style={{
          width: "100%",
          height: 80,
          position: "absolute",
          bottom: 0,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity
          style={{
            width: "40%",
            height: "100%",
            backgroundColor: "A27146",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AntDesign name="home" size={40} color='white'></AntDesign>
        </TouchableOpacity>
        <View
          style={{
            width: "40%",
            height: "100%",
            backgroundColor: "A27146",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity>
            <FontAwesome name="shopping-basket" size={35} color='white' />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            position: "absolute",
            width: 100,
            height: 100,
            borderRadius: 2000,
            left: "37.5%",
            bottom: 30,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              width: 70,
              height: 70,
              backgroundColor: "#D5BDAF",
              borderRadius: 2000,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "white", fontSize: 60, bottom: 3 }}>+</Text>
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}
