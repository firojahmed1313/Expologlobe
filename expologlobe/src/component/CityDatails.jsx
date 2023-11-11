import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

const CityDatails = ({ route }) => {
  const [udata, setuData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);
  //const [tergetdata, setterget] = useState();
  const terget = route.params.con;
  //console.log(terget);
  //setterget(terget);
  const getuData = async () => {
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
      //console.log(result);
      setuData(result);
      //console.log(udata)
      setIsLoaded(false);
    } catch (error) {
      console.warn(error);
    }
  };
  //useEffect(() => getuData(), []);
  useEffect(() => getuData(), []);

  return (
    (isLoaded)?<ActivityIndicator size="large" color="red"  /> :
    <View>
      <Text>{terget}</Text>
    </View>
  );
};

export default CityDatails;

const styles = StyleSheet.create({});
