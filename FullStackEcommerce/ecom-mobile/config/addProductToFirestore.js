import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";// Import the Firestore instance

const addProductToFirestore = async (product) => {
  try {
    const docRef = await addDoc(collection(db, "products"), {
      name: product.name,
      description: product.description,
      image: product.image,
      price: product.price,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export { addProductToFirestore }; 
