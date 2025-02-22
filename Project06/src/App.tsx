import React, {useState} from 'react';
import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {currencyByRupee} from './constants';
import CurrencyButton from './components/CurrencyButton';
import Snackbar from 'react-native-snackbar';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [resultValue, setResultValue] = useState('');

  const buttonPressed = (targetValue: Currency) => {
    if (!inputValue) {
      return Snackbar.show({
        text: 'Enter a value to convert',
        backgroundColor: '#EA7773',
        textColor: '#ffffff',
      });
    }

    const inputAmount = parseFloat(inputValue);
    if (!isNaN(inputAmount)) {
      const convertedValue = inputAmount * targetValue.value;
      setResultValue(`${targetValue.symbol} ${convertedValue.toFixed(2)}`);
    } else {
      return Snackbar.show({
        text: 'Not a valid number to convert',
        backgroundColor: '#F4BE2C',
        textColor: '#ffffff',
      });
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#222831" />
      <View style={styles.topContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.currencySymbol}>₹</Text>
          <TextInput
            style={styles.inputField}
            maxLength={14}
            value={inputValue}
            onChangeText={setInputValue}
            keyboardType="number-pad"
            placeholder="Enter amount in Rupees"
            placeholderTextColor="#B0BEC5"
          />
        </View>
        {resultValue ? (
          <Text style={styles.resultText}>{resultValue}</Text>
        ) : null}
      </View>
      <View style={styles.bottomContainer}>
        <FlatList
          numColumns={3}
          data={currencyByRupee}
          keyExtractor={item => item.name}
          renderItem={({item}) => (
            <CurrencyButton
              flag={item.flag}
              name={item.name}
              onPress={() => buttonPressed(item)}
            />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222831',
    padding: 20,
  },
  topContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#393E46',
    borderRadius: 10,
    padding: 15,
    width: '90%',
  },
  currencySymbol: {
    fontSize: 22,
    color: '#00ADB5',
    fontWeight: 'bold',
    marginRight: 10,
  },
  inputField: {
    flex: 1,
    fontSize: 18,
    color: '#ffffff',
  },
  resultText: {
    fontSize: 32,
    color: '#00ADB5',
    fontWeight: 'bold',
    marginTop: 20,
  },
  bottomContainer: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
