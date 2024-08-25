import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View, SafeAreaView } from 'react-native';

export default function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const handleSum = () => {
    const sum = parseFloat(num1) + parseFloat(num2);
    setResult(sum);
  };

  const handleSubtraction = () => {
    const difference = parseFloat(num1) - parseFloat(num2);
    setResult(difference);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Ajayi's Calculator</Text>

      {result !== null && (
        <Text style={styles.result}>Result: {result}</Text>
      )}

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter first number"
        value={num1}
        onChangeText={setNum1}
      />

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter second number"
        value={num2}
        onChangeText={setNum2}
      />

      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title=" Plus (+) " onPress={handleSum} />
        </View>
        <View style={styles.button}>
          <Button title=" Minus (-) " onPress={handleSubtraction} />
        </View>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    fontSize: 18,
    backgroundColor: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
  },
  result: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 20,
  },
});
