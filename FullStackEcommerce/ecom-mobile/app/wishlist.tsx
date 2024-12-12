import React from "react";
import { useCart } from "@/store/cartStore";
import { FlatList, View } from "react-native";
import { Text } from "@/components/ui/text";
import { HStack } from "@/components/ui/hstack";
import { VStack } from "@/components/ui/vstack";
import { Button, ButtonText } from "@/components/ui/button";
import { Stack } from "expo-router";  // Import Stack from expo-router
import { useRouter } from "expo-router";  // Using router for navigation
import { TouchableOpacity } from "react-native";

export default function WishlistScreen() {
  const wishlist = useCart((state) => state.wishlist);
  const removeFromWishlist = useCart((state) => state.removeFromWishlist);
  const router = useRouter();

  // Navigate to the shop screen
  const navigateToShop = () => {
    router.push("/");
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Header with Shop navigation */}
      <Stack.Screen
        options={{
          title: "Wishlist",
          headerLeft: () => (
            <TouchableOpacity onPress={navigateToShop} style={{ paddingLeft: 10 }}>
              <Text style={{ fontSize: 16, color: 'blue', fontWeight: 'bold' }}>Shop</Text>
            </TouchableOpacity>
          ),
        }}
      />

      {/* If wishlist is empty */}
      {wishlist.length === 0 ? (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Your wishlist is empty!</Text>
        </View>
      ) : (
        <FlatList
          data={wishlist}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <HStack className="bg-white p-3">
              <VStack space="sm">
                <Text bold>{item.name}</Text>
                <Text>${item.price}</Text>
              </VStack>
              <Button onPress={() => removeFromWishlist(item.id)} className="ml-auto">
                <ButtonText>Remove</ButtonText>
              </Button>
            </HStack>
          )}
          contentContainerClassName="gap-2 max-w-[960px] w-full mx-auto p-2"
        />
      )}
    </View>
  );
}
