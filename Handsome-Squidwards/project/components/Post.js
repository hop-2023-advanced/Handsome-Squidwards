import "react-native-gesture-handler";
import React, { useState } from "react";
import {
  Modal,
  Text,
  Image,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

export const Post = ({ navigation }) => {
  const [modaVisible, setModaVisible] = useState(false);

  const Opt = () => {
    setModaVisible(!modaVisible);
  };

  return (
    <View
      style={{
        marginTop: 50,
        borderWidth: 0.5,
        borderColor: "#282828",
        backgroundColor: "#EDEDE9",
      }}
    >
      <View
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              style={{
                height: 35,
                width: 35,
                borderRadius: 20,
                margin: 8,
                borderColor: "#464646",
                borderWidth: 0.5,
              }}
              source={{
                uri: "https://c4.wallpaperflare.com/wallpaper/469/411/650/ryan-gosling-blade-runner-2049-depressing-movie-scenes-hd-wallpaper-preview.jpg",
              }}
            />
            <View>
              <Text style={{ fontSize: 14, fontWeight: "600", color: "black" }}>
                ryan_gosling
              </Text>
            </View>
          </View>
          <TouchableOpacity style={{ marginRight: 14 }} onPress={() => Opt()}>
            <Ionicons name="ellipsis-horizontal" size={22} color="black" />
          </TouchableOpacity>
          <Modal
            transparent={true}
            animationType="slide"
            visible={modaVisible}
            onRequestClose={() => {
              setModaVisible(!modaVisible);
            }}
          >

            <View style={{ position: "absolute", bottom: 0, width: "100%" }}>
              <View
                style={{
                  backgroundColor: "white",
                  borderTopLeftRadius: 30,
                  borderTopRightRadius: 30,
                  height: "100%",
                  width: "100%",
                  alignItems: "center",
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 4,
                  bottom: 0,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    height:50,
                    width:"100%",
                  }}
                >
                  <Text
                    style={{ fontSize: 20, fontWeight: "bold", color: "black" }}
                  >
                    Options
                  </Text>
                  <TouchableOpacity
                    style={{ position:"absolute", right:20, }}
                    onPress={() => Opt()}
                  >
                    <Text
                      style={{
                        color: "white",
                        fontWeight: "bold",
                        textAlign: "center",
                        fontSize: 25,
                        color: "black",
                        padding: 5,
                      }}
                    >
                      x
                    </Text>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    height: 1,
                    width: 414,
                    borderRadius: 1,
                    backgroundColor: "#464646",
                    marginTop: 10,
                  }}
                ></View>
                <TouchableOpacity
                  style={{
                    marginTop: 35,
                    borderColor: "#464646",
                    borderWidth: 1,
                    borderRadius: 25,
                    padding: 20,
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Feather name="edit" size={24} color="black" />
                  <Text
                    style={{ fontWeight: "bold", fontSize: 21, marginLeft: 10 }}
                  >
                    Edit Post
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    marginTop: 20,
                    borderColor: "#464646",
                    borderWidth: 1,
                    borderRadius: 25,
                    padding: 20,
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <MaterialIcons name="delete-outline" size={28} color="red" />
                  <Text
                    style={{
                      fontWeight: "bold",
                      color: "red",
                      fontSize: 21,
                      marginLeft: 5,
                    }}
                  >
                    Delete Post
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
        <View style={{ borderTopWidth: 0.5, borderColor: '#282828', backgroundColor: "white" }}>
          <Image
            style={{ height: "110%", width: "100%" }}
            source={{ uri: 'https://img.ifunny.co/images/ef18d47b9768055fd990577526c09a9b2d1e965400b5ae239c4e973ab30c5cb5_1.webp' }}
          />
        </View>
        <View
          style={{
            width: "100%",
            height: "18%",
            backgroundColor: "#D6CCC2",
            padding: 8,
            borderWidth: 0.5,
            borderColor: "#282828",
            backgroundColor: "#EDEDE9",
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("Comments")}
            style={{ alignItems: "center", flexDirection: "row", marginTop: 4 }}
          >
            <FontAwesome5
              style={{ marginLeft: 14 }}
              name="comment"
              size={26}
              color="black"
            />
            <Text
              style={{
                fontSize: 14,
                fontWeight: "600",
                color: "black",
                marginLeft: 6,
              }}
            >
              Comments
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
