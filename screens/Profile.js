import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Profile = () => {
  // const DeviceWidth = Dimensions.get('screen').width;
  return (
    <View style={styles.WrapCont}>
      <View>
        <View style={styles.MainCont}>
          <Text style={styles.textstyle}>My Profile</Text>
        </View>
        <View style={styles.userCont}>
          <View style={styles.userporfilecont}>
            <Image
              style={styles.tinyLogo}
              source={{
                uri: 'https://as2.ftcdn.net/v2/jpg/02/32/80/57/1000_F_232805769_mY3gAqlZ28O5PPE5w7YqQg5RiFEJToI6.jpg',
              }}
            />
          </View>
          <View>
            <Text style={styles.usertext}>User</Text>
          </View>
        </View>
        {/* settin 1 */}
        <View style={styles.settingCont}>
          <View style={styles.lefticonCont}>
            <AntDesign name="user" color="white" size={20} />
          </View>
          <View style={styles.MidCont}>
            <Text style={styles.textsetting}>Account</Text>
          </View>
        </View>
        <View style={styles.btmsettingCont}>
          <View style={styles.lefticonCont}></View>
          <View>
            <TouchableOpacity style={styles.centerCont}>
              <View style={styles.btmmidcont}>
                <Text style={styles.textsettingbtm}>Edit Profile</Text>
                <Text style={styles.textsettingbtm}>Change Password</Text>
              </View>
              <View>
                <AntDesign name="right" color="white" size={18} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        {/* settin 2 */}
        <View style={styles.settingCont}>
          <View style={styles.lefticonCont}>
            <AntDesign name="setting" color="white" size={20} />
          </View>
          <View style={styles.MidCont}>
            <Text style={styles.textsetting}>Settings</Text>
          </View>
        </View>
        <View style={styles.btmsettingCont}>
          <View style={styles.lefticonCont}></View>
          <View>
            <TouchableOpacity style={styles.centerCont}>
              <View style={styles.btmmidcont}>
                <Text style={styles.textsettingbtm}>Themes</Text>
                <Text style={styles.textsettingbtm}>Permession</Text>
              </View>
              <View>
                <AntDesign name="right" color="white" size={18} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.endView}>
        <TouchableOpacity title="Login" style={styles.loginbtn}>
          <Text style={styles.buttonText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  WrapCont: {
    flex: 1,
    backgroundColor: 'black',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  MainCont: {
    padding: 10,
    alignItems: 'center',
    paddingVertical: 50,
  },
  textstyle: {
    fontSize: 20,
    color: 'white',
  },
  userCont: {
    alignSelf: 'center',
  },
  userporfilecont: {
    width: 60,
    height: 60,
    borderRadius: 100,
  },
  usertext: {
    fontSize: 15,
    color: 'white',
    alignSelf: 'center',
    paddingVertical: 10,
  },
  tinyLogo: {
    width: 60,
    height: 60,
    alignSelf: 'center',
    justifyContent: 'center',
    resizeMode: 'cover',
    borderRadius: 100,
  },
  settingCont: {
    paddingHorizontal: 30,
    marginTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },
  btmsettingCont: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  lefticonCont: {
    width: 35,
  },
  centerCont: {
    flexDirection: 'row',
    // alignItems: 'center',
  },
  MidCont: {
    width: 300,
  },
  btmmidcont: {
    marginTop: 5,
    width: 250,
  },
  textsetting: {
    color: 'white',
    fontSize: 20,
    marginLeft: 20,
  },
  textsettingbtm: {
    color: '#333333',
    fontSize: 15,
    marginLeft: 20,
  },
  textsettinglowcase: {
    fontSize: 15,
    color: '#333333',
  },
  btmCont: {
    paddingHorizontal: 30,
  },
  btmConttext: {
    color: '#333333',
  },
  loginbtn: {
    borderWidth: 1,
    backgroundColor: 'red',
    height: 50,
    borderRadius: 20,
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 15,
  },
  endView: {
    marginBottom: 40,
    paddingHorizontal: 15,
  },
});
