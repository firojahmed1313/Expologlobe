import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

import World from "../api/World";

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
    <View>
      <Text>{terget}</Text>
      {<Text>{udata.map(dta => <Text>{dta.weather_emoji + "     ,       "}</Text>)}</Text>
      }
    </View>
  );
};

export default CityDatails;

const styles = StyleSheet.create({});
