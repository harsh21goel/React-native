import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function OpenWebsite(webLink: string) {
        Linking.openURL(webLink)
    }
  return (
    <View>
      <Text style={styles.headingtext}>Blog Card</Text>
      <View style={styles.Card}>
            <View style={styles.HeaderContainer}>
                <Text style={styles.HeaderText}>Lets Learn about React-Native</Text>
            </View>
                <Image style={styles.CardImage}
                source={{
                    uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAaLFHqu3fO2d53GDRs72vteLkc4FCOvWO63QlG-t4qw&s"
                }}
                />
            <View style={styles.BodyContainer}>
                <Text style={styles.BodyText} numberOfLines={2}>
                React Native lets you create truly native apps and doesn't compromise your users' experiences. It provides a core set of platform agnostic native components like View, Text, and Image that map directly to the platform's native UI building blocks.
                </Text>
            </View>
            <View style={styles.FooterContainer}>
               <TouchableOpacity 
               onPress={()=> OpenWebsite("https://reactnative.dev/")}
               >
                <Text style={styles.FooterText}>Read More</Text>
               </TouchableOpacity>
               <TouchableOpacity 
               onPress={()=> OpenWebsite("https://www.instagram.com/harsh_goel21/")}
               >
                <Text style={styles.FooterText}>Follow me</Text>
               </TouchableOpacity>
            </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingtext:{
        fontSize:30,
        fontWeight:"bold",
        paddingHorizontal:8
    },
    Card:{
        width:350,
        height:340,
        backgroundColor:"#ffffff",
        marginHorizontal:20,
        marginVertical:10,
        borderRadius:5,
       
    },
    HeaderContainer:{
        padding:10,
        justifyContent:"center",
        alignItems:"center"
    },
    HeaderText:{
        color:"#000000",
        fontSize:20,
        fontWeight:"600"
    },
    CardImage:{
        height:190
    },
    BodyContainer:{

    },
    BodyText:{
        padding:10,
        fontSize:15,
        color:"#000000"
    },
    FooterContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal:10,
        paddingVertical:10,
        borderTopWidth:1,
        borderTopColor:"#000000"
    },
    FooterText:{
        color:"#034afc",
        fontSize:15,
        fontWeight:"600",
    },
})