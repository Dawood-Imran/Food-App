// Define the structure for a single food item
export interface FoodItem {
  id: string;
  name: string;
  price: string;
  image: string;
  description?: string; // Optional field
}

// Define the type for the food array
export type FoodArray = FoodItem[];

// Define the props for the FoodComponent
export interface FoodComponentProps {
  food: FoodArray;
}

// Define the type for the index in the map function
export type FoodIndex = number;
