import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Nav from '../component/Nav'

const About = () => {
  return (
    <View>
      <Text>About</Text>
      <View style={styles.navStyle}>
        <Nav />
      </View>
    </View>
  )
}

export default About

const styles = StyleSheet.create({
  navStyle: {
    backgroundColor: "gray",
    //backgroundColor:"#686868"
    padding: 15,
    borderRadius: 15,
    position: "relative",
  },
})