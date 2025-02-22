import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
  Switch,
} from 'react-native';
import * as Yup from 'yup';
import {Formik} from 'formik';

// ✅ Validation Schema
const passwordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, 'Must be at least 4 characters')
    .max(16, 'Cannot exceed 16 characters')
    .required('Required'),
});

const App: React.FC = () => {
  const [password, setPassword] = useState<string>('');
  const [isPasswordGenerated, setIsPasswordGenerated] =
    useState<boolean>(false);
  const [lowercase, setLowercase] = useState<boolean>(false);
  const [uppercase, setUppercase] = useState<boolean>(false);
  const [numbers, setNumbers] = useState<boolean>(false);
  const [symbols, setSymbols] = useState<boolean>(false);

  // ✅ Generate Password Function
  const generatePassword = (passwordLength: number) => {
    let charList = '';

    const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz';
    const NUMBERS = '1234567890';
    const SPECIAL_CHAR = '!@#$%^&*()_+-=[]{}|;:",.<>?/';

    if (uppercase) charList += UPPERCASE;
    if (lowercase) charList += LOWERCASE;
    if (numbers) charList += NUMBERS;
    if (symbols) charList += SPECIAL_CHAR;

    if (!charList) {
      Alert.alert('Error', 'Please select at least one character type.');
      return;
    }

    const passwordResult = createPassword(charList, passwordLength);
    setPassword(passwordResult);

    setIsPasswordGenerated(true);
  
  };

  // ✅ Create Password Function
  const createPassword = (characters: string, passwordLength: number) => {
    let result = '';
    for (let i = 0; i < passwordLength; i++) {
      const charIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(charIndex);
    }
    return result;
  };

  // ✅ Reset Function
  const resetPassword = () => {
    setPassword('');
    setIsPasswordGenerated(false);
    setLowercase(false);
    setUppercase(false);
    setNumbers(false);
    setSymbols(false);
  };

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>🔐 Password Generator</Text>

          <Formik
            initialValues={{passwordLength: ''}}
            validationSchema={passwordSchema}
            onSubmit={values =>
              generatePassword(Number(values.passwordLength))
            }>
            {({values, errors, touched, handleChange, handleSubmit}) => (
              <>
                {/* ✅ Input: Password Length */}
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Password Length</Text>
                  {errors.passwordLength && touched.passwordLength && (
                    <Text style={styles.errorText}>
                      {errors.passwordLength}
                    </Text>
                  )}
                  <TextInput
                    style={styles.inputStyle}
                    value={values.passwordLength}
                    onChangeText={handleChange('passwordLength')}
                    placeholder="Enter length (4-16)"
                    keyboardType="numeric"
                  />
                </View>

                {/* ✅ Use Switch instead of Checkbox */}
                <View style={styles.switchWrapper}>
                  <Text>Include Lowercase Letters</Text>
                  <Switch
                    value={lowercase}
                    onValueChange={() => setLowercase(!lowercase)}
                  />
                </View>

                <View style={styles.switchWrapper}>
                  <Text>Include Uppercase Letters</Text>
                  <Switch
                    value={uppercase}
                    onValueChange={() => setUppercase(!uppercase)}
                  />
                </View>

                <View style={styles.switchWrapper}>
                  <Text>Include Numbers</Text>
                  <Switch
                    value={numbers}
                    onValueChange={() => setNumbers(!numbers)}
                  />
                </View>

                <View style={styles.switchWrapper}>
                  <Text>Include Symbols</Text>
                  <Switch
                    value={symbols}
                    onValueChange={() => setSymbols(!symbols)}
                  />
                </View>

                {/* ✅ Buttons */}
                <View style={styles.formAction}>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => handleSubmit()}>
                    <Text style={styles.buttonText}>Generate Password</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.buttonReset}
                    onPress={resetPassword}>
                    <Text style={styles.buttonText}>Reset</Text>
                  </TouchableOpacity>
                </View>

                {/* ✅ Display Generated Password */}
                {isPasswordGenerated && (
                  <View style={styles.resultContainer}>
                    <Text style={styles.resultText}>Generated Password:</Text>
                    <Text style={styles.password}>{password}</Text>
                  </View>
                )}
              </>
            )}
          </Formik>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

// ✅ Styles
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 20,
  },
  formContainer: {
    marginTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputWrapper: {
    marginBottom: 10,
  },
  switchWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  heading: {
    fontSize: 16,
    fontWeight: '600',
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
    width: '100%',
  },
  formAction: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#29AB87',
    padding: 12,
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 5,
  },
  buttonReset: {
    backgroundColor: '#FF6347',
    padding: 12,
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginBottom: 5,
  },
  resultContainer: {
    marginTop: 20,
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
  },
  resultText: {
    fontSize: 18,
    fontWeight: '600',
  },
  password: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 5,
  },
});

export default App;
