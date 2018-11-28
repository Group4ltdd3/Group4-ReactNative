import React, {Component} from 'react';
import {Button, StyleSheet, Text, View, Image, TouchableOpcity} from 'react-native';



export default class DetailScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
      <View style={{backgroundColor: '#191970', flex: 1}}>
      <View style={{flexDirection: 'column', margin: 20}}>
      <Image source={{uri: 'https://cdn.tgdd.vn/Products/Images/42/191482/iphone-xs-max-512gb-gold-400x460.png'}}
      style={{flexWrap: 'wrap', width: 100, height:100}}
      />
      <View style={{flex: 1, marginLeft: 10}}>
      <Text>
      Mã Sản Phẩm: IPXS1
      </Text>
      <Text>
      Tên Sản Phẩm: iphone xs max 512gb gold
      </Text>

      <Text>
      Chi tiết: Là chiếc smartphone cao cấp nhất của Apple với mức giá khủng chưa từng có, bộ nhớ trong lên tới 512GB, iPhone XS Max 512GB - sở hữu cái tên khác biệt so với các thế hệ trước, trang bị tới 6.5 inch đầu tiên của hãng cùng các thiết kế cao cấp hiện đại từ chip A12 cho tới camera AI.
      </Text>
      <Text>
      Thông số kỹ thuật
      Màn hình: OLED, 6.5", Super Retina
      Hệ điều hành: iOS 12
      Camera sau: 2 camera 12 MP
      Camera trước: 7 MP
      CPU:  Apple A12 Bionic 6 nhân
      RAM:  4 GB
      Bộ nhớ trong: 512 GB
      Thẻ SIM:
      Nano SIM & eSIM, Hỗ trợ 4G
      HOTSIM VIETTEL GÔGÔ 4G (2.5GB data/ tháng). Giá từ 80.000đ
      Dung lượng pin: 3174 mAh, có sạc nhanh
      </Text>
      <Text>
      Giá : 42.990.000đ
      </Text>
      <Button title='Add to card' onPress={()=>this.props.navigation.navigate('Shopping')}
      />
      </View>
      </View>


      </View>
      
      </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  
  
});
