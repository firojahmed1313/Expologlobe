import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './drawer/Home'
import LatinAmerica from './drawer/LatinAmerica';
import Afrika from './drawer/Afrika';
import NorthAmerica from './drawer/NorthAmerica';
import Asia from './drawer/Asia';
import MiddleEast from './drawer/MiddleEast';
import Oceania from './drawer/Oceania';
import Europe from './drawer/Europe';
const DrawerNavi = createDrawerNavigator();

const Drawer = () => {
  return (
    <DrawerNavi.Navigator>
        <DrawerNavi.Screen name='Home' component={Home}/>
        <DrawerNavi.Screen name='Asia' component={Asia}/>
        <DrawerNavi.Screen name='Afrika' component={Afrika}/>
        <DrawerNavi.Screen name='MiddleEast' component={MiddleEast}/>
        <DrawerNavi.Screen name='Oceania' component={Oceania}/>
        <DrawerNavi.Screen name='Europe' component={Europe}/>
        <DrawerNavi.Screen name='NorthAmerica' component={NorthAmerica}/>
        <DrawerNavi.Screen name='LatinAmerica' component={LatinAmerica}/>
    </DrawerNavi.Navigator>
  )
}

export default Drawer

const styles = StyleSheet.create({})