import { StatusBar } from 'expo-status-bar';
import { ScrollView, SafeAreaView, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Post } from './components/Post'
import { createStackNavigator } from '@react-navigation/stack';
import { Comments } from './components/Comments';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}

function MyStack () {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Post' component={Post} />
      <Stack.Screen name="Comments" component={Comments} />
    </Stack.Navigator>
  );
}