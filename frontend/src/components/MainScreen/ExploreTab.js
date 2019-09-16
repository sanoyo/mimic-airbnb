
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Text,
  Image,
  Dimensions,
} from 'react-native';

import { navigate } from '../../actions/nav';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'white'
  },
  item: {
    backgroundColor: 'white',
    padding: 20,
    marginBottom: 10,
  },
  imgae: {
    width: Dimensions.get('window').width - 80,
    height: Dimensions.get('window').width *4/7,
    marginBottom: 15,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
    color: '#555',
  }
});

// const items = [
//   {
//     id: 1,
//     title: 'New York',
//     homeType: 'House',
//     image: { uri: 'https://design-1st.jp/wp/wp-content/uploads/2018/11/3f8a2c548c51c116fcc79d650c98dd161-e1543190476505.jpg' },
//     bedRoom: 2,
//     price: 150,
//     instant: true
//   },
//   {
//     id: 2,
//     title: 'Paris',
//     homeType: 'House',
//     image: { uri: 'http://livedoor.blogimg.jp/tsukasahome-8343/imgs/6/0/605108d0.jpg' },
//     bedRoom: 1,
//     price: 99,
//     instant: false
//   },
//   {
//     id: 3,
//     title: 'Melbourne',
//     homeType: 'Apartment',
//     image: { uri: 'https://p.limia.jp/resize/o3/image/435/gallery/25266/a2afc58c5ac9c65a661b3c1daeeb7631.jpg' },
//     bedRoom: 1,
//     price: 99,
//     instant: false
//   },
// ];

class ExploreTab extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     items: items
  //   };
  // }

  onPress(item) {
    this.props.navigate({ routeName: "Detail", params: { item: item } });
  }

  render() {
    const { rooms } = this.props
    return (
      <FlatList
        style={styles.container}
        // data={this.state.items}
        data = { rooms }
        renderItem={({item}) => 
          <TouchableOpacity onPress={() => this.onPress(item)} style={styles.item}>
            <Image style={styles.image} source = {{uri: item.image}}/>
            <Text style = {styles.title}>{`$${item.price} ${item.instant ? '🎉 ' : ''}${item.title}`}</Text>
            <Text>{`${item.homeType} - ${item.bedRoom} bedroom(s)`}</Text>
          </TouchableOpacity>
        }
        keyExtractor={(item, index) => item.id}
      />
    );
  }
}

const mapStateToProps = state => ({
  rooms: state.room.rooms
});

const mapDispatchToProps = dispatch => ({
  navigate: (route) => dispatch(navigate(route)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExploreTab);
