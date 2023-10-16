import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Swiper from 'react-native-swiper';
const DeviceWidth = Dimensions.get('screen').width;
const Explore = () => {
  const moviesdata = [
    {
      id: 1,
      name: 'Movie 1',
      imgsrclink:
        'https://pics.filmaffinity.com/John_Wick_Chapter_4-101402041-large.jpg',
    },
    {
      id: 2,
      name: 'Movie 2',
      imgsrclink:
        'https://www.swagshirts99.com/wp-content/uploads/2022/04/John-Wick.jpg',
    },
    {
      id: 3,
      name: 'Movie 3',
      imgsrclink:
        'https://assets.gadgets360cdn.com/pricee/assets/product/202305/Extraction_2_Key_Art_2_English_1684309049.jpg',
    },
  ];
  return (
    <View style={styles.WrapCont}>
      <View style={styles.Maincont}>
        <MaterialCommunityIcons name="movie-roll" color="red" size={35} />
        <View style={styles.btnCont}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btntext}>Popular</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btntext}>Upcoming</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btntext}>Classic</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btntext}>Top 10</Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View>
            <View>
              <View style={styles.carHead}>
                <Text style={styles.carHeadtxt}>Now Playing</Text>
              </View>
              <Swiper
                dot={false}
                activeDot={false}
                activeDotColor="black"
                height={450}
                style={styles.swipeCont}>
                {moviesdata.map((item, key) => {
                  return (
                    <View style={styles.slidestyle} key={item.id}>
                      <Image
                        style={styles.slideImg}
                        source={{
                          uri: item.imgsrclink,
                        }}
                      />
                      <View style={styles.tochview}>
                        <View>
                          <Text style={{color: 'white'}}>{item.name}</Text>
                        </View>
                        <View>
                          <TouchableOpacity style={styles.trailbtn}>
                            <EvilIcons name="play" color={'white'} size={20} />
                            <Text
                              style={{color: 'white', paddingHorizontal: 3}}>
                              Watch Trailer
                            </Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  );
                })}
              </Swiper>
            </View>
          </View>
          <View>
            <View style={styles.carHead}>
              <Text style={styles.carHeadtxt}>Upcoming</Text>
            </View>
          </View>
          <View style={{}}>
            <Swiper height={480} style={styles.swipeCont}>
              {moviesdata.map((item, key) => {
                return (
                  <View style={styles.slidestyle} key={item.id}>
                    <Image
                      style={styles.slideImg}
                      source={{
                        uri: item.imgsrclink,
                      }}
                    />
                    <View style={styles.tochview}>
                      <View>
                        <Text style={{color: 'white'}}>{item.name}</Text>
                      </View>
                      <View>
                        <TouchableOpacity style={styles.trailbtn}>
                          <EvilIcons name="play" color={'white'} size={20} />
                          <Text style={{color: 'white', paddingHorizontal: 3}}>
                            Watch Trailer
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                );
              })}
            </Swiper>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({
  WrapCont: {
    flex: 1,
    backgroundColor: 'black',
  },
  Maincont: {
    paddingHorizontal: 10,
    marginTop: 20,
  },
  btnCont: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  btn: {
    borderWidth: 1,
    borderColor: 'white',
    padding: 5,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  btntext: {
    color: 'white',
    paddingHorizontal: 8,
    fontSize: 12,
    paddingVertical: 1,
  },
  carHead: {
    paddingHorizontal: 8,
    marginTop: 20,
  },
  carHeadtxt: {
    color: 'white',
    fontSize: 25,
    fontWeight: '900',
  },
  item: {
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  swipeCont: {
    marginTop: 20,
  },
  slideImg: {
    height: 350,
    width: DeviceWidth - 20,
    borderRadius: 30,
    resizeMode: 'stretch',
  },
  slidestyle: {
    width: DeviceWidth - 20,
  },
  tochview: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'space-between',
  },
  trailbtn: {
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 20,
    alignItems: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
});
