import auth from '@react-native-firebase/auth';

// Function to register a new user
export const registerWithEmail = async (email, password) => {
    try {
        const userCredential = await auth().createUserWithEmailAndPassword(email, password);
        return userCredential;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

// Function to sign in a user
export const loginWithEmail = async (email, password) => {
    try {
        const userCredential = await auth().signInWithEmailAndPassword(email, password);
        return userCredential;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

// Function to sign out a user
export const logout = async () => {
    try {
        await auth().signOut();
    } catch (error) {
        console.error(error);
        throw error;
    }
};
