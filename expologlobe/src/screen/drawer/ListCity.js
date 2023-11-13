import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  
} from "react-native";
import React from "react";
import CityList from "../../component/CityList";

//import City from "../../api/CityApi"

const CITY = [
    {
      id: "1",
      title: "Asia",
      image: require("../../../assets/img/asia.jpg"),
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        link: "asia",
    },
    {
      id: "2",
      title: "Afrika",
      image: require("../../../assets/img/africa.jpg"),
      description: "",
      link: "africa",
    },
    {
      id: "3",
      title: "MiddleEast",
      image: require("../../../assets/img/middle-east.jpg"),
      description: "",
      link: "middle-east",
    },
    {
      id: "4",
      title: "Oceania",
      image: require("../../../assets/img/oceania.jpg"),
      description: "",
      link: "oceania",
    },
    {
      id: "5",
      title: "Europe",
      image: require("../../../assets/img/europe.jpg"),
      description: "",
      link: "europe",
    },
    {
      id: "6",
      title: "NorthAmerica",
      image: require("../../../assets/img/north-america.jpg"),
      description: "",
      link: "north-america",
    },
    {
      id: "7",
      title: "LatinAmerica",
      image: require("../../../assets/img/latin-america.jpg"),
      description: "",
      link: "latin-america",
    },
  ];


const ListCity = () => {
    //console.log(CITY)
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={CITY}
        renderItem={({ item }) => <CityList itemlist={item} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default ListCity;

const styles = StyleSheet.create({
  container: {
    //borderColor:"yellow",
    //borderWidth:5,
    borderRadius: 10,
    marginVertical: 10,
    
  },
  
});
