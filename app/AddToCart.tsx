import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'


const AddToCart = () => {

  const sizes = ['S','M','L','XL'] 
  const [size, setSize] = React.useState('S')

  const sizeSelected = (size: string) => {
    setSize(size)   
    console.log(size)
  }


  return (
    <View>
      <Text style = {{color: 'red'}}>AddToCart</Text>

    <View style = {{flexDirection: 'row', justifyContent: 'space-around'}}>
      {sizes.map(
        (data)=>{
          return(
            <Pressable style = {[styles.sizes,{backgroundColor: size === data ? 'grey' : 'lightgrey'}]} onPress={()=>sizeSelected(data)}>

            <Text style = {styles.text}>{data}</Text>
            </Pressable>
          )
        }
        )}
        </View>

    </View>
  )
}

const styles = StyleSheet.create({
  sizes:{
    color:'red',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    borderRadius: 50,
  },
  text:{
    color: 'red',
    fontSize: 20
  }
})


export default AddToCart