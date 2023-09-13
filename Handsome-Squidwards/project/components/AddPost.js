import "react-native-gesture-handler";
import React, { useState } from "react";
import { Text, Image, View, TouchableOpacity, } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function Profile({ navigation }) {
    // const navigation = useNavigation();
    const [modaVisible, setModaVisible] = useState(false);

    return (
        <View style={{flex:1, backgroundColor:"black"}}>
        </View>
    );
};
