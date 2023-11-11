import { StyleSheet, Text, View ,Image, TouchableOpacity,} from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";


const LatinAmerica = () => {
  const Navigation = useNavigation();

  //console.log(itemlist);
  const description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";

  return (
    <View style={styles.listCon}>
      <Image
        resizeMode="cover"
        source={require("../../../assets/img/latin-america.jpg")}
        style={styles.listImage}
      />
      <Text style={styles.title}>LatinAmerica</Text>
      <Text style={styles.description}>{description}</Text>
      <TouchableOpacity
        style={styles.ButtonStyle}
        onPress={() => Navigation.navigate("CityDatails", {
          con: "latin-america"
        })}
      >
        <Text style={styles.ButtonTextStyle}>MORE</Text>
      </TouchableOpacity>
    </View>
  )
}

export default LatinAmerica

const styles = StyleSheet.create({
  listCon: {
    //borderColor:"blue",
    //borderWidth:5,
    borderRadius: 10,
    width: "90%",
    marginHorizontal: "5%",
    marginBottom: 15,
    shadowColor: "#171717",
    shadowOffset: { width: -4, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  listImage: {
    //borderColor:"pink",
    //borderWidth:5,
    borderRadius: 10,
    height: undefined,
    width: "100%",
    aspectRatio: 1,
  },
  title: {
    //borderColor:"red",
    //borderWidth:5,
    borderRadius: 10,
    fontSize: 25,
    //fontWeight: "bold",
    textAlign: "center",
  },
  description: {
    //borderColor:"black",
    //borderWidth:5,
    borderRadius: 10,
    fontSize: 22,
    //fontWeight: 400,
    textAlign: "left",
    marginLeft: 10,
  },
  ButtonStyle: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "black",
    width: "50%",
    marginHorizontal: "auto",
    marginTop: 10,
    marginVertical: 10,
    alignSelf:"center",
    
  },
  ButtonTextStyle: {
    textAlign: "center",
    color: "white",
    fontSize: 25,
    //fontWeight: 400,
    margin: 5,
  },
})