import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCard(): JSX.Element {
  return (
    <View>
      <Text style={styles.heading}>Trending place</Text>
      <View style={styles.card}>
        <Image
          style={styles.cardimage}
          source={{
            uri: 'https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/in/wp-content/uploads/2022/09/pexels-digital-buggu-192729.jpg',
          }}
        />
        <View style={styles.cardbody}>
          <Text style={styles.cardtitle}>Spiti Valley </Text>
          <Text style={styles.cardlabel}>Ladakh</Text>
          <Text style={styles.carddescription}>
            Ancient monasteries including Tabo, Kee Gompa, Sakya Tangyud,
            Lhalung, Gandhola, Tayul Lakes namely Chandratal, Suraj Taal,
            Dhankar, Nako Pin Valley National Park Langza Buddha Statue{' '}
          </Text>
          <Text style={styles.cardfooter}>8 degrees to 18 degrees</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    padding: 10,
    fontWeight: 'bold',
  },
  card: {
    width:360,
    height:360,
    backgroundColor:"#ffffff",
    marginHorizontal:20,
    marginVertical:10,
    borderRadius:5,

    
  },
  cardimage: {
    height: 180,
    borderTopLeftRadius:5,
    borderTopRightRadius:5,
    marginBottom:10
  },
  cardbody: {
    flex:1,
    flexGrow:1,
    paddingHorizontal:15
  },
  cardtitle: {
    color:"#000000",
    fontSize:20,
    fontWeight:"bold",
    marginBottom:10,
  },
 
  cardlabel: {
    color:"#000000",
    fontSize:15,
    marginBottom:10,
  },
  carddescription: {
    color:"#000000",
    fontSize:10,
marginBottom:15

  },
  cardfooter: {
    color:"#000000",
  },
});
