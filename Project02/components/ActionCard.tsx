import {
    Image,
    Linking,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React from 'react';
  
  const ActionCard = () => {
    const onClickLink = (websiteLink: string) => {
      Linking.openURL(websiteLink);
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Action Card</Text>
        <View style={styles.card}>
          <Image
            source={{
              uri: 'https://www.optimalvirtualemployee.com/wp-content/uploads/2022/12/Web-Developer-skill-1200x682.jpg',
            }}
            style={styles.image}
          />
          <View style={styles.cardBody}>
            <Text style={styles.title}>Web Developer</Text>
            <Text style={styles.description}>
              A web developer is responsible for designing, coding, and modifying websites,
              ensuring a seamless user experience and functionality.
            </Text>
            <Text style={styles.famousFor}>
              Famous For: Web Development, Software Engineering, Coding, and Programming.
            </Text>
            <View style={styles.buttonsContainer}>
              <TouchableOpacity
                style={[styles.button, { backgroundColor: '#0077B5' }]}
                onPress={() => onClickLink('https://www.linkedin.com/in/sujay-pagam/')}
              >
                <Text style={styles.buttonText}>LinkedIn</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, { backgroundColor: '#333' }]}
                onPress={() => onClickLink('https://github.com/5ujay')}
              >
                <Text style={styles.buttonText}>GitHub</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  };
  
  export default ActionCard;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingVertical: 20,
    },
    heading: {
      fontSize: 28,
      fontWeight: 'bold',
      marginVertical: 15,
      textAlign: 'center',
      color: '#222',
    },
    card: {
      backgroundColor: '#fff',
      borderRadius: 15,
      overflow: 'hidden',
      marginHorizontal: 20,
      elevation: 10,
      shadowColor: '#000',
      shadowOffset: { width: 3, height: 3 },
      shadowOpacity: 0.3,
      shadowRadius: 6,
    },
    image: {
      height: 220,
      width: '100%',
    },
    cardBody: {
      padding: 20,
      alignItems: 'center',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#222',
      marginBottom: 8,
    },
    description: {
      fontSize: 16,
      color: '#555',
      marginBottom: 10,
      textAlign: 'center',
      paddingHorizontal: 10,
    },
    famousFor: {
      fontSize: 14,
      fontWeight: '600',
      color: '#444',
      textAlign: 'center',
      marginBottom: 15,
    },
    buttonsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      paddingHorizontal: 20,
    },
    button: {
      flex: 1,
      paddingVertical: 12,
      alignItems: 'center',
      marginHorizontal: 10,
      borderRadius: 8,
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });