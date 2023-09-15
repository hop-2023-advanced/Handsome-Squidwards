import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import {
  Modal,
  Text,
  Image,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import dayjs from 'dayjs'
import axios from "axios"

import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

const baseUrl = "https://instagram-backend-l0tjbr2wf-444erdem.vercel.app/api/";

import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

export const Post = ({post, onAfterDelete}) => {
  const navigation = useNavigation();
  const [modaVisible, setModaVisible] = useState(false);
  const [imageWidth, setImageWidth] = useState();
  const [imageHeight, setImageHeight] = useState();

  const Opt = () => {
    setModaVisible(!modaVisible);
  };

  function imageSize() {
    if (post.image === null) {
      setImageHeight(0)
      setImageWidth(0)
    } else {
      const screenWidth = Dimensions.get('window').width;
      const screenHeight = Dimensions.get('window').height;
      Image.getSize(post.image, (width, height) => {
        setImageWidth(screenWidth)
        const ration = screenWidth / width
        setImageHeight(height * ration)
      });
    }
  }
  useEffect(() => {
    imageSize()
  });
  const deletePost = () => {
    axios
      .delete(baseUrl + "posts/" +  post._id)
      .then((res) => {
        console.log("Deleted", res.data);
        setModaVisible(false)
         onAfterDelete()
        alert("Deleted!")
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <View
      style={{
        borderWidth: 0.5,
        borderColor: "#D3D3D3",
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
                uri: post.userImage
              }}
            />
            <View>
              <Text style={{ fontSize: 14, fontWeight: "600", color: "black" }}>
                {post.username}
              </Text>
              <Text style={{ fontSize: 14, color: "gray" }}>
                {dayjs(post.uploadTime).fromNow()}
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
            <View style={{ position: "absolute", bottom: 0, width: "100%", height: "40%" }}>
              <View
                style={{
                  backgroundColor: "white",
                  borderTopLeftRadius: 30,
                  borderTopRightRadius: 30,
                  alignItems: "center",
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 4,
                  height: "100%",
                  width: "100%",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "20%",
                    width: "100%",
                  }}
                >
                  <Text
                    style={{ fontSize: 20, fontWeight: "bold", color: "black", }}
                  >
                    Options
                  </Text>
                  <TouchableOpacity
                    style={{ borderRadius: 20, marginLeft: 120, position: "absolute", right: 20, }}
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
                  onPress={(any) => deletePost()}
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
        <View style={{ margin: 10, }}>
          <Text>{post.text}</Text>
        </View>
        <View style={{ borderTopWidth: 0.5, borderColor: '#282828', backgroundColor: "white", alignItems: "center", justifyContent: "center", }}>
          <Image
            style={{ height: imageHeight, width: "100%", resizeMode: 'cover' }}
            source={{ uri: post.image }}
          />
        </View>
        <View
          style={{
            backgroundColor: "#D6CCC2",
            borderWidth: 0.5,
            borderColor: "#D3D3D3",
            backgroundColor: "#EDEDE9",
            width: "100%",
            height: 50,
            flexDirection: "row",
          }}
        >
          <TouchableOpacity style={{ alignItems: "center", flexDirection: "row", width: "50%", height: "100%", justifyContent: "center" }}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "600",
                color: "black",
                marginLeft: 6,
              }}
            >
              Like
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={function () { navigation.navigate("Comments") }}
            style={{ alignItems: "center", flexDirection: "row", width: "50%", height: "100%", justifyContent: "center" }}
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
