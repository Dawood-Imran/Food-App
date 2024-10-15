import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'

const CustomNavbar = () => {
  return (
    <View style = {styles.container}>
    
    <View style={styles.meals}>
    <Text>Meals</Text>
    </View>

    <View style = {styles.sides}>
    <Text>Sides</Text>
    </View>

    <View style = {styles.deals}>
    <Text>Deals</Text>
    </View>
      
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:0.2,
    backgroundColor:'white',
    
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  meals:{
    backgroundColor:'red',
    color:'white',
  },
  sides:{
    backgroundColor:'blue',
    color:'white',
  },
  deals:{
    backgroundColor:'green',
    color:'white',
  }
})


export default CustomNavbar