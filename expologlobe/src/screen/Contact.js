import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Nav from '../component/Nav'

const Contact = () => {
  return (
    <View>
      <Text>Contact</Text>
      <View style={styles.navStyle}>
        <Nav />
      </View>
    </View>
  )
}

export default Contact

const styles = StyleSheet.create({
  navStyle: {
    backgroundColor: "gray",
    //backgroundColor:"#686868"
    padding: 15,
    borderRadius: 15,
    position: "relative",
  },
})