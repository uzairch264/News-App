import { View ,Text,Divider, NativeBaseProvider,FlatList, Box, ScrollView,Image, Center} from "native-base";
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
//import { Button } from "react-native-elements";
import services from '../services/services';
import moment  from "moment/moment";
export default function HomeScreen() {
  const [NewsData,setNewsData]=useState([])
  useEffect(()=>{
    services().then(data=>{setNewsData(data)})
    .catch(error=>{alert(error)})
  },[NewsData])
  return (
    <NativeBaseProvider>
    <View>
    
    <FlatList
        data={NewsData}
        renderItem={({item})=>(<View style={styles.newsContainer} >
          <Center>
          <Image size={200} width={500} borderRadius={20} source={{
      uri: item.urlToImage ? item.urlToImage :"https://images.squarespace-cdn.com/content/v1/5ea237e587e03021f9ef8cc2/1591321482139-5N4EC0SIATZQYDTX8I3G/Question-mark.jpg"
    }} alt="Alternate Text" />
    </Center>
          <Text style={styles.title}>
          {item.title}
          </Text>
          <Text>
          {moment(item.publishedAt).format('LLL') }
          </Text>
          <Divider my="2" 
        bg="#e0e0e0" />
          <Text style={styles.description}>
          {item.description}
          </Text>
           </View>)}
        keyExtractor={(item) => item.id}
      />
      <Box>Hello world</Box>
  
    </View>
    </NativeBaseProvider>
  );   
}
//   <View style={styles.Container}>
//   <Text style={styles.text}>Home </Text>
//   </View >
//   <View style={styles.flex}>
//     <Text style={styles.title}>Title </Text>
//     <Text style={styles.date}>Date </Text>
//   </View>
//   <View>
//     <Text style={styles.description}>Description</Text>
//   </View>
//   <Divider my="1" bg="#e0e0e0"/>
 
//   <View style={styles.flex}>
//     <Text style={styles.title}>Title </Text>
//     <Text style={styles.date}>Date </Text>
//   </View>
//   <View>
//     <Text style={styles.description}>Description</Text>
//   </View>
//   <Divider my="1" bg="#e0e0e0" />
// <View style={styles.flex}>
//     <Text style={styles.title}>Title </Text>
//     <Text style={styles.date}>Date </Text>
//   </View>
//   <View>
//     <Text style={styles.description}>Description</Text>
//   </View>
//   <Divider my="1"bg="#e0e0e0" />
// <View style={styles.flex}>
//     <Text style={styles.title}>Title </Text>
//     <Text style={styles.date}>Date </Text>
//   </View>
//   <View>
//     <Text style={styles.description}>Description</Text>
//   </View>
//   <Divider my="1" bg="#e0e0e0" />
// <View style={styles.flex}>
//     <Text style={styles.title}>Title </Text>
//     <Text style={styles.date}>Date </Text>
//   </View>
//   <View>
//     <Text style={styles.description}>Description</Text>
//   </View>
//   <Divider my="1"bg="#e0e0e0" /> 

const styles = StyleSheet.create({
  Container:{
    padding:15,
    backgroundColor: "#e0e0e0",
    alignItems:"center",
    border: '1px solid #bdbdbd'
  },
  text:{
    fontFamily:"serif"
  },
  flex:{
    display:"flex",
  flexDirection:"row",
  justifyContent:"space-between",
  padding:10
  },
  title:{
  
   marginLeft:8,
   marginTop:5,
   fontSize:20,
   fontWeight: "bold"
  },
  date:{
fontStyle:"italic",
fontSize:10 
  },
  description:{
    padding:20
  },
  newsContainer:{
    padding:20,
    marginTop:10,
    fontSize:15
  }
})