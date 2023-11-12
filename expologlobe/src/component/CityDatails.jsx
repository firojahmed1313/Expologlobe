import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

import World from "../api/World";

const CityDatails = ({ route }) => {
  const [udata, setuData] = useState({});
  //const [isLoaded, setIsLoaded] = useState(true);
  const terget = route.params.con;
  if(terget==='asia'){
    console.log(World.asia[0].image_lastmod);
    //setuData(World.asia);
    //console.log(udata);
  }
  else if(terget==='africa'){
    console.log(World.africa[0].image_lastmod);
  }
  else if(terget==='middle-east'){
    console.log(World.middleeast[0].image_lastmod);
  }
  else if(terget==='oceania'){
    console.log(World.oceania[0].image_lastmod);
  }
  else if(terget==='europe'){
    console.log(World.europe[0].image_lastmod);
  }
  else if(terget==='north-america'){
    console.log(World.northamerica[0].image_lastmod);
  }
  else if(terget==='latin-america'){
    console.log(World.latinamerica[0].image_lastmod);
  }
  
  /*const getuData = async () => {
    const url = `https://nomad-list-cities.p.rapidapi.com/nomad-list/${terget}?size=20&page=1&sort=desc&sort_by=overall_score`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "4256421b56msh8a9624784e38f14p1ccd70jsnc4d94eeadf3d",
        "X-RapidAPI-Host": "nomad-list-cities.p.rapidapi.com",
      },
    };
    console.log(url);

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setuData(result);
      console.log(udata)
      setIsLoaded(false);
    } catch (error) {
      console.warn(error);
    }
  };
  useEffect(() =>
   
  getuData(),
   []);
*/
  return (
    //(isLoaded) ? <ActivityIndicator size="large" color="red" /> :
      <View>
        <Text>{terget}</Text>
      </View>
  );
};

export default CityDatails;

const styles = StyleSheet.create({});
