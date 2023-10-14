import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
// import {useState} from 'react';
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
const Signup = ({navigation}) => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // const handleSignup = async () => {
  //   try {
  //     const userCredential = await firebase
  //       .auth()
  //       .createUserWithEmailAndPassword(email, password);
  //     const user = userCredential.user;
  //     console.log('User signed up:', user);
  //   } catch (error) {
  //     console.error('Signup error:', error);
  //   }
  // };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View>
        <Text style={{color: 'black'}}>Signup</Text>
        <Button title="Login" onPress={() => navigation.navigate('login')} />
      </View>
      {/* <View>
        <Text style={{fontSize: 30, fontWeight: 'bold', color: 'black'}}>
          Email:
        </Text>
        <TextInput
          placeholder="Email"
          value={email}
          style={{fontSize: 30, fontWeight: 'bold', color: 'black'}}
          onChangeText={text => setEmail(text)}
        />
        <Text style={{fontSize: 30, fontWeight: 'bold', color: 'black'}}>
          Password:
        </Text>
        <TextInput
          placeholder="Password"
          style={{fontSize: 30, fontWeight: 'bold', color: 'black'}}
          secureTextEntry
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <Button title="Signup" onPress={handleSignup} />
      </View> */}
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  textsize: {
    fontSize: 30,
  },
});
