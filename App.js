import {StyleSheet, SafeAreaView, ScrollView, View} from 'react-native';
import React from 'react';
import BottomTab from './navigation/BottomTab';
import AuthNav from './navigation/AuthNav';
// firebase

const App = () => {
  const loginCheck = false;
  return (
    <SafeAreaView style={styles.Maincontainer}>
      {loginCheck === true ? (
        <BottomTab />
      ) : (
        <>
          <AuthNav />
        </>
      )}
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  Maincontainer: {
    backgroundColor: 'black',
    flex: 1,
  },
});
