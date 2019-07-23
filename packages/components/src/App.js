/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';


const App = () => {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text>Welcome to React Native monorepo..!</Text>
      <Text>count: {count}</Text>
      <Button title='Increment' onPress={() => setCount(count + 1)}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default App;
