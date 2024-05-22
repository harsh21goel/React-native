import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards(): JSX.Element {
  return (
    <View>
      <Text style={styles.heading}>Elevated Cards</Text>
      <ScrollView horizontal style={styles.Container}showsHorizontalScrollIndicator={false}>
        <View style={styles.card}>
            <Text>Card 1</Text>
        </View>
        <View style={styles.card}>
            <Text>Card 1</Text>
        </View>
        <View style={styles.card}>
            <Text>Card 2</Text>
        </View>
        <View style={styles.card}>
            <Text>Card 3</Text>
        </View>
        <View style={styles.card}>
            <Text>Card 4</Text>
        </View>
        <View style={styles.card}>
            <Text>Card 5</Text>
        </View>
        <View style={styles.card}>
            <Text>Card 6</Text>
        </View>
        <View style={styles.card}>
            <Text>Card 7</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    heading:{
        fontSize: 30,
        paddingHorizontal:8,
        fontWeight:"bold"
    },
    Container:{
        

    },
    card:{
        flex: 1,
        justifyContent: 'center',
        alignItems:"center",
        width:100,
        height:100,
        margin:8,
        backgroundColor:"#4287f5"

    }
})