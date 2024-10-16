import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { FoodComponentProps, FoodItem, FoodIndex } from "@/types/types";

const FoodComponent: React.FC<FoodComponentProps> = ({ food }) => {
    return (
      <View style={styles.container}>
        <ScrollView>
        {food.map((data: FoodItem, index: FoodIndex) => (
          <View key={index} style={styles.foodItem}>
            <Image source={{ uri: data.image }} style={styles.image} />
            <Text style={styles.title}>{data.name}</Text>
            <Text style={styles.title}>{data.price}</Text>
          </View>
        ))}
        </ScrollView> 
      </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 9.0,
    justifyContent: 'center',
  },
  foodItem: {
    // Add styles for food item container
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    margin: 10
  },
  image: {
    width: 300,
    aspectRatio: 2/1
  }
});

export default FoodComponent;
