import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {ViewPropTypes, Carousel} from 'deprecated-react-native-prop-types';
// import Carousel from 'deprecated-react-native-snap-carousel';
import {views1} from '../components/Viewdata';
const renderItem1 = ({item}) => {
  return (
    <View style={styles.renderItem1_parentView}>
      <Image source={{uri: item.imgUrl}} style={styles.renderItem1_img} />
      <View style={styles.renderItem1_view1}>
        <Text style={styles.renderItem1_text1}>OFFERS</Text>
      </View>
      <View style={styles.renderItem1_view2}>
        <Text style={styles.renderItem1_text2}>{item.title}</Text>
        <TouchableOpacity>
          <Text style={styles.renderItem1_text3}>EXPLORE OFFERS</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const Explore = () => {
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
          <View style={styles.carHead}>
            <Text style={styles.carHeadtxt}>Now Playing</Text>
          </View>
        </ScrollView>
        <View>
          {/* <Carousel
            layout={'default'}
            data={views1}
            renderItem={renderItem1}
            sliderWidth={400}
            itemWidth={350}
          /> */}
        </View>
      </View>
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({
  WrapCont: {
    flex: 1,
    backgroundColor: 'black',
    // flexDirection: 'column',
    // justifyContent: 'space-between',
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
  //
  renderItem1_parentView: {
    backgroundColor: '#ffffff',
    borderRadius: 18,
    height: 250,
    width: 350,
    justifyContent: 'space-around',
    alignItems: 'center',
    overflow: 'hidden',
  },
  renderItem1_view1: {
    width: 80,
    position: 'absolute',
    fontSize: 20,
    top: 10,
    right: 20,
    backgroundColor: '#ffffff',
    borderRadius: 18,
    alignItems: 'center',
  },
  renderItem1_view2: {
    width: 350,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  renderItem1_img: {
    width: 350,
    height: 200,
  },
  renderItem1_text1: {
    fontWeight: '700',
    color: '#000000',
  },
  renderItem1_text2: {
    marginVertical: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  renderItem1_text3: {
    marginVertical: 12,
    color: 'blue',
    fontWeight: 'bold',
  },
});
