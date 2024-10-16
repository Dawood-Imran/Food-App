import { StyleSheet } from 'react-native';
import { View } from '@/components/Themed';
import FoodComponent from '@/components/FoodComponent';
import { FoodArray } from '@/types/types';
import Food from '@/assets/data/Food';
import CustomNavbar from '@/components/CustomNavbar';






export default function TabOneScreen() {
  const foodData: FoodArray = Food;

  return (
    <View style={styles.container}>
      <CustomNavbar />
      <FoodComponent food={foodData} />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    
  },
})


