import { ActivityIndicator, StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, FlatList } from "react-native";
import React from 'react'

const CityItems = ({ itemlist }) => {
  const floatTwoDecFromString = ({ no }) => {
    console.log(no.contentLength);
    return <Text style={{ fontSize: 20 }} >{parseFloat(no.toFixed(2))}</Text>
  }
  return (
    <View style={styles.container} >
      <View style={styles.imagecontainer}>
        <Image resizeMode="cover" source={{ uri: (itemlist.image) }} style={styles.frontImage} />
      </View>
      <View style={styles.textcontainer}>
        <Text style={styles.title}>Rank : {itemlist.rank}</Text>
        <View style={styles.Detailscontainer}>

          <View style={styles.Details}>
            <Text style={styles.DetailsText}>Name : {itemlist.name}</Text>
          </View>
          <View style={styles.Details}>
            <Text style={styles.DetailsText}>latitude : {itemlist.latitude}</Text>
          </View>
          <View style={styles.Details}>
            <Text style={styles.DetailsText}>longitude : {itemlist.longitude}</Text>
          </View>
          <View style={styles.Details}>
            <Text style={styles.DetailsText}>Region : {itemlist.region}</Text>
          </View>
          <View style={styles.Details}>
            <Text style={styles.DetailsText}>Population : {itemlist.population}</Text>
          </View>
          <View style={styles.Details}>
            <Text style={styles.DetailsText}>Country : {itemlist.country}</Text>
          </View>
          <View style={styles.descriptionFromReview}>
            <Text style={styles.DetailsText}> DescriptionFromReview : {itemlist.descriptionFromReview}</Text>
          </View>

          

        </View>
        <View style={styles.weathercontainer}>

          <View style={styles.largetextfield}>
            <View style={styles.weather_emoji}>
              <Text style={styles.textWeatherEmoji}>{itemlist.weather_emoji}</Text>
            </View>
            <View style={styles.tepmPIcon}>
              <View style={styles.temp}>
                <View style={styles.sftemp}>
                  <Text style={{ fontSize: 20 }}>{itemlist.temperatureC} &deg;C</Text>
                </View>
                <View style={styles.sftemp}>

                  <Text style={{ fontSize: 20 }} >{itemlist.temperatureF} &deg;F</Text>
                </View>
              </View>
              <View style={styles.weather_icon}>
                <Text style={{ fontSize: 20 }}>{itemlist.weather_icon}</Text>
              </View>
            </View>
          </View>
          <View style={styles.smalltextfield}>
            <View style={styles.dataField}>
              <View style={styles.keyField}>
                <Text style={{ fontSize: 16 }} >Humidity</Text>
              </View>
              <View style={styles.valueField}>
                <Text style={{ fontSize: 20 }}>{itemlist.humidity}</Text>
              </View>
            </View>

            <View style={styles.dataField}>
              <View style={styles.keyField}>
                <Text style={{ fontSize: 16 }} >Safety Level</Text>
              </View>
              <View style={styles.valueField}>
                <Text style={{ fontSize: 20 }}>{itemlist.safety_level}</Text>
              </View>
            </View>
            <View style={styles.dataField}>
              <View style={styles.keyField}>
                <Text style={{ fontSize: 16 }} >Internet Speed</Text>
              </View>
              <View style={styles.valueField}>
                <Text style={{ fontSize: 20 }}>{itemlist.internet_speed}</Text>
              </View>
            </View>

            <View style={styles.dataField}>
              <View style={styles.keyField}>
                <Text style={{ fontSize: 16 }} >Air Quality Score</Text>
              </View>
              <View style={styles.valueField}>
                <Text style={{ fontSize: 20 }}>{itemlist.air_quality_score}</Text>
              </View>
            </View>
            <View style={styles.dataField}>
              <View style={styles.keyField}>
                <Text style={{ fontSize: 16 }} >Air Quality Now</Text>
              </View>
              <View style={styles.valueField}>
                <Text style={{ fontSize: 20 }}>{itemlist.air_quality_now}</Text>
              </View>
            </View>

            <View style={styles.dataField}>
              <View style={styles.keyField}>
                <Text style={{ fontSize: 16 }} >Temperature Feels Like</Text>
              </View>
              <View style={styles.valueField}>
                <Text style={{ fontSize: 20 }}>{itemlist.temperatureC_feels_like} &deg;C    {itemlist.temperatureF_feels_like} &deg;F </Text>
              </View>
            </View>
            <View style={styles.dataField}>
              <View style={styles.keyField}>
                <Text style={{ fontSize: 16 }} >Cost Nomad</Text>
              </View>
              <View style={styles.valueField}>
                <Text style={{ fontSize: 20 }}> $ {itemlist.cost_for_nomad_in_usd}</Text>
              </View>
            </View>
            <View style={styles.dataField}>
              <View style={styles.keyField}>
                <Text style={{ fontSize: 16 }} >Cost Local</Text>
              </View>
              <View style={styles.valueField}>
                <Text style={{ fontSize: 20 }}> $ {itemlist.cost_for_local_in_usd}</Text>
              </View>
            </View>
            <View style={styles.dataField}>
              <View style={styles.keyField}>
                <Text style={{ fontSize: 16 }} >Cost Family</Text>
              </View>
              <View style={styles.valueField}>
                <Text style={{ fontSize: 20 }}> $ {itemlist.cost_for_family_in_usd}</Text>
              </View>
            </View>
            <View style={styles.dataField}>
              <View style={styles.keyField}>
                <Text style={{ fontSize: 16 }} >Cost Expat</Text>
              </View>
              <View style={styles.valueField}>
                <Text style={{ fontSize: 20 }}> $ {itemlist.cost_for_expat_in_usd}</Text>
              </View>
            </View>

            <View style={styles.dataField}>
              <View style={styles.keyField}>
                <Text style={{ fontSize: 16 }} >Internet Score</Text>
              </View>
              <View style={styles.valueField}>
                <Text style={{ fontSize: 20 }}>{itemlist.internet_score}</Text>
              </View>
            </View>
            <View style={styles.dataField}>
              <View style={styles.keyField}>
                <Text style={{ fontSize: 16 }} >Leisure Quality</Text>
              </View>
              <View style={styles.valueField}>
                <Text style={{ fontSize: 20 }}>{itemlist.leisure_quality}</Text>
              </View>
            </View>
            <View style={styles.dataField}>
              <View style={styles.keyField}>
                <Text style={{ fontSize: 16 }} >Total Score</Text>
              </View>
              <View style={styles.valueField}>
                <Text style={{ fontSize: 20 }}>{itemlist.total_score}</Text>
              </View>
            </View>
            <View style={styles.dataField}>
              <View style={styles.keyField}>
                <Text style={{ fontSize: 16 }} >Overall Score</Text>
              </View>
              <View style={styles.valueField}>
                <Text style={{ fontSize: 20 }}>{itemlist.overall_score}</Text>
              </View>
            </View>
            <View style={styles.dataField}>
              <View style={styles.keyField}>
                <Text style={{ fontSize: 16 }} >Cost Score</Text>
              </View>
              <View style={styles.valueField}>
                <Text style={{ fontSize: 20 }}>{itemlist.cost_score}</Text>
              </View>
            </View>


          </View>

        </View>


      </View>



    </View>
  )
}

