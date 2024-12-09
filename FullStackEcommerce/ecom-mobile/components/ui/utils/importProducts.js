// Import the products data and the function to add data
import products from "@/assets/products.json"; // Your JSON file
import { addProductToFirestore } from "@/config/addProductToFirestore"; // Import the Firestore add function

// Function to add all products from the JSON file to Firestore
export const addAllProducts = async () => {
  for (const product of products) {
    await addProductToFirestore(product);  // Call the function that adds each product
  }
};
