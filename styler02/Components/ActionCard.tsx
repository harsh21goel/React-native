import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function OpenWebsite(webLink: string) {
        Linking.openURL(webLink)
    }
  return (
    <View>
      <Text>Blog Card</Text>
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
                <Text style={styles.BodyText}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatem, quaerat.
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
    Card:{},
    HeaderContainer:{},
    HeaderText:{},
    CardImage:{
        height:150
    },
    BodyContainer:{},
    BodyText:{},
    FooterContainer:{},
    FooterText:{},
})