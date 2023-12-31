import * as React from "react";
import { useEffect, useState } from "react";
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
import { Post } from "../components/Post"
import { Entypo } from '@expo/vector-icons';
import axios from "axios"

const baseUrl = "https://instagram-backend-l0tjbr2wf-444erdem.vercel.app/api/";

export default function HomeScreen({ navigation }) {
  const [data, setData] = useState([])

  useEffect(() => {
   loadPosts()
  }, [])

  function loadPosts() {
    axios 
    .get(baseUrl + "posts")
    .then((res) => {
      setData(res.data.documents);
      console.log(res.data.documents);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#EDEDE9",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        paddingTop: 80,
        alignItems: "center",
        paddingBottom: 80,
      }}
    >
      <View
        style={{
          width: "100%",
          backgroundColor: "#D5BDAF",
          height: 80,
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
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <MaterialCommunityIcons
            name="human-greeting-variant"
            size={24}
            color="white"
          />
        </TouchableOpacity>
        <View
          style={{
            width: "90%",
            left: "12%",
            height: 40,
            backgroundColor: "#EDEDE9",
            borderRadius: 2000,
            position: "absolute",
            top: 60,
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
          // paddingLeft: 20,
          // paddingRight: 20,
          paddingTop:20,
        }}
      >
        <View>
        {
          data.map((post) => {
            return <Post post={post} onAfterDelete={loadPosts}/>;
          })}
        </View>
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
          onPress={() => navigation.navigate("Home")}
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
          <TouchableOpacity onPress={() => navigation.navigate("Post")}>
          <Entypo name="open-book" size={35} color="white" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Addpost")}
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
