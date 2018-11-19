import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button} from 'react-native';


export default class ItemDetail extends Component {

  

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
            Số lượng: 20
        </Text>
        <Text>
            Chi tiết: Đây là loại áo mà Ronaldo đã mặc khi thi đấu, Messi thèm lắm mà không có
        </Text>
      </View>
    </View>
    
    
    </View>
    );
  }
}


