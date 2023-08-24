import { useState } from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";

export default function EditProfile() {
  const [text, setText] = useState("");
  return (
    <>
      <View>
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
            <Text style={{ fontWeight: "bold", color: "#A27146" }}>
              Change Your Profile Picture
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ paddingLeft: 30 }}>
          <View>
            <View style={{ flexDirection: "row", gap: 30 }}>
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Text style={{ fontFamily: "Arial" }}>Name</Text>
              </View>

              <TextInput
                outlineColor="transparent"
                underlineColor="gray"
                activeUnderlineColor="gray"
                style={{ backgroundColor: "transparent", width: 200 }}
                value={text}
                onChangeText={(text) => setText(text)}
              />
            </View>
          </View>
          <View></View>
          <View></View>
        </View>
      </View>
    </>
  );
}
