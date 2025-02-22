import {View, Text, useColorScheme, StyleSheet} from 'react-native';
import React from 'react';

const AppPro = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.conatiner}>
      <Text style={isDarkMode ? styles.lightText : styles.darkText}>
        AppPro
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightText: {
    color: '#fff',
  },
  darkText: {
    color: '#000',
  },
});

export default AppPro;
