
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Image,
  KeyboardAvoidingView,
  Dimensions,
  TouchableOpacity
  
} from "react-native";

import { StackNavigator } from "react-navigation";

export default class RegisterScreen extends Component {

  static navigationOptions = {
    header: null // Không sử dụng thanh toolbar giống trong Android
  };

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      username: "",
      
    };
  }   

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={{uri:"https://cdn0.iconfinder.com/data/icons/BrushedMetalIcons_meBaze/512/Apple-03.png"}} />
          <Text style={styles.subtext}>Sign Up</Text>
        </View>

        <View style={styles.viewText}>
        <TextInput
            value={this.state.username}
            onChangeText={username => this.setState({ username })}
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="#455a64"
            returnKeyType="next"
            onSubmitEditing={() => this.emailInput.focus()}
          />
          <TextInput
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            style={styles.input}
            placeholderTextColor="#455a64"
            returnKeyType="next"
            ref={input => (this.emailInput = input)}
            onSubmitEditing={() => this.passwordCInput.focus()}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Email"
          />
          <TextInput
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor="#455a64"
            ref={input => (this.passwordCInput = input)}
            onSubmitEditing={() => this.passwordInput.focus()}
            returnKeyType="next"
          />
        </View>
        

        <TouchableHighlight
          onPress={()=>this.register()}
          style={styles.button}>
          <Text style={styles.buttonText}>REGISTER</Text>
        </TouchableHighlight>

        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Login')} >
          <Text style={styles.textCalcel}>Cancel Register</Text>
        </TouchableOpacity>

      </View>
    );
  }


  register() {
    fetch('http://192.168.1.4:8080/webservice/register.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "username": this.state.username,
        "password": this.state.password,
        "email": this.state.email

      }),
    })
      .then((response) => response.json())
      .then((responseJson) => { })
      .catch((error) => { console.log(error) });
    alert('Đăng Ký Thành Công');

    this.props.navigation.navigate('Login');
  }
}


// Để làm một ứng dụng với đầy đủ các loại màn hình 
// Chúng ta cần lấy kích thước chính xác của từng thiết bị
// Chúng ta sử dụng bên dưới để làm điều đó
// Và thế chúng ta đã lấy được width và hieght của thiết bị và bân giờ bạn chỉ cần lấy chúng và đặt
// chiều cao cho một VIEW của bạn tính toán thế nào tùy bạn nhé
// Ví dụ : Muốn làm một họp thông báo hiển thị vừa đủ màn hình
const {width, height} = Dimensions.get('window');/////////////
//////////////////////////////////////////////////////////////

const styles = StyleSheet.create({
  viewText:{
    padding:10,
    backgroundColor:'#455a64'
  },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#455a64",
    padding: 10,
    paddingTop: 50,
    
  },
  logoContainer: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:'#455a64'
    
  },
  logo: {
    width: 128,
    height: 120,
    backgroundColor:'#455a64'
  },
  input: {
    height: 40, 
    width: width - 40,
    color: '#455a64',
    borderColor: '#FFFFFF',
    backgroundColor:'#FFFFFF',
    borderWidth: 2,
    borderRadius: 20,
    marginLeft:20,
    marginRight:20,
    marginTop:20
  },
  button: {
    height: 45,
    backgroundColor:'#6193ab',
    alignSelf: "stretch",
    justifyContent: "center",
    borderRadius:30,
    marginLeft:10,
    marginRight:10,
    marginTop:10
  },
  buttonText: {
    fontSize: 16,
    alignSelf: "center",
    textAlign: "center",
    color: "#FFF",
    fontWeight: "700",
  },
  textCalcel: {
    fontSize: 14,
    alignSelf: "center",
    textAlign: "center",
    color: "#FFF",
    fontWeight: "700",
    marginTop:20,
    marginBottom:20
  },
  subtext: {
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 5,
    opacity: 0.9,
  }
});

