import "@/global.css";
import { Link, Slot, Stack, Tabs } from "expo-router";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { Icon } from "@/components/ui/icon";
import {ShoppingCart, User, Heart} from 'lucide-react-native'
import { Pressable } from "react-native";
import { useCart } from "@/store/cartStore";
import { Text } from "react-native-svg";

export default function RootLayout(){

    const cartItemsNum = useCart((state) => state.items.length)
    const wishlistItemsNum = useCart((state) => state.wishlist.length);
    
    return (
        <GluestackUIProvider>
            <Stack screenOptions={{
                headerRight:() => (
                    <Pressable className="flex-row gap-4">
                    {/* Wishlist Icon */}
                    <Link href={"/wishlist"} asChild>
                      <Pressable className="flex-row gap-2">
                        <Icon as={Heart} />
                        <Text>{wishlistItemsNum}</Text>
                      </Pressable>
                    </Link>

                <Link href={'/cart'} asChild>
                    <Pressable className="flex-row gap-2">
                        <Icon as={ShoppingCart} />
                        <Text>{cartItemsNum}</Text>
                    </Pressable>
                </Link> 
                </Pressable>
                ),

                headerLeft:() => (
                <Link href={'/login'} asChild>
                    <Pressable className="flex-row gap-2">
                        <Icon as={User} />
                    </Pressable>
                </Link> 
                ),
            
            }}>
            <Stack.Screen name="index" options={{title : 'Shop'}}/>
            <Stack.Screen name="product/[id]" options={{title : 'Product'}}/>
            </Stack>
        </GluestackUIProvider>
    );
}