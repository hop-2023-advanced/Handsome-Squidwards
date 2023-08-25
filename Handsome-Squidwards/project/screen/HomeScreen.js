import { useAuth } from "@clerk/clerk-expo";
import { SafeAreaView, View, Text, TextInput, ImageBackground } from "react-native";
import { Button } from "react-native-paper";
import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function HomeScreen() {
  const { isLoaded, signOut } = useAuth();
  return (
    // <SafeAreaView
    //   style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    // >
    //   {isLoaded ? (
    //     <Button
    //       mode="contained"
    //       onPress={() => {
    //         signOut();
    //       }}
    //       style={{ width: 150 }}
    //     >
    //       sign out
    //     </Button>
    //   ) : (
    //     ""
    //   )}
    // </SafeAreaView>
    <View style={{flex:1, backgroundColor:"#F9E2B7", display:"flex", flexDirection:"column", justifyContent:"space-between", paddingTop:90, alignItems:"center"}}>
      <View style={{width:"100%", backgroundColor:"#A27146", height: 90, position:"absolute", alignItems:"center", justifyContent:"space-between", display:"flex", flexDirection:"row", padding:30}}>
        <Text style={{color:"white", fontWeight:"bold"}}>Good day, John Smith</Text>
        <MaterialCommunityIcons name="human-greeting-variant" size={24} color="white" />
        <View style={{width:300, left:"12%", height:40, backgroundColor:"#EFDAAF", borderRadius: 2000, position:"absolute", top:70, shadowColor:"black", shadowOpacity:0.2, shadowRadius:3, shadowOffset: {width: -2, height: 4}, alignItems:"flex-end", justifyContent:"center", zIndex:1, display:"flex",}}><FontAwesome name="search" size={24} color="#A27146" style={{paddingRight:15, right:0}} /></View>
      </View>
      <View style={{width:"90%", height:1000, backgroundColor:"black", zIndex: -1}}></View>
      <ImageBackground source={require('../assets/Footer2.jpg')} resizeMode="cover" style={{width:"100%", height: 80, position:"absolute", bottom:0, display:"flex", flexDirection:"row", justifyContent:"space-between",}}>
        <View style={{width:"40%", height:"100%", backgroundColor:"A27146", alignItems:"center", justifyContent:"center"}}><AntDesign name="home" size={40} color="white" /></View>
        <View style={{width:"40%", height:"100%", backgroundColor:"A27146", alignItems:"center", justifyContent:"center"}}><Text><FontAwesome name="shopping-basket" size={35} color="white" /></Text></View>
        <View style={{position:"absolute", width:100, height:100, borderRadius:2000, left:"37%", bottom:30, alignItems:"center", justifyContent:"center"}}>
          <View style={{width:70, height:70, backgroundColor:"#A27146", borderRadius:2000, alignItems:"center", justifyContent:"center"}}><Text style={{color:"white", fontSize:60, bottom:3}}>+</Text></View>
        </View>
      </ImageBackground>
    </View>
  );
}
