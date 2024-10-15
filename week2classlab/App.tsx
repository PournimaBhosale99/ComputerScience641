import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, Image, ActivityIndicator } from 'react-native';
import FunctionalComponent from './components/FunctionalComponent';



export default function App() {
  return (
    <ScrollView>
      <Text>Text 1</Text>
      <Text>text 2</Text>
      <ActivityIndicator></ActivityIndicator>
      <FunctionalComponent exampleVar={'Hello'} buttonTitle={'One'}/>
      <FunctionalComponent exampleVar={'Bye'} buttonTitle={'Two'}/>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinyLogo: {
    width: 500,
    height: 500,
  },
});