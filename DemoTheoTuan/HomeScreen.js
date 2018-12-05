

import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, Image, TouchableOpacity } from 'react-native';



export default class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mang: [],
      refresh: false,
      page: 1,

    }
    

  }

  static navigationOptions = {
    header: null // Không sử dụng thanh toolbar giống trong Android
  };

  render() {
    return (

      <View>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>

        <FlatList

          refreshing={this.state.refresh}
          onRefresh={() => { this.refresh() }}
          onEndReachedThreshold={-0.2}
          onEndReached={() => { this.onEndReached() }}

          data={this.state.mang}
          keyExtractor = {(item,index) => item.id}
          renderItem={({ item }) =>
            <TouchableOpacity style={styles.container} onPress={() => { this.props.navigation.navigate('Detail', {idSelected: item.id,
              imgSelected: item.img, desSelected: item.des, titleSelected: item.title, priceSelected: item.price
            }) }}>
              <View style={styles.left}>
                <Image
                  style={{ width: 190, height: 250 }}
                  source={{ uri: item.img }}
                />
              </View>
              <View style={styles.right}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.price}>{item.price}</Text>
                <Text style={styles.des}>{item.des}</Text>
              </View>
            </TouchableOpacity>}>
        </FlatList>
      </View>
    );
  }

  onEndReached() {
    fetch("http://192.168.0.105:8080/webservice/page_data.php?page=" + this.state.page + 1)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          mang: this.state.mang.concat(responseJson),
          page: this.state.page + 1
        });
      })
      .catch((error) => { console.log(error) });
  }

  refresh() {
    this.setState({
      refresh: true
    });
    fetch("http://192.168.0.105:8080/webservice/random_data.php")
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          mang: responseJson,
          refresh: false
        });
      })
      .catch((error) => { console.log(error) });
  }

  componentDidMount() {
    fetch("http://192.168.0.105:8080/webservice/home.php")
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          mang: responseJson
        });
      })
      .catch((error) => { console.log(error) });
  }



}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    padding: 50,
    borderRightWidth: 1,
    flexDirection: "row",
    backgroundColor: "#455a64"
  },
  buttonContainer: {
    backgroundColor: '#16a085',
    paddingVertical: 17,
    fontSize: 17

  },
  left: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 45,
  },

  right: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    width: 165,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    marginLeft: 50
  },
  title: {
    color: "#FF0000",
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'left'

  },
  price: {
    color: "#FF0000",
    fontSize: 20,
    textAlign: 'left'
  },
  des: {
    color: "#FFFAF0",
    alignItems: 'center',
    textAlign: 'left'
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18
  }
});


