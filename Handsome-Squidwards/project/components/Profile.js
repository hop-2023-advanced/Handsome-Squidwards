import { Text, View, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

export default function Profile() {
  return (
    <>
      <View style={{ backgroundColor: "#F8E3B6" }}>
        <View>
          <View style={{ flexDirection: "row", padding: 10 }}>
            <TouchableOpacity>
              <Ionicons name="chevron-back" size={30} color="black" />
            </TouchableOpacity>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                flex: 1,
                paddingRight: 30,
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                My profile
              </Text>
            </View>
          </View>
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
            backgroundColor: "#FBF2DF",
          }}
        >
          <View style={{ paddingTop: 20 }}>
            <TouchableOpacity style={{ flexDirection: "row" }}>
              <View style={{ position: "absolute", top: 50, left: 30 }}>
                <Ionicons name="ios-settings-outline" size={24} color="gray" />
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
                    color: "gray",
                    fontSize: 20,
                    fontWeight: 400,
                  }}
                >
                  Settings
                </Text>
              </View>
              <View style={{ position: "absolute", top: 50, right: 30 }}>
                <AntDesign name="right" size={24} color="gray" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: "row" }}>
              <View style={{ position: "absolute", top: 120, left: 30 }}>
                <Feather name="unlock" size={26} color="gray" />
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
                    color: "gray",
                    fontSize: 20,
                    fontWeight: 400,
                  }}
                >
                  Password
                </Text>
              </View>
              <View style={{ position: "absolute", top: 120, right: 30 }}>
                <AntDesign name="right" size={24} color="gray" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: "row" }}>
              <View style={{ position: "absolute", top: 190, left: 30 }}>
                <Ionicons name="notifications-outline" size={26} color="gray" />
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
                    color: "gray",
                    fontSize: 20,
                    fontWeight: 400,
                  }}
                >
                  Notifications
                </Text>
              </View>
              <View style={{ position: "absolute", top: 190, right: 30 }}>
                <AntDesign name="right" size={24} color="gray" />
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
