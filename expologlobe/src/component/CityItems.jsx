import { ActivityIndicator, StyleSheet, Text, View, Image, TouchableOpacity ,SafeAreaView,FlatList} from "react-native";
import React from 'react'

const CityItems = ({itemlist}) => {
  return (
    <View style={styles.container} >
        <View style={styles.imagecontainer}>
            <Image resizeMode="cover" source={{uri:(itemlist.image)}  }  style={styles.frontImage} />
        </View>
        <View style={styles.textcontainer}>
            <Text style={styles.title}>{itemlist.rank}</Text>
        </View>
        
      

    </View>
  )
}

export default CityItems


const styles = StyleSheet.create({
    container:{
      borderRadius:10,
      borderColor:"black",
      borderWidth:1,
      marginHorizontal:5,
      marginVertical:7,
  
    },
    imagecontainer:{
        width:"100%",
        borderColor:"red",

    },
    frontImage:{
        borderRadius:10,
        height:undefined,
        width:"100%",
        aspectRatio:1.5,
    }
    ,
    textcontainer:{
        borderRadius:5,
      borderColor:"black",
      borderWidth:1,
      marginHorizontal:5,
      marginVertical:7,
    }
});