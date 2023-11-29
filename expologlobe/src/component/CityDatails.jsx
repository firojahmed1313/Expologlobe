import { ActivityIndicator, StyleSheet, Text, View, Image, TouchableOpacity ,SafeAreaView,FlatList} from "react-native";
import React, { useEffect, useState } from "react";

import World from "../api/World";
import CityItems from "./CityItems";

const CityDatails = ({ route }) => {
  const [udata, setuData] = useState([{}]);


  const terget = route.params.con;
  const getApiData = () => {
    try {
      if (terget === 'asia') {
        //console.log(World.asia[0].image_lastmod);
        return World.asia;
        //console.log(udata);
      }
      else if (terget === 'africa') {
        //console.log(World.africa[0].image_lastmod);
        return World.africa;
      }
      else if (terget === 'middle-east') {
        //console.log(World.middleeast[0].image_lastmod);
        return World.middleeast;
      }
      else if (terget === 'oceania') {
        //console.log(World.oceania[0].image_lastmod);
        return World.oceania;
      }
      else if (terget === 'europe') {
        //console.log(World.europe[0].image_lastmod);
        return World.europe;
      }
      else if (terget === 'north-america') {
        //console.log(World.northamerica[0].image_lastmod);
        return World.northamerica;
      }
      else if (terget === 'latin-america') {
        //console.log(World.latinamerica[0].image_lastmod);
        return World.latinamerica;
      }
    } catch (error) {
      console.log(error);
    }
    console.log("api");
  }


  useEffect(() => {


    const data = getApiData();
    if (data != undefined) {
      setuData(data);
    }
    //console.log(udata[0])




  }, [udata])

  return (

    <SafeAreaView style={styles.container}>
      <FlatList
        data={udata}
        renderItem={({ item }) => <CityItems itemlist={item} />}
        keyExtractor={(item) => item.rank}
      />
    </SafeAreaView>

  );
};

export default CityDatails;

const styles = StyleSheet.create({
  container:{
    borderRadius:5,
    borderColor:"yellow",
    borderWidth:2,
    marginHorizontal:5,
    

  }
});
