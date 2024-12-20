
import React, { useEffect, useState } from 'react';
import { Text } from "@/components/ui/text";
import { Card } from "@/components/ui/card";
import { VStack } from "@/components/ui/vstack";
import { Heading } from "@/components/ui/heading";
import { Box } from "@/components/ui/box";
import { Button, ButtonText } from "@/components/ui/button";
import { Image } from "@/components/ui/image";
import { Stack, useLocalSearchParams } from "expo-router";
import { doc, getDoc } from 'firebase/firestore';
import { useCart } from "@/store/cartStore";
import { db } from '@/config/firebaseConfig';
import { useRouter,Redirect } from "expo-router";
import { TouchableOpacity } from 'react-native';

export default function ProductDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [product, setProduct] = useState(null);
  const addProduct = useCart((state) => state.addProduct);
  const cartItems = useCart(state => state.items);
  const addToWishlist = useCart((state) => state.addToWishlist);
  const router = useRouter();

  useEffect(() => {
    const fetchProduct = async () => {
      const productDoc = doc(db, 'products', id);
      const productSnapshot = await getDoc(productDoc);
      if (productSnapshot.exists()) {
        setProduct({ id: productSnapshot.id, ...productSnapshot.data() });
      }
    };
    if (id) fetchProduct();
  }, [id]);

  if (!product) {
    return <Text>Loading...</Text>;
  }

  const addToCart = () => {
    addProduct(product);
  };

  const navigateToShop = () => {
    router.push('/');  // Navigate to the shop screen
  };

  return (
    <Box className="flex-1 items-center p=3">
      <Stack.Screen options={{ title: product.name,
        headerLeft: () => (
           <TouchableOpacity onPress={navigateToShop} style={{ paddingLeft: 10 }}>
              <Text style={{ fontSize: 16, color: 'blue', fontWeight: 'bold' }}>Shop</Text>
            </TouchableOpacity>
        ) 
       }} />

      <Card className="p-5 rounded-lg max-w-[960px] w-full m-3 flex-1">
        <Image
          source={{ uri: product.image }}
          className="mb-6 h-[240px] w-full rounded-md"
          alt={`${product.name} image`}
          resizeMode="contain"
        />
        <Text className="text-sm font-normal mb-2 text-typography-700">
          {product.name}
        </Text>
        <VStack className="mb-6">
          <Heading size="md" className="mb-4">
            ${product.price}
          </Heading>
          <Text size="sm">{product.description}</Text>
        </VStack>
        <Box className="flex-col sm:flex-row">
          <Button onPress={addToCart} className="px-4 py-2 mr-0 mb-3 sm:mr-3 sm:mb-0 sm:flex-1">
            <ButtonText size="sm">Add to cart</ButtonText>
          </Button>
          <Button
            variant="outline"
            onPress={() => addToWishlist(product)}
            className="px-4 py-2 border-outline-300 sm:flex-1"
          >
            <ButtonText size="sm" className="text-typography-600">
              Wishlist
            </ButtonText>
          </Button>
        </Box>
      </Card>
    </Box>
  );
}
