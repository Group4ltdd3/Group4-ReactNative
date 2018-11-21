/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity,
  ActivityIndicator,
  Button
} from 'react-native';
// import REACT NATIVE FIREBASE
//import firebase from 'firebase';
//import firebase from 'react-native-firebase'
//import * as firebase from 'firebase'
//import { firebaseConfig } from '../configs/firebase'




export default class App extends Component {

  // onPressSignIn() {
  //   thi.setState({
  //     authenticating:true,
  //   })
  // }

  // componentWillMount() {
  //   const firebaseConfig = {
  //     apiKey: 'AIzaSyD6z3keqUSQRGAeScIFEXBO6Fs96NU4r7g',
  //     authDomain: 'managerfood-9431e.firebaseapp.com',    
  //   }

  //   firebase.initalizeApp(firebaseConfig);
  // }

  constructor(props) {
    super(props);
    this.state = {
      id: 'Tên tài khoản',
      password: 'Mật khẩu',
      //authenticating: false,
      email: '', 
      password: '', 
      errorMessage: null
    };
    // De khong hien thi nhung thong bao mau vang : HIDE NOTI YELLOW
    console.disableYellowBox = true
  }

  // renderCurrenState() {
  //   if (this.state.authenticating) {
  //     return (
  //       <View>
  //         <ActivityIndicator size='large' />
  //       </View>
  //     )
  //   }
  // }

  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.welcome}></Text> 

        <TextInput
          style={[styles.textInputID]}
          onChangeText={(id) => this.setState({id})}/> 

        <TextInput
          autoCorrect={false}
          secureTextEntry={true}
          style={[styles.textInputPassword]}
          onChangeText={(password) => this.setState({ password })}/>

      {/* <TouchableOpacity
          style={[styles.btnLogin]}
          onPress={() => this.onPressSignIn() }>

          <View style={[styles.countContainer]}>
            <Text style={[styles.txtTouchLogin]}> LOGIN </Text> 
          </View>

        </TouchableOpacity> */}

        <View style={styles.container}>
          
          <Button title='LOGIN' onPress={()=>this.props.navigation.navigate('Home')}
          />
      </View>
      </View>
    );
  }
}


// roi ok nhe

// Style (mau sac cung nhu kieu cho cac item) giong nhu css
// Lam dep cho giao dien
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9c3fbe',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: '#FFFFFF'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  countContainer: {
    alignItems: 'center',
    padding: 10
  },
  textInputID: {
    height: 40, width: 300,
    color: '#FFFFFF',
    borderColor: '#FFFFFF',
    borderWidth: 2,
    borderRadius: 10,
    marginTop: 50,
  },
  textInputPassword: {
    height: 40,
    width: 300,
    color: '#FFFFFF',
    borderColor: '#FFFFFF',
    borderWidth: 2,
    borderRadius: 10,
    marginTop: 10,
  },
  btnLogin: {
    height: 40,
    width: 300,
    backgroundColor: '#FFFFFF',
    color: '#FFFFFF',
    borderRadius: 10,
    marginTop: 40,
  },
  txtTouchLogin:{
    color: '#9c3fbe'
  }
});
