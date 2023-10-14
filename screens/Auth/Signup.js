import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const Signup = ({navigation}) => {
  return (
    <View style={styles.MainContainer}>
      <View style={styles.container}>
        <Text style={styles.text}>Sign up</Text>
      </View>
      <View style={styles.midcont}>
        <View>
          <TextInput
            style={styles.textinputcont}
            placeholder="Enter your name"
            placeholderTextColor="#484848"
          />
          <TextInput
            style={styles.textinputcont}
            placeholder="Enter your email "
            placeholderTextColor="#484848"
          />
        </View>
        <View>
          <TouchableOpacity title="Login" style={styles.loginbtn}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
          <View style={styles.btmview}>
            <View>
              <Text style={styles.btmtext}>Already have an account?</Text>
            </View>
            <View>
              <TouchableOpacity onPress={() => navigation.navigate('login')}>
                <Text style={styles.navbtnsign}>Log In</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Signup;
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'black',
  },
  container: {
    height: 200,
    textAlign: 'center',
    justifyContent: 'center',
  },
  midcont: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 20,
    color: 'white',
  },
  textinputcont: {
    borderWidth: 1,
    color: 'white',
    borderColor: 'white',
    width: 300,
    borderRadius: 20,
    padding: 15,
    marginTop: 10,
    marginBottom: 10,
    height: 50,
  },
  loginbtn: {
    borderWidth: 1,
    backgroundColor: '#E33939',
    height: 50,
    borderRadius: 20,
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 15,
  },
  btmview: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    justifyContent: 'center',
    marginBottom: 20,
  },
  btmtext: {
    color: 'white',
  },
  navbtnsign: {
    color: 'white',
    fontWeight: '900',
    marginLeft: 10,
  },
});
