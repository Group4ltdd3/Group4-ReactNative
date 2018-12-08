import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button} from 'react-native';


export default class Item extends Component {
  constructor(props) {
    super(props);
    this.state={
      soluong:0
    }
  }

  Decrease() {
    this.setState({
      soluong: this.state.soluong-1
    })
  }

  Increase() {
    this.setState({
      soluong: this.state.soluong+1
    })
  }

  render() {
    return (
      <View style={{backgroundColor: 'aquamarine', flex: 1}}>
      <View style={{flexDirection: 'row', margin: 20}}>
      <Image source={{uri: 'http://icons.iconarchive.com/icons/michael/nike/128/Nike-Shirt-14-icon.png'}}
        style={{flexWrap: 'wrap', width: 100, height:100}}
      />
      <View style={{flex: 1, marginLeft: 10}}>
        <Text>
          Mã Sản Phẩm: AT1
        </Text>
        <Text>
          Tên Sản Phẩm: Áo Thun 1
        </Text>
        <Text>
          Số Lượng: {this.props.soluong}
        </Text>
      </View>
    </View>
    <Button title="Decrease" onPress={()=>{this.Decrease()}} color="red"></Button>
      <Button title="Increase" onPress={()=>{this.Increase()}}></Button>
      
      
    </View>
    );
  }
}


