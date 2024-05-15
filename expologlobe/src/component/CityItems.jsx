import { ActivityIndicator, StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, FlatList } from "react-native";
import React from 'react'

const CityItems = ({ itemlist }) => {

  return (


    <View style={styles.container} key={itemlist.rank}>
      <View style={styles.imagecontainer}>
        <Image resizeMode="cover" source={{ uri: (itemlist.image) }} style={styles.frontImage} />
      </View>
      <View style={styles.textcontainer}>
        <Text style={styles.title}> {itemlist.rank}</Text>
        <View style={styles.Detailscontainer}>

          <View style={styles.Details}>
            <Text style={styles.DetailsText}>Name : {itemlist.name}</Text>
          </View>
          <View style={styles.Details}>
            <Text style={styles.DetailsText}>Population : {((itemlist.population) / 1000000).toFixed(2)} M</Text>
          </View>
          <View style={styles.Details}>
            <Text style={styles.DetailsText}>latitude : {(parseFloat(itemlist.latitude)).toFixed(2)}</Text>
          </View>
          <View style={styles.Details}>
            <Text style={styles.DetailsText}>longitude : {(parseFloat(itemlist.longitude)).toFixed(2)}</Text>
          </View>
          <View style={styles.Details}>
            <Text style={styles.DetailsText}>Country : {itemlist.country}</Text>
          </View>
          <View style={styles.Details}>
            <Text style={styles.DetailsText}>Region : {itemlist.region}</Text>
          </View>
          
          <View style={styles.descriptionFromReview}>
            <Text style={styles.DetailsText}> DescriptionFromReview : {(itemlist.descriptionFromReview)?.substring(0,100)}...</Text>
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
                <Text style={{ fontSize: 20,textAlign:"center" }}>{itemlist.weather_icon}</Text>
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
                <Text style={{ fontSize: 16 }} >Air Quality Score</Text>
              </View>
              <View style={styles.valueField}>
                <Text style={{ fontSize: 20 }}>{itemlist.air_quality_score}</Text>
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
                <Text style={{ fontSize: 16 }} >Internet Speed</Text>
              </View>
              <View style={styles.valueField}>
                <Text style={{ fontSize: 20 }}>{(itemlist.internet_speed)?.toFixed(2)}</Text>
              </View>
            </View>

            <View style={styles.dataField}>
              <View style={styles.keyField}>
                <Text style={{ fontSize: 16 }} >Cost Score</Text>
              </View>
              <View style={styles.valueField}>
                <Text style={{ fontSize: 20 }}>{(itemlist.cost_score)?.toFixed(2)}</Text>
              </View>
            </View>
           
            <View style={styles.dataField}>
              <View style={styles.keyField}>
                <Text style={{ fontSize: 16 }} >Cost Nomad</Text>
              </View>
              <View style={styles.valueField}>
                <Text style={{ fontSize: 20 }}> $ {(itemlist.cost_for_nomad_in_usd)?.toFixed(2)}</Text>
              </View>
            </View>
            <View style={styles.dataField}>
              <View style={styles.keyField}>
                <Text style={{ fontSize: 16 }} >Cost Local</Text>
              </View>
              <View style={styles.valueField}>
                <Text style={{ fontSize: 20 }}> $ {(itemlist.cost_for_local_in_usd)?.toFixed(2)}</Text>
              </View>
            </View>
            <View style={styles.dataField}>
              <View style={styles.keyField}>
                <Text style={{ fontSize: 16 }} >Cost Family</Text>
              </View>
              <View style={styles.valueField}>
                <Text style={{ fontSize: 20 }}> $ {(itemlist.cost_for_family_in_usd)?.toFixed(2)}</Text>
              </View>
            </View>
            <View style={styles.dataField}>
              <View style={styles.keyField}>
                <Text style={{ fontSize: 16 }} >Cost Expat</Text>
              </View>
              <View style={styles.valueField}>
                <Text style={{ fontSize: 20 }}> $ {(itemlist.cost_for_expat_in_usd)?.toFixed(2)}</Text>
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
                <Text style={{ fontSize: 20 }}>{(itemlist.total_score)?.toFixed(2)}</Text>
              </View>
            </View>
            <View style={styles.dataField}>
              <View style={styles.keyField}>
                <Text style={{ fontSize: 16 }} >Overall Score</Text>
              </View>
              <View style={styles.valueField}>
                <Text style={{ fontSize: 20 }}>{(itemlist.overall_score)?.toFixed(2)}</Text>
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
    //borderWidth: 1,
    marginHorizontal: 5,
    marginVertical: 7,
    backgroundColor: "#cbf7f7",


  },
  imagecontainer: {
    width: "94%",
    //borderColor: "red",
    marginTop:4,
    marginHorizontal:"3%",

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
    color: "white",
    //borderWidth: 1,
    backgroundColor:"linear-gradient(315deg, #d8d3d3, #fffafa)",
  },
  title: {
    alignSelf: "center",
    color: "blue",
    borderColor: "blue",
    backgroundColor:"red",
    color:"white",
    //borderWidth: 2,
    width: 100,
    height: 100,

    textAlign: "center",
    fontWeight:"bold",
    fontSize: 40,
    textAlignVertical:"center",
    marginTop:5,
  },
  Detailscontainer: {
    borderRadius: 5,
    borderColor: "red",
    //borderWidth: 1,
    display: "flex",
    flexDirection: "row",
    marginHorizontal: 10,
    flexWrap: "wrap",
    marginVertical: 5,
    backgroundColor:"#f0eaea",
  },
  Details: {
    borderRadius: 5,
    borderColor: "blue",
    //borderWidth: 1,
    margin: 5,
    backgroundColor:"white",
    paddingHorizontal: 5,
  },
  DetailsText: {
    borderRadius: 5,
    borderColor: "green",
    //borderWidth: 1,
    fontSize: 18,
    padding:3
  },
  descriptionFromReview: {
    borderRadius: 5,
    borderColor: "black",
    //borderWidth: 1,
    fontSize: 16,
    height: "auto",
    overflow: "visible",
    marginLeft: 3,
    backgroundColor:"white",
    marginBottom: 4,

  },

  weathercontainer: {
    borderRadius: 5,
    borderColor: "green",
    //borderWidth: 1,
    display: "flex",
    flexDirection: "column",
    marginHorizontal: 10,
    backgroundColor:"#f0eaea",
    marginBottom:4,

  },
  largetextfield: {
    borderRadius: 5,
    borderColor: "black",
    //borderWidth: 1,
    display: "flex",
    flexDirection: "row",
    marginHorizontal: 10,
    backgroundColor:"white",
    marginVertical:4,
    
  },
  smalltextfield: {
    borderRadius: 5,
    borderColor: "red",
    //borderWidth: 1,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: 10,
    backgroundColor:"white",
    marginVertical:4,
    paddingBottom:4,


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
    margin: 3,
    backgroundColor:"green",
    paddingHorizontal:2,
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