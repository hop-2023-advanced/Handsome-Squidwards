import "react-native-gesture-handler";
import React, { useState } from "react";
import { Text, Image, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

export default function Profile({ navigation }) {
  const [modaVisible, setModaVisible] = useState(false);

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
        <TouchableOpacity>
          <Text>Post</Text>
        </TouchableOpacity>
      </View>
      <View style={{}}></View>
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
