import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ElivatedCards = () => {
  return (
    <View>
      <Text style={styles.heading}>ElivatedCards</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.card }>
            <Text style={styles.cardText}>Tap</Text>
        </View>
        <View style={styles.card }>
            <Text style={styles.cardText}>Me</Text>
        </View>
        <View style={styles.card }>
            <Text style={styles.cardText}>To</Text>
        </View>
        <View style={styles.card }>
            <Text style={styles.cardText}>Scroll</Text>
        </View>
        <View style={styles.card }>
            <Text style={styles.cardText}>Horizontal</Text>
        </View>
        <View style={styles.card }>
            <Text style={styles.cardText}>with</Text>
        </View>
        <View style={styles.card }>
            <Text style={styles.cardText}>ScrollView</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default ElivatedCards;

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    paddingHorizontal: 10,
    fontWeight: 'bold',
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 5,
    margin: 10,
    backgroundColor:"gray",
  },
  cardText: {color: 'white', fontSize: 16},
});
