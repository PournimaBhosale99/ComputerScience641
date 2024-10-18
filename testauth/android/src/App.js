import React, { useState } from 'react';
import { View, TextInput, Button, Alert, Text } from 'react-native';
import { registerWithEmail, loginWithEmail } from './authlogic';

const AuthScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async () => {
        try {
            await registerWithEmail(email, password);
            Alert.alert('Success', 'User registered successfully!');
        } catch (error) {
            Alert.alert('Error', error.message);
        }
    };

    const handleLogin = async () => {
        try {
            await loginWithEmail(email, password);
            Alert.alert('Success', 'User logged in successfully!');
        } catch (error) {
            Alert.alert('Error', error.message);
        }
    };

    return (
        <View style={{ padding: 20 }}>
            <Text>Email:</Text> {/* Wrap the text "Email" in a Text component */}
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                style={{ marginBottom: 10, borderWidth: 1, borderColor: '#ccc', padding: 10 }}
            />
            <Text>Password:</Text> {/* Wrap the text "Password" in a Text component */}
            <TextInput
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
                style={{ marginBottom: 10, borderWidth: 1, borderColor: '#ccc', padding: 10 }}
            />
            <Button title="Register" onPress={handleRegister} />
            <Button title="Login" onPress={handleLogin} />
        </View>
    );
};

export default AuthScreen;
