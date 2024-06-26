import { View, Text ,SafeAreaView, ScrollView,StyleSheet} from 'react-native'
import React from 'react'
import FlatCard from './Components/FlatCard'
import ElevatedCards from './Components/ElevatedCards'
import FancyCard from './Components/FancyCard'
import ActionCard from './Components/ActionCard'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
    <FlatCard/>
    <ElevatedCards/>
    <FancyCard/>
    <ActionCard/>
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