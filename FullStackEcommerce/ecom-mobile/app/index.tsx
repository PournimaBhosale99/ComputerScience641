/*import { View, Text, FlatList, useWindowDimensions } from "react-native";
import products from '../assets/products.json'
import ProductListItem from "../components/ProductListItem";
import { useBreakpointValue } from "@/components/ui/utils/use-break-point-value";

import React, { useEffect } from "react";
import { addAllProducts } from "@/components/ui/utils/importProducts"; // Import the function to upload products



export default function HomeScreen(){
   useEffect(() => {
        // Call the function to upload products to Firestore
        addAllProducts();
      }, []); 
    
      
    const numColumns = useBreakpointValue({
        default : 2,
        sm : 3,
        xl :4
    })

    return (
        <FlatList 
        key = {numColumns}
        data={products}
        numColumns={numColumns}
        contentContainerClassName="gap-2 max-w-[960px] m-auto w-full"
        columnWrapperClassName="gap-2"
        renderItem={({item})=><ProductListItem product={item}/>}
        />
    );
}
*/

import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from "react-native";
import { collection, getDocs } from 'firebase/firestore';
import ProductListItem from "../components/ProductListItem";
import { useBreakpointValue } from "@/components/ui/utils/use-break-point-value";
import { db } from '@/config/firebaseConfig';

export default function HomeScreen() {
  const [products, setProducts] = useState([]);
  const numColumns = useBreakpointValue({
    default: 2,
    sm: 3,
    xl: 4,
  });

  useEffect(() => {
    const fetchProducts = async () => {
      const productsCollection = collection(db, 'products');
      const productsSnapshot = await getDocs(productsCollection);
      const productList = productsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(productList);
    };

    fetchProducts();
  }, []);

  return (
    <FlatList
      key={numColumns}
      data={products}
      numColumns={numColumns}
      contentContainerClassName="gap-2 max-w-[960px] m-auto w-full"
      columnWrapperClassName="gap-2"
      renderItem={({ item }) => <ProductListItem product={item} />}
    />
  );
}

