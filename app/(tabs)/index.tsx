import { StyleSheet } from 'react-native';
import { Image } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

import Food from '../../assets/data/Food'



export default function TabOneScreen() {
  return (
    <View style={styles.container}>

<Image source = {{uri:Food[0].image}} 
      style = {styles.image}
      />
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.title}>{Food[0].name}</Text>
      <Text style={styles.title}>{Food[0].price}</Text>
      
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
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