export default CityItems


const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 1,
    marginHorizontal: 5,
    marginVertical: 7,
    /*shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,*/
    
    
  },
  imagecontainer: {
    width: "100%",
    //borderColor: "red",

  },
  frontImage: {
    borderRadius: 10,
    height: undefined,
    width: "100%",
    aspectRatio: 1.5,
  }
  ,
  textcontainer: {
    borderRadius: 5,
    borderColor: "black",
    //borderWidth: 1,
    

    backgroundColor: "#7699d3",



  },
  title: {
    alignSelf: "center",
    fontSize: 20,
  }
  ,
  Detailscontainer: {
    borderRadius: 5,
    borderColor: "red",
    //borderWidth: 1,
    display: "flex",
    flexDirection: "row",
    marginHorizontal: 10,
    flexWrap: "wrap",
    marginVertical:5,
  },
  Details: {
    borderRadius: 5,
    borderColor: "blue",
    //borderWidth: 1,
    margin: 3,


  },
  DetailsText: {
    borderRadius: 5,
    //borderColor: "green",
    //borderWidth: 1,
    fontSize: 18,

  },
  descriptionFromReview: {
    borderRadius: 5,
    borderColor: "black",
    //borderWidth: 1,
    fontSize: 16,
    height:100,
    overflow:"visible",
    marginLeft:3,

  },
  
  weathercontainer: {
    borderRadius: 5,
    borderColor: "green",
    //borderWidth: 1,
    display: "flex",
    flexDirection: "column",
    marginHorizontal: 10,

  },
  largetextfield: {
    borderRadius: 5,
    borderColor: "black",
    //borderWidth: 1,
    display: "flex",
    flexDirection: "row",
    marginHorizontal: 10,
  },
  smalltextfield: {
    borderRadius: 5,
    borderColor: "red",
    //borderWidth: 1,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: 10,


  },
  weather_emoji: {
    borderRadius: 5,
    borderColor: "blue",
    //borderWidth: 1,
    //width:"30%",
    alignSelf: "center",
    margin: "auto",


  },
  textWeatherEmoji: {
    borderRadius: 5,
    borderColor: "blue",
    //borderWidth: 1,
    margin: 10,
    fontSize: 100,
  },
  tepmPIcon: {
    borderRadius: 5,
    borderColor: "pink",
    //borderWidth: 1,
    width: "50%",
    display: "flex",
    flexDirection: "column",
    marginHorizontal: 10,
    justifyContent: "space-around",
    marginVertical: 20,
  },
  weather_icon: {
    borderRadius: 5,
    borderColor: "blue",
    //borderWidth: 1,

    fontSize: 32,
    fontWeight: "500"
  },
  temp: {
    borderRadius: 5,
    borderColor: "white",
    //borderWidth: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",

  },
  sftemp: {
    borderRadius: 5,
    borderColor: "blue",
    //borderWidth: 1,
    fontSize: 38,
    fontWeight: "500"
  },


  dataField: {
    borderRadius: 5,
    borderColor: "blue",
    //borderWidth: 1,
    //width:"auto",
    margin: 5,
  },
  keyField: {
    borderRadius: 5,
    borderColor: "pink",
    //borderWidth: 1,
    alignSelf: "center",
    marginBottom: 5,
  },
  valueField: {
    borderRadius: 5,
    borderColor: "blue",
    //borderWidth: 1,
    alignSelf: "center",

  },

});