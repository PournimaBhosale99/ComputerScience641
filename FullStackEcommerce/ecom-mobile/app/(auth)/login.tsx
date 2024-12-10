/*import { FormControl } from "@/components/ui/form-control";
import { Heading } from "@/components/ui/heading";
import { VStack } from "@/components/ui/vstack";
import { Text } from "@/components/ui/text";
import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input";
import { EyeIcon, EyeOffIcon } from "lucide-react-native";
import { Button, ButtonText } from "@/components/ui/button";
import { useState } from "react";
import React from "react";
import { HStack } from "@/components/ui/hstack";
import { auth } from "@/config/firebaseConfig"; // Import Firebase auth
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { Alert } from "react-native";

export default function LoginScreen() {
    const [showPassword, setShowPassword] = useState(false);
    const handleState = () => {
      setShowPassword((showState) => {
        return !showState;
      });
    }; 


    export default function LoginScreen() {
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [showPassword, setShowPassword] = useState(false);

        const handleState = () => {
            setShowPassword((showState) => {
              return !showState;
            });
        };
      
        const handleSignUp = async () => {
          try {
            await createUserWithEmailAndPassword(auth, email, password);
            Alert.alert("Success", "User registered successfully!");
          } catch (error) {
            Alert.alert("Error", error.message);
          }
        };
      
        const handleSignIn = async () => {
          try {
            await signInWithEmailAndPassword(auth, email, password);
            Alert.alert("Success", "Logged in successfully!");
          } catch (error) {
            Alert.alert("Error", error.message);
          }
        };


    return (
      <FormControl
        className='p-4 border rounded-lg mx-w-[500px] border-outline-300 bg-white m-2'
      >
        <VStack space='xl'>
          <Heading className='text-typography-900 leading-3 pt-3'>
            Login
          </Heading>
          <VStack space='xs'>
            <Text className='text-typography-500 leading-1'>
              Email
            </Text>
            <Input>
              <InputField
                type="text"
              />
            </Input>
          </VStack>
          <VStack space='xs'>
            <Text className='text-typography-500 leading-1'>
              Password
            </Text>
            <Input className='text-center'>
              <InputField
                type={showPassword ? 'text' : 'password'}
              />
              <InputSlot className='pr-3' onPress={handleState}>
                
                <InputIcon as={showPassword ? EyeIcon : EyeOffIcon} className='text-darkBlue-500' />
              </InputSlot>
            </Input>
          </VStack>
          <HStack space="sm">
          <Button className='flex-1' variant="outline" onPress={ handleSignUp }>
            <ButtonText>
              Sign Up
            </ButtonText>
          </Button>

          <Button className='flex-1' onPress={ handleSignIn }>
            <ButtonText className='text-typography-0'>
              Sign In
            </ButtonText>
          </Button>
          </HStack>
        </VStack>
      </FormControl>
    );
  }
*/

import { FormControl } from "@/components/ui/form-control";
import { Heading } from "@/components/ui/heading";
import { VStack } from "@/components/ui/vstack";
import { Text } from "@/components/ui/text";
import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input";
import { EyeIcon, EyeOffIcon } from "lucide-react-native";
import { Button, ButtonText } from "@/components/ui/button";
import { useState } from "react";
import React from "react";
import { HStack } from "@/components/ui/hstack";
import { auth } from "@/config/firebaseConfig"; // Import Firebase auth
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { Alert } from "react-native";
import { Redirect ,useRouter} from "expo-router";

export default function LoginScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();
    const handleState = () => {
        setShowPassword((showState) => !showState);
    };

    const handleSignUp = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            console.log("Success", "User registered successfully!");
        } catch (error) {
            Alert.alert("Error", error.message);
        }
    };

    const handleSignIn = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log("Success", "Logged in successfully!");
            router.push("/");
        } catch (error) {
            Alert.alert("Error", error.message);
        }
    };

    
    return (
        <FormControl className='p-4 border rounded-lg mx-w-[500px] border-outline-300 bg-white m-2'>
            <VStack space='xl'>
                <Heading className='text-typography-900 leading-3 pt-3'>
                    Login
                </Heading>
                <VStack space='xs'>
                    <Text className='text-typography-500 leading-1'>
                        Email
                    </Text>
                    <Input>
                        <InputField
                            type="text"
                            value={email}
                            onChangeText={setEmail}
                        />
                    </Input>
                </VStack>
                <VStack space='xs'>
                    <Text className='text-typography-500 leading-1'>
                        Password
                    </Text>
                    <Input className='text-center'>
                        <InputField
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChangeText={setPassword}
                        />
                        <InputSlot className='pr-3' onPress={handleState}>
                            <InputIcon as={showPassword ? EyeIcon : EyeOffIcon} className='text-darkBlue-500' />
                        </InputSlot>
                    </Input>
                </VStack>
                <HStack space="sm">
                    <Button className='flex-1' variant="outline" onPress={() => handleSignUp()}>
                        <ButtonText>
                            Sign Up
                        </ButtonText>
                    </Button>

                    <Button className='flex-1' onPress={() => handleSignIn()}>
                        <ButtonText className='text-typography-0'>
                            Sign In
                        </ButtonText>
                    </Button>
                </HStack>
            </VStack>
        </FormControl>
    );
}
