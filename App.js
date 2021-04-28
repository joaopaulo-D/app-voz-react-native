import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import * as Speech from 'expo-speech';

const App = () => {

  const [text, setText] = useState('');

  const speak = () => {
    Speech.speak(text, {
      linguage: 'pt-BR'
    })
  }

  return(
    <View style={styles.container}>
      <Text style={{ fontSize: 40, fontWeight: 'bold', padding: 40}}>APP DE VOZ</Text>
      <TextInput
        style={styles.input}
        onChangeText={ e => setText(e)}
        placeholder="Digite alguma coisa: "
      />

      <Button
        title="Falar!"
        onPress={speak}
      />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1ed6ff'
  },
  input: {
    width: '90%',
    height: 50,
    borderWidth: 1,
    borderColor: '#121212',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    fontSize: 20,
    color: '#000'
  }
});