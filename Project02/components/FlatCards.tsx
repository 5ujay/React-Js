import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FlatCards = () => {
  return (
    <View>
      <Text style={styles.heading}>FlatCards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text style={styles.cardText}>One</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text style={styles.cardText}>Two</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text style={styles.cardText}>Three</Text>
        </View>
        <View style={[styles.card, styles.cardOne]}>
          <Text style={styles.cardText}>One</Text>
        </View>
      </View>
    </View>
  );
};

export default FlatCards;

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    paddingHorizontal: 10,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 5,
    margin: 10,
  },
  cardOne: {backgroundColor: 'red'},
  cardTwo: {backgroundColor: 'green'},
  cardThree: {backgroundColor: 'blue'},
  cardText: {color: 'white', fontSize: 16},
});
