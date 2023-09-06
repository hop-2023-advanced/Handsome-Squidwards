import { Text, View, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useEffect, useState } from "react";

const baseUrl = "http://localhost:3000/users/"

export default function Profile({ navigation }) {
  // const id = user.id
  const [data, setData] = useState("");

  // useEffect(() => {
  //   axios.get(baseUrl + id)
  //   .then((res) => {
  //     setData(res.data);
  //     console.log(res.data);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  // }, [])
  return (
    <>
      <View style={{ backgroundColor: "#F5EBE0" }}>
        <View>
          <View style={{ alignItems: "center", padding: 40, gap: 10 }}>
            <View
              style={{
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 5,
                },
                shadowOpacity: 0.16,
                shadowRadius: 5.68,

                elevation: 8,
              }}
            >
              <Image
                style={{
                  width: 120,
                  height: 120,
                  borderRadius: 100,
                }}
                source={{
                  uri: "https://c1.wallpaperflare.com/preview/985/106/566/own-id-photo-short-hair.jpg",
                }}
              ></Image>
            </View>
            <View>
              <Text
                style={{
                  fontFamily: "Arial-BoldMT",
                  fontWeight: "bold",
                  fontSize: 25,
                  color: "#2E2E2E",
                }}
              >
                Your name
              </Text>
            </View>
            <View>
              <Text style={{ color: "gray" }}>Username</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 12,
            },
            shadowOpacity: 0.58,
            shadowRadius: 10.0,

            elevation: 14,
            width: "100%",
            height: "100%",
            backgroundColor: "#D5BDAF",
          }}
        >
          <View style={{ paddingTop: 20 }}>
            <TouchableOpacity
              style={{ flexDirection: "row" }}
              onPress={function () {
                navigation.navigate("EditProfile");
              }}
            >
              <View style={{ position: "absolute", top: 50, left: 30 }}>
                <Feather name="edit" size={24} color="white" />
              </View>
              <View
                style={{
                  position: "absolute",
                  top: 50,
                  left: 100,
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 20,
                    fontWeight: 400,
                  }}
                >
                  Edit Profile
                </Text>
              </View>
              <View style={{ position: "absolute", top: 50, right: 30 }}>
                <AntDesign name="right" size={24} color="white" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ flexDirection: "row" }}
              onPress={function () {
                navigation.navigate("Password");
              }}
            >
              <View style={{ position: "absolute", top: 120, left: 30 }}>
                <Feather name="unlock" size={26} color="white" />
              </View>
              <View
                style={{
                  position: "absolute",
                  top: 120,
                  left: 100,
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 20,
                    fontWeight: 400,
                  }}
                >
                  Password
                </Text>
              </View>
              <View style={{ position: "absolute", top: 120, right: 30 }}>
                <AntDesign name="right" size={24} color="white" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: "row" }}>
              <View style={{ position: "absolute", top: 190, left: 30 }}>
                <Ionicons
                  name="notifications-outline"
                  size={26}
                  color="white"
                />
              </View>
              <View
                style={{
                  position: "absolute",
                  top: 190,
                  left: 100,
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 20,
                    fontWeight: 400,
                  }}
                >
                  Notifications
                </Text>
              </View>
              <View style={{ position: "absolute", top: 190, right: 30 }}>
                <AntDesign name="right" size={24} color="white" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: "row" }}>
              <View style={{ position: "absolute", top: 260, left: 30 }}>
                <AntDesign name="closecircleo" size={24} color="#880808" />
              </View>
              <View
                style={{
                  position: "absolute",
                  top: 260,
                  left: 100,
                }}
              >
                <Text
                  style={{ color: "#880808", fontSize: 20, fontWeight: 500 }}
                >
                  Sign out
                </Text>
              </View>
              <View style={{ position: "absolute", top: 260, right: 30 }}>
                <AntDesign name="right" size={24} color="#880808" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}
