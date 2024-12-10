import React from "react";
import { useCart } from "@/store/cartStore";
import { FlatList } from "react-native";
import { Text } from "@/components/ui/text";
import { HStack } from "@/components/ui/hstack";
import { VStack } from "@/components/ui/vstack";
import { Button, ButtonText } from "@/components/ui/button";
import { Box } from "@/components/ui/box";

export default function WishlistScreen() {
  const wishlist = useCart((state) => state.wishlist);
  const removeFromWishlist = useCart((state) => state.removeFromWishlist);

  if (wishlist.length === 0) {
    return <Text>Your wishlist is empty!</Text>;
  }

  return (
    <FlatList
      data={wishlist}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <HStack className="bg-white p-3">
          <VStack space="sm">
            <Text bold>{item.name}</Text>
            <Text>${item.price}</Text>
          </VStack>
          <Button
            onPress={() => removeFromWishlist(item.id)}
            className="ml-auto"
          >
            <ButtonText>Remove</ButtonText>
          </Button>
        </HStack>
      )}
      contentContainerClassName="gap-2 max-w-[960px] w-full mx-auto p-2"
    />
  );
}
