

import React from "react";
import Setting from "./screens/Setting";
import HomeScreen from "./screens/HomeScreen";
import { NativeBaseProvider, Box, StatusBar } from "native-base";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Sport from "./screens/Sport";
import Health from "./screens/Health";
import Busniess from "./screens/Busniess";
import { Icon } from "react-native-elements";



const Tab = createBottomTabNavigator();
export default function App() {

    
  return (
    <NativeBaseProvider>
  <NavigationContainer>
  <Tab.Navigator tabBarOptions={{showLabel:false}}>
      <Tab.Screen name="Home"  component={HomeScreen} options={{headerShown:true,tabBarActiveTintColor:"purple", tabBarIcon: ({ color, size }) => ( 
      <Icon name="home" type="feather" color={color} size={size} />
    ),}}/>
      <Tab.Screen name="Settings" component={Setting} options={{headerShown:true,tabBarActiveTintColor:"black", tabBarIcon: ({ color, size }) => ( 
      <Icon name="settings" type="feather" color={color} size={size} />
    ),}}/>
      <Tab.Screen name="Sports" component={Sport} options={{headerShown:true,tabBarActiveTintColor:"blue", tabBarIcon: ({ color, size }) => ( 
      <Icon name="tennisball-outline" type="ionicon" color={color} size={size} />
    ),}} />
      <Tab.Screen name="Busniess" component={Busniess} options={{headerShown:true,tabBarActiveTintColor:"green", tabBarIcon: ({ color, size }) => ( 
      <Icon name="dollar-sign" type="feather" color={color} size={size} />
    ),}}/>
      <Tab.Screen name="Health" component={Health}  options={{headerShown:true,tabBarActiveTintColor:"red",tabBarIcon: ({ color, size }) => ( 
      <Icon name="heart" type="feather" color={color} size={size} />
    ),}}/>
    </Tab.Navigator>
    <StatusBar style="auto"/>
    </NavigationContainer>
    </NativeBaseProvider>
  );
}
