import React, {Component} from 'react';
import {Button, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';



export default class DetailScreen extends Component {


  static navigationOptions = {
    header: null // Không sử dụng thanh toolbar giống trong Android
  };

  render() {
    return (
      <View style={styles.container}>
      <View style={{backgroundColor: '#efe2a6', flex: 1}}>
      <View style={{flexDirection: 'column', margin: 20,    justifyContent: "center",
    alignItems: "center", }}>
      <Image source={{uri: 'https://cdn.tgdd.vn/Products/Images/42/191482/iphone-xs-max-512gb-gold-400x460.png'}}
      style={{flexWrap: 'wrap', width: 100, height:150}}
      />
      <View style={{flex: 1, marginLeft: 10,marginTop:30}}>
      <Text style={styles.text}>
      Mã Sản Phẩm: IPXS1
      </Text>
      <Text style={styles.text}>
      Tên Sản Phẩm: iphone xs max 512gb gold
      </Text>

      <Text style={styles.text}>
      Chi tiết: Là chiếc smartphone cao cấp nhất của Apple với mức giá khủng chưa từng có, bộ nhớ trong lên tới 512GB, iPhone XS Max 512GB - sở hữu cái tên khác biệt so với các thế hệ trước, trang bị tới 6.5 inch đầu tiên của hãng cùng các thiết kế cao cấp hiện đại từ chip A12 cho tới camera AI.
      </Text>
      <Text style={styles.text}>
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

      <Text style={styles.text}>
      Giá : 42.990.000đ
      </Text>

      
      <TouchableOpacity style={styles.buttonContainer} onPress={()=>this.login()} >
        <Text style={styles.buttonText}> ADD TO CART </Text>
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
    backgroundColor: '#efe2a6',
  },
  buttons: {
    marginTop:20
  },
  text:{
    color:'#273237',
    fontSize:15,marginBottom:5
  },
  textCancel:{
    fontSize: 10,
    alignSelf: "center",
    textAlign: "center",
    color: "#FFF",
    fontWeight: "700",
    marginTop:20,
    marginBottom:20
  },   
  buttonContainer: {
  backgroundColor: '#6193ab',
  paddingVertical: 15,
  borderRadius: 30,
  height: 40,
  marginTop:10,
  marginBottom:20,
  justifyContent: 'center',
  alignItems: 'center',
  },
  buttonText:{
    color:'#FFFFFF'
  }
  
});
