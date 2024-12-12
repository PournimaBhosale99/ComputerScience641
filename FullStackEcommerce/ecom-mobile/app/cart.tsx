import { useCart } from "@/store/cartStore";
import { Box } from "@/components/ui/box"
import { View, Text } from "react-native";
import { FlatList } from "react-native";
import { HStack } from "@/components/ui/hstack";
import { VStack } from "@/components/ui/vstack";
import { Button, ButtonText } from "@/components/ui/button";
import { useRouter,Redirect } from "expo-router";

export default function HomeScreen(){

    const items = useCart((state) => state.items);
    const resetCart = useCart((state) => state.resetCart);
    const router = useRouter();
    const onCheckout = async () => {
        resetCart();
        router.push("/");
    };

    const calculateTotal = () => {
        return items.reduce((total, item) => {
          return total + item.product.price * item.quantity;
        }, 0).toFixed(2);
      };
    

    if(items.length === 0){
        return <Text>Your cart is empty!</Text>
    }

    return (
       
            <FlatList
            data={items}
            contentContainerClassName="gap-2 max-w-[960px] w-full mx-auto p-2"
            renderItem={({item})=>(
                
                    <HStack className="bg-white p-3">
                        <VStack space="sm">
                        <Text bold>{item.product.name}</Text>
                        <Text>{item.product.price}</Text>
                        </VStack>
                        <Text className="ml-auto">{item.quantity}</Text> 
                    </HStack> 
            )}

 /*       ListFooterComponent={()=> (
            <Button onPress={onCheckout}>
                <ButtonText>Checkout</ButtonText>
            </Button>
        )} */

            ListFooterComponent={() => (
                <VStack>
                  {/* Total Section */}
                  <HStack style={{ justifyContent: "space-between", width: "100%", paddingHorizontal: 16 }}>
                    <Text style={{ fontWeight: "bold", fontSize: 16 }}>Total:</Text>
                    <Text style={{ fontWeight: "bold", fontSize: 16 }}>${calculateTotal()}</Text>
                  </HStack>
                  {/* Checkout Button */}
                  <Button onPress={onCheckout}>
                    <ButtonText>Checkout</ButtonText>
                  </Button>
                  
                </VStack>
              )}
            /> 
        
    );
}