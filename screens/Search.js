import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const Search = () => {
  const imageUrl =
    'https://mobcup.net/images/wt/aba6e58b2998d44bd64fa927809088a0.jpg';
  const data = [
    {
      key: '1',
      name: 'Item 1',
      imgurl:
        'https://mobcup.net/images/wt/794ba52589fe51345454cfde6b75ead5.jpg',
    },
    {
      key: '2',
      name: 'Item 2',
      imgurl:
        'https://mobcup.net/images/wt/9a3c902231fbe6ebc2a9510a3c7b08e6.jpg',
    },
    {
      key: '3',
      name: 'Item 3',
      imgurl: 'https://funmauj.b-cdn.net/test/918891.jpg',
    },
    {
      key: '4',
      name: 'Item 4',
      imgurl: 'https://funmauj.b-cdn.net/test/355979.jpg',
    },
    {
      key: '5',
      name: 'Item 5',
      imgurl:
        'https://mobcup.net/images/wt/9a3c902231fbe6ebc2a9510a3c7b08e6.jpg',
    },
    {
      key: '6',
      name: 'Item 6',
      imgurl:
        'https://mobcup.net/images/wt/aba6e58b2998d44bd64fa927809088a0.jpg',
    },
    // {key: '7', name: 'Item 4'},
    // {key: '8', name: 'Item 4'},
    // {key: '9', name: 'Item 4'},
    // {key: '10', name: 'Item 4'},
    // {key: '11', name: 'Item 4'},
    // {key: '12', name: 'Item 4'},
    // {key: '13', name: 'Item 4'},
    // {key: '14', name: 'Item 4'},
    // {key: '15', name: 'Item 4'},
    // {key: '16', name: 'Item 4'},
    // {key: '17', name: 'Item 4'},
    // {key: '18', name: 'Item 4'},
    // {key: '19', name: 'Item 4'},
    // {key: '20', name: 'Item 4'},
    // {key: '21', name: 'Item 4'},
  ];
  return (
    <View style={styles.WrapCont}>
      <View style={styles.MainCont}>
        <View style={styles.textinputcont}>
          <TextInput
            style={styles.txtin}
            placeholder="Search Here.."
            placeholderTextColor="white"
          />
        </View>
        <View style={styles.Searchcont}>
          <TouchableOpacity>
            <Icon name="search" color="white" size={25} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.flatliststyle}>
        <FlatList
          data={data}
          numColumns={2} // Number of columns in your grid
          keyExtractor={item => item.key}
          renderItem={({item}) => (
            <TouchableOpacity style={styles.gridItem}>
              <Image
                source={{
                  uri: item.imgurl,
                }}
                style={styles.bannerimg}
              />
              <Text style={styles.imgtxt}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  WrapCont: {
    flex: 1,
    backgroundColor: 'black',
  },
  MainCont: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#676464',
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 20,
    padding: 10,
    flexDirection: 'row',
  },
  textinputcont: {
    color: 'white',
    borderColor: 'white',
    width: 250,
    paddingHorizontal: 10,
    borderRadius: 20,
    height: 40,
  },
  Searchcont: {
    width: 35,
  },
  txtin: {
    fontSize: 15,
    color: 'white',
  },
  flatliststyle: {
    marginTop: 20,
    paddingHorizontal: 5,
    marginBottom: 80,
  },
  gridItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    height: 300,
    borderWidth: 0,
    borderRadius: 15,
  },
  bannerimg: {
    height: 250,
    width: 160,
    resizeMode: 'contain',
    alignSelf: 'center',
    borderRadius: 20,
  },
  imgtxt: {
    color: 'white',
  },
});
