import React, { useState } from "react";
import { SafeAreaView, Text, TouchableOpacity, View, Switch } from "react-native";
import { useSignIn, useUser } from "@clerk/clerk-expo";
import { Button, TextInput } from "react-native-paper";

export default function SignInScreen({ pressed }) {
  const { signIn, setActive, isLoaded } = useSignIn();
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isEnabled, setIsEnabled] = useState(false);
  const [check, setCheck] = useState("-");
  const [Test, setTest] = useState();
  const value = {
    name: "Chimezie",
    job: "Software Developer"
  };

  const SignInPress = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      const completeSignIn = await signIn.create({
        identifier: emailAddress,
        password,
      });
      // This is an important step,
      // This indicates the user is signed in
      await setActive({ session: completeSignIn.createdSessionId });
    } catch (err) {
      console.log(err);
    }
  };

  const StringValue = async () => {
    try {
      await AsyncStorage.setItem("user", JSON.stringify(value));
    } catch (e) {
      // save error
    }

    console.log(value)
  }

  const getUser = async () => {
    try {
      const savedUser = await AsyncStorage.getItem("user");
      const currentUser = JSON.parse(savedUser);
      console.log(currentUser);
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#C38154",
      }}
    >
      <View
        style={{
          justifyContent: "space-around",
          alignItems: "center",
          height: 300,
        }}
      >
        <Text
          style={{
            fontSize: 30,
            color: "white",
            fontStyle: "italic",
            fontWeight: "800",
          }}
        >
          Sign In
        </Text>

        <TextInput
          mode="outlined"
          value={emailAddress}
          label="Email or username"
          onChangeText={(emailAddress) => setEmailAddress(emailAddress)}
          style={{
            width: 250,
            height: 40,
            backgroundColor: "white",
            fontSize: 13,
          }}
        />

        <TextInput
          mode="outlined"
          value={password}
          label="Password"
          secureTextEntry={secureTextEntry}
          onChangeText={(password) => setPassword(password)}
          style={{
            width: 250,
            height: 40,
            backgroundColor: "white",
            fontSize: 13,
          }}
          right={
            <TextInput.Icon
              style={{ marginTop: 15 }}
              icon="eye"
              onPress={() => {
                setSecureTextEntry(!secureTextEntry);
              }}
            />
          }
        />

        <View style={{ flexDirection: "row", alignItems: "center", gap: 10, }}>
          <TouchableOpacity onPress={StringValue} style={{ borderWidth: 2, width: 20, alignItems: "center", justifyContent: "center", }}>
            <Text style={{ color: "white" }}>{check}</Text>
          </TouchableOpacity>
          <Text style={{ color: "white" }}>Remember me</Text>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center", gap: 10, }}>
          <TouchableOpacity onPress={getUser} style={{ borderWidth: 2, width: 20, alignItems: "center", justifyContent: "center", }}>
            <Text style={{ color: "white" }}>{check}</Text>
          </TouchableOpacity>
          <Text style={{ color: "white" }}>Test</Text>
        </View>

        <Button
          onPress={SignInPress}
          mode="contained"
          style={{
            width: 250,
            height: 40,
            backgroundColor: "#F9E0BB",
          }}
        >
          <Text style={{ color: "black", fontStyle: "italic" }}>Enter</Text>
        </Button>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ fontSize: 13, fontStyle: "italic", color: "white" }}>
            Don't have an account?{" "}
          </Text>
          <TouchableOpacity onPress={() => pressed()}>
            <Text
              style={{
                fontSize: 14,
                textDecorationLine: "underline",
                fontStyle: "italic",
                color: "white",
              }}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
