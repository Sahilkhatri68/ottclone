import {View, Text, TextInput, Button} from 'react-native';
import React from 'react';
import {useState} from 'react';
import firebase from 'firebase/compat/app';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // code for login
  const handleLogin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(userCredential => {
        // User is signed in
        const user = userCredential.user;
        console.log('User signed in:', user);
      })
      .catch(error => {
        // Handle errors (e.g., invalid email or password)
        console.error('Login error:', error);
      });
  };
  return (
    <View
      style={{
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'black',
      }}>
      <Text
        style={{
          color: 'white',
          fontSize: 30,
        }}>
        Login
      </Text>
      <Button title="Signup" onPress={() => navigation.navigate('signup')} />
    </View>
  );
};

export default Login;
