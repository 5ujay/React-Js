import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FancxyCard = () => {
  return (
    <View>
      <Text style={styles.heading}>FancxyCard</Text>
      <View>
        <View style={styles.card}>
          <Image
            source={{
              uri: 'https://theheritageart.com/wp-content/uploads/2022/11/gateway-of-india.jpeg',
            }}
            style={styles.image}
          />
          <View style={styles.cardBody}>
            <Text style={styles.title}>Gateway of India</Text>
            <Text style={styles.description}>
              The Gateway of India is an iconic arch-monument located in Mumbai,
              Maharashtra. Built in 1924, it overlooks the Arabian Sea and is a
              major tourist attraction.
            </Text>
            <Text style={styles.famousFor}>
              Famous For: Historical significance, architecture, and scenic
              views.
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default FancxyCard;

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    paddingHorizontal: 10,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 5,
    overflow: 'hidden',
    margin: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  image: {
    height: 200,
    width: '100%',
  },
  cardBody: {
    padding: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  famousFor: {
    fontSize: 14,
    fontWeight: '600',
    color: '#444',
  },
});
