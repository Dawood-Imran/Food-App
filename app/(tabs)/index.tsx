import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import FoodComponent from '@/components/FoodComponent';

import Food from '@/assets/data/Food';






export default function TabOneScreen() {
  return (
    <View  style = {styles.container}>
      <FoodComponent food = {Food} />
         
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})


