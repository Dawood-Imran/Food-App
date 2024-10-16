import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, Pressable } from "react-native";
import { FoodComponentProps, FoodItem } from "@/types/types";
import { Link } from 'expo-router';

const Item = ({ item }: { item: FoodItem }) => (
  <Link href="/AddToCart" asChild>
  <Pressable style={styles.foodItem}>
    <Image source={{ uri: item.image }} style={styles.image} />
    <Text style={styles.name}>{item.name}</Text>
    <Text style={styles.price}>{item.price}</Text>
    
    
  </Pressable>
  </Link>
);

const FoodComponent: React.FC<FoodComponentProps> = ({ food }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={food}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
        columnWrapperStyle={styles.columnWrapper}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    padding: 10,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  foodItem: {
    width: '48%',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 10,
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  price: {
    fontSize: 14,
    color: '#888',
    marginBottom: 10,
  },
  cartButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 5,
  },
  cartButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default FoodComponent;
