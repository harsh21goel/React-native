import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

export default class FlatCard extends Component {
  render() {
    return (
      <View>
        <Text style={styles.heading}>FlatCard</Text>
        <View style={styles.container}>
            <View style={[styles.card,styles.cardone]} >
                <Text>Red</Text>
            </View>
            <View style={[styles.card,styles.cardTwo]} >
                <Text>Blue</Text>
            </View>
            <View style={[styles.card,styles.cardThree]} >
                <Text>Green</Text>
            </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    heading:{
        fontSize: 30,
        fontWeight:"bold",
        paddingHorizontal:8
    },
    container: {
       flexDirection: 'row',
       padding:8,
    },
    card: {
        flex:1,
        justifyContent: 'center',
        alignItems:"center",
        width:100,
        height:100,
        margin:10,
        borderRadius:5,
        
    },
    cardone: {
        backgroundColor:'red'
    },
    cardTwo: {
        backgroundColor:'blue'
    },
    cardThree: {
        backgroundColor:'green'
    }
})