import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button} from 'react-native';

export default class InforScreen extends Component{
    render(){
        return(
            <View>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Thông Tin Tài Khoản</Text>
                </TouchableOpacity>
                <Image style= {styles.imageStyle}
                    source={require('./images/userviet.png')}
                    //style={{flexWrap: 'wrap', width: 150, height:150}}                    
                />
                <Text style={styles.textname}>Username</Text>
                <Text style={styles.textTen}>Tên:</Text>
                <Text style={styles.textSdt}>Số điện thoại:</Text>
                <Text style={styles.textEmail}>Email:</Text>
                <Text style={styles.textDiachi}>Địa chỉ:</Text>
                
            </View>
            
        )
    }
}
styles = StyleSheet.create({
    buttonContainer:{
        backgroundColor:'#f7c744',
        paddingVertical: 20,
        
    },
    textTen:{
        marginTop:10,
        fontSize:15
    },
    textSdt:{
        marginTop:10,
        fontSize:15
    },
    textEmail:{
        marginTop:10,
        fontSize:15
    },
    textDiachi:{
        marginTop:10,
        fontSize:15
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
    color: 'rgb(32,53,70)',
    fontWeight:'bold',
    fontSize:18
    }
})
