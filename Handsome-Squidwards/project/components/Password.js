import { View, Image, Text } from "react-native";
import { Button, TextInput } from "react-native-paper";

export default function Password() {
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
                  width: 100,
                  height: 100,
                  borderRadius: 100,
                  marginBottom: 30,
                }}
                source={{
                  uri: "https://c1.wallpaperflare.com/preview/985/106/566/own-id-photo-short-hair.jpg",
                }}
              ></Image>
            </View>
            <View style={{ gap: 20 }}>
              <TextInput
                style={{
                  width: 250,
                  backgroundColor: "transparent",
                }}
                mode="outlined"
                label="New Password"
                outlineColor="#E5E4E2"
                activeOutlineColor="gray"
                secureTextEntry={true}
              />

              <TextInput
                style={{ width: 250, backgroundColor: "transparent" }}
                label="Confirm New Password"
                mode="outlined"
                outlineColor="#E5E4E2"
                activeOutlineColor="gray"
                secureTextEntry={true}
              />
              <Button
                mode="contained"
                style={{ backgroundColor: "#E3D5CA", marginTop: 20 }}
              >
                <Text style={{ color: "black" }}>Change Password</Text>
              </Button>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}
