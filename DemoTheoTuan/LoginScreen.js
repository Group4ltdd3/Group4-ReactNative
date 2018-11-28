import React, { Component } from 'react'
import {
    StyleSheet, Text, View, Image,
    TouchableWithoutFeedback, StatusBar,
    TextInput, SafeAreaView, Keyboard, TouchableOpacity,
    KeyboardAvoidingView, Button, ToolbarAndroid
} from 'react-native'

export default class LoginScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
          password: "",
          username: "",
          
        };
      }



    render() {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle="light-content" backgroundColor= "#1c313a" />
                <KeyboardAvoidingView behavior='padding' style={styles.container} enabled>
                    <TouchableWithoutFeedback style={styles.container} 
                            onPress={Keyboard.dismiss}>
                            
                        <View style={styles.logoContainer}>
                            <View style={styles.logoContainer}>
                                <Image style={styles.logo}
                                    source={{uri:'https://cdn0.iconfinder.com/data/icons/BrushedMetalIcons_meBaze/512/Apple-03.png'}}>
                                </Image>
                                <Text style={styles.title}>Login</Text>
                            </View>
                            <View style={styles.infoContainer}>
                                <TextInput style={styles.input}
                                    value= {this.state.username}
                                    onChangeText={username => this.setState({ username })}
                                    placeholder="Enter username/email"
                                    placeholderTextColor='rgba(255,255,255,0.8)'
                                    keyboardType='email-address'
                                    returnKeyType='next'
                                    autoCorrect={false}
                                    onSubmitEditing={()=> this.refs.txtPassword.focus()}
                                />
                                <TextInput style={styles.input} 
                                    value= {this.state.password}
                                    onChangeText={password => this.setState({ password })}
                                    placeholder="Enter password"
                                    placeholderTextColor='rgba(255,255,255,0.8)'
                                    returnKeyType='go'
                                    secureTextEntry
                                    autoCorrect={false}
                                    ref={"txtPassword"}
                                />
                                <TouchableOpacity style={styles.buttonContainer} onPress={()=>this.login()} >
                                    <Text style={styles.buttonText}>SIGN IN</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.buttonContainer} onPress={()=>this.props.navigation.navigate('Register')} >
                                    <Text style={styles.buttonText}>SIGN UP</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </SafeAreaView>
             
        )
    }
    

    login(){
        //this.props.navigation.navigate('Home');
      
        fetch('http://192.168.0.109:8080/webservice/login.php', {
            method: 'POST',
            headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
  },
            body: JSON.stringify({
            username: this.state.username,
            password: this.state.password
  }),
})
        .then((response)=> response.json())
        .then((responseJson)=>{
            if (responseJson == "ok"){
                alert("Successfully Login");
                this.props.navigation.navigate('Home');
            }else {
                alert("Wrong Details");
            }
        })
        .catch((error)=>{
            console.log(error);
        })
        
    }
  
     
    
}
const styles = StyleSheet.create({
    container: {
        flex: 2,
       // backgroundColor: 'rgb(32, 53, 70)', 
       backgroundColor: "#455a64",
        flexDirection: 'column',
        
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    logo: {
        width: 128,
        height: 120,
        
    },
    title: {
        color: '#f7c744',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 5,
        opacity: 0.9,
        marginBottom: 150
    },
    infoContainer: {
        marginBottom: 70,
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 200,
        padding: 20,
        // backgroundColor: 'red'
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        color: '#FFF',
        marginBottom: 20,
        paddingHorizontal: 10
    },
    buttonContainer: {
        backgroundColor: '#f7c744',
        paddingVertical: 15,
        margin: 5

    },
    buttonText: {
        textAlign: 'center',
        color :'rgb(32, 53, 70)',
        fontWeight: 'bold',
        fontSize: 18
    },
    hello: {
        marginTop: 450
    }
    
})