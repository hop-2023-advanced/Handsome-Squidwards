import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import { Text, Image, View, TouchableOpacity, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import axios from "axios";

export default function Profile({ navigation }) {
  const [text, setText] = useState("");
  const [modaVisible, setModaVisible] = useState(false);

  const baseUrl = "https://instagram-backend-delta.vercel.app/api/";

  function CreatePost() {
    axios
      .post(baseUrl + "posts", {
        text: text,
        image: null,
        uploadTime: Date.now(),
        userId: "65043b8b405168d1f12c03f2"
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  // useEffect(() => {
  //   // axios
  //   //   .get("http://localhost:1111/url?userId=63ee0aceff6339af312db2ef")
  //   //   .then((res) => console.log(res))
  //   //   .catch((err) => {
  //   //     console.log(err);
  //   //   });

  //   axios
  //     .get(baseUrl + "url?userId=" + id)
  //     .then((res) => {
  //       setData(res.data);
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "black", paddingBottom: 50 }}>
      <View
        style={{
          backgroundColor: "gray",
          height: 40,
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingLeft: 10,
          paddingRight: 10,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text>Go Back</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={CreatePost}>
          <Text>Post</Text>
        </TouchableOpacity>
      </View>
      <View style={{}}>
        <TextInput
          style={{
            color: "white",
            paddingHorizontal: 16,
            width: 280,
            height: 42,
            borderColor: "#464646",
            borderWidth: 1,
            borderRadius: 50,
          }}
          placeholder="Comment on this post"
          placeholderTextColor="grey"
          onChangeText={(e) => setText(e)}
          value={text}
        />
      </View>
      <View
        style={{
          backgroundColor: "gray",
          height: 50,
          width: "100%",
          position: "absolute",
          bottom: 0,
          flexDirection: "row",
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("Camera")}
          style={{
            width: "50%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AntDesign name="camerao" size={35} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Photos")}
          style={{
            width: "50%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AntDesign name="folderopen" size={35} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
