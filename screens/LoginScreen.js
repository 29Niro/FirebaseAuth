import { Image, TouchableOpacity, KeyboardAvoidingView, TextInput, StyleSheet, Text, View } from 'react-native';
import React, {useState, useEffect} from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import Logo from '../assets/logo/logo_1.png';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigation = useNavigation();
  const {height} = useWindowDimensions();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigation.replace("HomeStack");
      }
    })
    return unsubscribe
  }, [])

  const handleSignUp = () => {
  createUserWithEmailAndPassword(auth, email, password)
    .then(userCredentials => {
      const user = userCredentials.user;
      console.log('Register with :', user.email);
    })
    .catch(error => alert(error.message))
  }

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then(userCredentials => {
      const user = userCredentials.user;
      console.log('Logged in with :', user.email);
    })
    .catch(error => alert(error.message))
  }

  return (
    <KeyboardAvoidingView style={styles.container} behaviour="padding">
      <View style={styles.inputContainer}>
        <Image 
        source={Logo}
        style={[styles.logo, {height: height * 0.3}]}
        resizeMode="contain"
        />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleLogin}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleSignUp}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffd8fe',

  },
  logo: {
    width: '100%',
    maxWidth: 300,
    maxHeight: 200,
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 5,
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,

  },
  button: {
    backgroundColor: '#0782F9',
    width: '100%',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: '#ffd8fe',
    marginTop: 5,
    borderColor: '#0782F9',
    borderWidth: 1,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutlineText: {
    color: '#0782F9',
    fontWeight: '700',
    fontSize: 16,
  },
})