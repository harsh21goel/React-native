import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

export default class FlatCard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>FlatCard</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000'
    }
})