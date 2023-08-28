import { useState } from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";
import { Button, TextInput } from "react-native-paper";

export default function EditProfile() {
  const [text, setText] = useState("");
  return (
    <>
      <View
        style={{
          backgroundColor: "#F5EBE0",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            borderRadius: 40,
            width: 340,
            paddingBottom: 20,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.3,
            shadowRadius: 4.65,

            elevation: 8,
          }}
        >
          <View style={{ alignItems: "center", padding: 40, gap: 10 }}>
            <View
              style={{
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 3,
                },
                shadowOpacity: 0.16,
                shadowRadius: 1,

                elevation: 2,
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
            <TouchableOpacity>
              <Text style={{ fontWeight: "bold", color: "gray" }}>
                Change Your Profile Picture
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ paddingLeft: 30 }}>
            <Text style={{ color: "#D3D3D3" }}>────────────────────</Text>
            <View>
              <View style={{ flexDirection: "row", gap: 60 }}>
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Text style={{ fontFamily: "Arial" }}>Name</Text>
                </View>
                <TextInput
                  outlineColor="transparent"
                  underlineColor="gray"
                  activeUnderlineColor="gray"
                  style={{ backgroundColor: "transparent", width: 180 }}
                  value={text}
                  onChangeText={(text) => setText(text)}
                />
              </View>
              <View style={{ flexDirection: "row", gap: 32 }}>
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Text style={{ fontFamily: "Arial" }}>Username</Text>
                </View>
                <TextInput
                  outlineColor="transparent"
                  underlineColor="gray"
                  activeUnderlineColor="gray"
                  style={{ backgroundColor: "transparent", width: 180 }}
                />
              </View>
              <View style={{ flexDirection: "row", gap: 75 }}>
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Text style={{ fontFamily: "Arial" }}>Bio</Text>
                </View>

                <TextInput
                  outlineColor="transparent"
                  underlineColor="gray"
                  activeUnderlineColor="gray"
                  style={{ backgroundColor: "transparent", width: 180 }}
                />
              </View>
            </View>
            {/* <Text style={{ paddingTop: 20, color: "#D3D3D3" }}>
              ─────────────────────
            </Text> */}
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              paddingTop: 20,
            }}
          >
            <Button
              mode="elevated"
              buttonColor="white"
              textColor="gray"
              style={{ width: 200, marginTop: 20, backgroundColor: "#E3D5CA" }}
            >
              Done
            </Button>
          </View>
        </View>
      </View>
    </>
  );
}
