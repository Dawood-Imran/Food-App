import { View, Text, Image } from "react-native"
import { StyleSheet } from "react-native"
import Food from "@/assets/data/Food"

const  FoodComponent = ({food}) => {

    return(
    <View style={styles.container}>
  <Image source = {{uri:food[0].image}} 
        style = {styles.image}
        />
        
        <Text style={styles.title}>{food[0].name}</Text>
        <Text style={styles.title}>{food[0].price}</Text>
  
        <Image source = {{uri:food[1].image}} 
        style = {styles.image}
        />
        
        <Text style={styles.title}>{food[1].name}</Text>
        <Text style={styles.title}>{food[1].price}</Text>
  

    </View>)
  }


  const styles = StyleSheet.create({
    container: {
      
      justifyContent: 'center',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white',
      margin: 10
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    },
    image:{
      width: 300,
      aspectRatio: 2/1
    }
  });
  
  export default FoodComponent





