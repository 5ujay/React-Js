import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ContactList = () => {
  const ContactData = [
    {
      _id: '1a2b3c4d',
      name: 'Alice Johnson',
      msg: 'Hello, how are you?',
      image: 'https://via.placeholder.com/150',
    },
    {
      _id: '2b3c4d5e',
      name: 'Bob Smith',
      msg: 'Just checking in!',
      image: 'https://via.placeholder.com/150',
    },
    {
      _id: '3c4d5e6f',
      name: 'Charlie Brown',
      msg: "Let's meet up later.",
      image: 'https://via.placeholder.com/150',
    },
    {
      _id: '4d5e6f7g',
      name: 'David Wilson',
      msg: 'Good morning!',
      image: 'https://via.placeholder.com/150',
    },
    {
      _id: '5e6f7g8h',
      name: 'Emma Davis',
      msg: 'See you soon!',
      image: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Chats</Text>
      <ScrollView>
        {ContactData.map(({_id, name, msg, image}) => (
          <View key={_id} style={styles.chatContainer}>
            <Image source={{uri: image}} style={styles.avatar} />
            <View style={styles.chatTextContainer}>
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.msg}>{msg}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ContactList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 15,
    backgroundColor: '#128C7E',
    color: 'white',
    textAlign: 'center',
  },
  chatContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  avatar: {
    backgroundColor: '#ddd',
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  chatTextContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  msg: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
});
