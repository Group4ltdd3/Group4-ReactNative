import React, { Component } from 'react'
import {
    StyleSheet, Text, View, Image,
    TouchableOpacity,
    Button
} from 'react-native'

export default class LogoutScreen extends Component{
    render(){
        return(
            <View>
               
                    <Button title="Thông tin tài khoản"  onPress={()=> this.props.navigation.navigate('Infor')}  color="green"></Button>
                
                    <Button title="Đăng xuất"  onPress={()=> this.props.navigation.navigate('Login')} color="red"></Button>
              
                
                
            </View>
            
        )
    }
}
styles = StyleSheet.create({
    buttonContainer:{
        backgroundColor:'#f76e44',
        paddingVertical: 15,
        marginTop:5
        
    },

    buttonContainer1:{
        backgroundColor:'#f76e44',
        marginTop:5
        
    },
    imageStyle:{
        width:150, height:150,
        marginBottom:20,
        marginLeft:102,
        marginTop:20,     
    },
    textname:{
        color: '#f7c744',
        fontSize:18,
        textAlign: 'center',
        marginTop:5,
        opacity:0.9
    },
    
    
    buttonText:{
    textAlign:'center',
   
    fontWeight:'bold',
    fontSize:18
    }
})
