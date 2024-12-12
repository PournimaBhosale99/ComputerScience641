import { useCart } from "@/store/cartStore";
import { Box } from "@/components/ui/box";
import { Text, View } from "react-native";
import { FlatList } from "react-native";
import { HStack } from "@/components/ui/hstack";
import { VStack } from "@/components/ui/vstack";
import { Button, ButtonText } from "@/components/ui/button";
import { useRouter } from "expo-router"; // Using expo-router for navigation
import { TouchableOpacity } from "react-native";
import { Stack } from "expo-router";  // Import Stack from expo-router

export default function HomeScreen() {
  const items = useCart((state) => state.items);
  const resetCart = useCart((state) => state.resetCart);
  const router = useRouter();

  const onCheckout = async () => {
    resetCart();
    router.push("/");  // Redirect to home after checkout
  };

  const calculateTotal = () => {
    return items.reduce((total, item) => {
      return total + item.product.price * item.quantity;
    }, 0).toFixed(2);
  };

  const navigateToShop = () => {
    router.push("/");  // Navigate to the shop screen
  };

  // Always show header (Shop navigation) even if cart is empty
  return (
    <View style={{ flex: 1 }}>
      {/* Define header for navigation */}
      <Stack.Screen
        options={{
          title: "Cart",  // Title for the header
          headerLeft: () => (
            <TouchableOpacity onPress={navigateToShop} style={{ paddingLeft: 10 }}>
              <Text style={{ fontSize: 16, color: 'blue', fontWeight: 'bold' }}>Shop</Text>
            </TouchableOpacity>
          ),
        }}
      />
      
      {/* Show message if cart is empty */}
      {items.length === 0 ? (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Your cart is empty!</Text>
        </View>
      ) : (
        <FlatList
          data={items}
          contentContainerStyle={{
            gap: 2,
            maxWidth: 960,
            width: "100%",
            marginHorizontal: "auto",
            padding: 8,
          }}
          renderItem={({ item }) => (
            <HStack className="bg-white p-3">
              <VStack space="sm">
                <Text bold>{item.product.name}</Text>
                <Text>{item.product.price}</Text>
              </VStack>
              <Text className="ml-auto">{item.quantity}</Text>
            </HStack>
          )}
          ListFooterComponent={() => (
            <VStack>
              <HStack style={{ justifyContent: "space-between", width: "100%", paddingHorizontal: 16 }}>
                <Text style={{ fontWeight: "bold", fontSize: 16 }}>Total:</Text>
                <Text style={{ fontWeight: "bold", fontSize: 16 }}>${calculateTotal()}</Text>
              </HStack>

              <Button onPress={onCheckout}>
                <ButtonText>Checkout</ButtonText>
              </Button>
            </VStack>
          )}
        />
      )}
    </View>
  );
}
