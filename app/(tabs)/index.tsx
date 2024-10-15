import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import FoodComponent from '@/components/FoodComponent';

import Food from '@/assets/data/Food';
import CustomNavbar from '@/components/CustomNavbar';






export default function TabOneScreen() {
  return (
    <View  style = {styles.container}>
      <CustomNavbar/>
      <FoodComponent food = {Food} />
         
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    
  },
})


