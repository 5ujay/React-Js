import { StyleSheet, Text, View, Pressable } from 'react-native';
import React, { JSX } from 'react';

interface CurrencyButtonProps {
  flag: string;
  name: string;
  onPress: () => void;
}

const CurrencyButton = ({ flag, name, onPress }: CurrencyButtonProps): JSX.Element => {
  return (
    <Pressable onPress={onPress} style={styles.buttonContainer}>
      <Text style={styles.flag}>{flag}</Text>
      <Text style={styles.country}>{name}</Text>
    </Pressable>
  );
};

export default CurrencyButton;

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    margin: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  flag: {
    fontSize: 28,
    color: '#000',
  },
  country: {
    fontSize: 14,
    color: '#2d3436',
    fontWeight: '600',
  },
});
