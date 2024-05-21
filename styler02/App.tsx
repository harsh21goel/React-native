import { View, Text ,SafeAreaView, ScrollView,StyleSheet} from 'react-native'
import React from 'react'
import FlatCard from './Components/FlatCard'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
    <FlatCard/>
    <Text >Hello</Text>
    </ScrollView>
    </SafeAreaView>
  )

}
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#000',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// })

export default App