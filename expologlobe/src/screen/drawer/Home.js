import { StyleSheet, Text, View, ImageBackground,TouchableOpacity } from "react-native";
import React from "react";
import Nav from "../../component/Nav";
import { useNavigation } from '@react-navigation/native'
const Home = ({navigation}) => {
  const Navigation= useNavigation();
  const description = "TRAVEL THE WORLD";
  return (
    <View>
      <View style={styles.conHome}>
        <View style={styles.homecom}>
          <ImageBackground
            resizeMethod="cover"
            source={require("../../../assets/img/Home.jpeg")}
            style={[styles.headerImage]}
          >
            <Text style={[styles.headerText]}>Welcome To ExpoloGlobe</Text>
            <Text style={styles.headerDescription}>{description}</Text>
            <TouchableOpacity
              style={styles.ButtonStyle}
              onPress={() => navigation.navigate('ListCity')}
            ><Text  style={styles.ButtonTextStyle}>EXPLORE PLACES</Text></TouchableOpacity>
          </ImageBackground>
        </View>
      </View>

      <View style={styles.navStyle}>
        <Nav />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  conHome: {
    //borderColor: "yellow",
    //borderWidth: 3,
    borderRadius: 5,
    height: "75vh",
    width: "100%",
  },
  homecom: {
    //borderColor: "red",
    //borderWidth: 3,
    borderRadius: 5,
    flex: 1,
  },
  headerImage: {
    flex: 1,
    justifyContent: "center",
    borderRadius: 10,
  },
  headerText: {
    //borderColor: "blue",
    //borderWidth: 3,
    borderRadius: 5,
    textAlign: "center",
    fontSize: 30,
    //fontWeight: "bold",
    color: "white",
  },
  headerDescription: {
    //borderColor: "black",
    //borderWidth: 3,
    borderRadius: 5,
    textAlign: "center",
    fontSize: 25,
    //fontWeight: "bold",
    color: "white",
  },

  ButtonStyle:{
    borderColor:"black",
    borderWidth:1,
    borderRadius:10,
    backgroundColor:"black",
    width:"70%",
    marginHorizontal:"auto",
    marginTop:10

  },
  ButtonTextStyle:{
    textAlign:"center",
    color:"white",
    fontSize:25,
    //fontWeight:400,
    margin:5

  },
  navStyle: {
    backgroundColor: "gray",
    //backgroundColor:"#686868"
    padding: 15,
    //borderRadius: 15,
    position: "relative",
  },
});
