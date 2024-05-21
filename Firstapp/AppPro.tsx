import React from 'react'
import {View,Text,useColorScheme,StyleSheet} from "react-native"
function AppPro(): JSX.Element {
    const isDarkMode=useColorScheme()==="dark"
  return (
    <View style={styles.container}>
        <Text style={isDarkMode? styles.whiteText: styles.darktext }
        >Hello World From AppPro</Text>
    </View>
  )
 
}
const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        // backgroundColor:"gray",
       
    },
    whiteText:{
        color:"white",
    },
    darktext:{
        color:"black",
    }
  })
export default AppPro