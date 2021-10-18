import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Text>Yo, my first launch on simulator!</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  container: {
    height: '100%',
  },
});

export default App;
