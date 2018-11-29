
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Image,
  KeyboardAvoidingView,
  
} from "react-native";

import { StackNavigator } from "react-navigation";

export default class RegisterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      username: "",
      
    };
  }

  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#16a085",
      elevation: null
    }
  };

   

  render() {
    return (
      <View behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={{uri:"https://cdn0.iconfinder.com/data/icons/BrushedMetalIcons_meBaze/512/Apple-03.png"}} />
          <Text style={styles.subtext}>Sign Up</Text>
        </View>
        <KeyboardAvoidingView behavior='padding' enabled>
          <TextInput
            value={this.state.username}
            onChangeText={username => this.setState({ username })}
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="rgba(255,255,255,0.7)"
            returnKeyType="next"
            onSubmitEditing={() => this.emailInput.focus()}
          />
          <TextInput
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            style={styles.input}
            placeholderTextColor="rgba(255,255,255,0.7)"
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
            placeholderTextColor="rgba(255,255,255,0.7)"
            ref={input => (this.passwordCInput = input)}
            onSubmitEditing={() => this.passwordInput.focus()}
            returnKeyType="next"
            
          />
          
        </KeyboardAvoidingView>
        <TouchableHighlight
          onPress={()=>this.register()}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Register</Text>
        </TouchableHighlight>
      </View>
    );
  }


  register(){
    fetch('http://192.168.1.13/webservice/register.php', {
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
.then((response)=>response.json())
.then((responseJson)=>{})
.catch((error)=>{console.log(error)});
alert('Đăng Ký Thành Công');

this.props.navigation.navigate('Login');
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1.2,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#455a64",
    padding: 20,
    paddingTop: 100,
    
  },
  logoContainer: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    
  },
  logo: {
    width: 200,
    height: 185
  },
  input: {
    height: 40,
    width: 350,
    marginBottom: 10,
    backgroundColor: "rgba(255,255,255,0.2)",
    color: "#fff",
    paddingHorizontal: 10
  },
  button: {
    height: 50,
    backgroundColor: "#f7c744",
    alignSelf: "stretch",
    marginTop: 10,
    justifyContent: "center",
    paddingVertical: 15,
    
  },
  buttonText: {
    fontSize: 18,
    alignSelf: "center",
    textAlign: "center",
    color: "#FFF",
    fontWeight: "700"
  },
  subtext: {
    color: "#f7c744",
    width: 160,
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 20,
  }
});

