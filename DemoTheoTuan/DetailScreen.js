import React, {Component} from 'react';
import {Button, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';



export default class DetailScreen extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#16a085",
      elevation: null
    }
  };
  render() {
    return (
      <View style={styles.container}>
      <View style={{backgroundColor: '#455a64', flex: 1}}>
      <View style={{flexDirection: 'column', margin: 10}}>
      <Image source={{uri: 'https://cdn.tgdd.vn/Products/Images/42/191482/iphone-xs-max-512gb-gold-400x460.png'}}
      style={{flexWrap: 'wrap', width: 150, height:200, marginLeft:90, marginBottom:20}}
      />
      <View style={{flex: 1, marginLeft: 10}}>
      <Text style={{color: 'white'}}>
      Mã Sản Phẩm: IPXS1
      </Text>
      <Text style={{color: 'white'}}>
      Tên Sản Phẩm: iphone xs max 512gb gold
      </Text>
      <Text style={{color: 'white'}}>
      Chi tiết: Là chiếc smartphone cao cấp nhất của Apple với mức giá khủng chưa từng có, bộ nhớ trong lên tới 512GB, iPhone XS Max 512GB - sở hữu cái tên khác biệt so với các thế hệ trước, trang bị tới 6.5 inch đầu tiên của hãng cùng các thiết kế cao cấp hiện đại từ chip A12 cho tới camera AI.
      </Text>
      <Text style={{color: 'white'}}>
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
      <Text style={{color: 'white'}}>
      Giá : 42.990.000đ
      </Text>

      <TouchableOpacity style={styles.buttonContainer} onPress={()=>this.props.navigation.navigate('Shopping')} >
                                    <Text style={styles.buttonText}>ADD TO CARD</Text>
      </TouchableOpacity>
      
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
  buttonText: {
    fontSize: 10,
    alignSelf: "center",
    textAlign: "center",
    color: "#FFF",
    fontWeight: "700"
  },
  buttonContainer: {
    backgroundColor: '#f7c744',
    paddingVertical: 10,
    margin: 5

},
buttonText: {
    textAlign: 'center',
    color :'rgb(32, 53, 70)',
    fontWeight: 'bold',
    fontSize: 10
}
  
});
