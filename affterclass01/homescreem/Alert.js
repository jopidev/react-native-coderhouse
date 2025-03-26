import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const createTwoButtonAlert = () =>
    Alert.alert("Titulo de Alerta");


  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button title=" -Alert- " onPress={createTwoButtonAlert} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
