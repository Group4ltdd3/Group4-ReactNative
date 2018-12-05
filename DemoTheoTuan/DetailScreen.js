import React, { Component } from 'react';
import { Button, StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';



export default class DetailScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mang: [],
      refresh: false,
      page: 1,

    }


  }

  AddToCard() {
   alert('ADD TO CART SUCCESSFULLY !!')
  }

  componentDidMount() {
    const { params } = this.props.navigation.state;
    fetch("http://192.168.1.3/webservice/detail.php?page=" + params.idSelected)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          mang: responseJson
        });
      })

      .catch((error) => { console.log(error) });
  }

  static navigationOptions = {
    header: null // Không sử dụng thanh toolbar giống trong Android
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.mang}
          keyExtractor={(item, index) => item.id}
          renderItem={({ item }) =>
            <View style={styles.container}>
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
            </View>
          }
        >

        </FlatList>

        <TouchableOpacity style={styles.buttonContainer} onPress={()=>this.AddToCard()}>
          <Text style={styles.buttonText}> ADD TO CART</Text>
          
        </TouchableOpacity>
      </View>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#efe2a6',
  },
  buttons: {
    marginTop: 20
  },
  text: {
    color: '#273237',
    fontSize: 15, marginBottom: 5
  },
  textCancel: {
    fontSize: 10,
    alignSelf: "center",
    textAlign: "center",
    color: "#FFF",
    fontWeight: "700",
    marginTop: 20,
    marginBottom: 20
  },
  buttonContainer: {
    backgroundColor: '#6193ab',
    paddingVertical: 15,
    borderRadius: 30,
    height: 40,
    width:150,
    marginTop: 10,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  buttonText: {
    color: '#FFFFFF'
  }

});
