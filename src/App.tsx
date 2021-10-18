import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.safe}>
      <View />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
});

export default App;
