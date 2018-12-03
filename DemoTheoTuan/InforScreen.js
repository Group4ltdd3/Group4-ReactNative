import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button} from 'react-native';

export default class InforScreen extends Component{
    static navigationOptions = {
        header: null // Không sử dụng thanh toolbar giống trong Android
      };
    
    render(){
        return(
          
            <View style={styles.container}>
        
            <View>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Thông Tin Tài Khoản</Text>
                </TouchableOpacity>
                <Image style= {styles.imageStyle}
                    source={require('./images/userviet.png')}
                    //style={{flexWrap: 'wrap', width: 150, height:150}}                    
                />
                <Text style={styles.textname}>Thông tin</Text>
                <Text style={styles.textTen}>Username : user</Text>
                <Text style={styles.textEmail}>Email : user@admin.com</Text>
                            
            </View>
            </View>
                       
        )
    }
}
styles = StyleSheet.create({
    container: {
        flex: 2,
       // backgroundColor: 'rgb(32, 53, 70)', 
       backgroundColor: "#efe2a6",
        flexDirection: 'column',
      },
    buttonContainer:{
        backgroundColor:'#16a085',
        paddingVertical: 20,
        
    },
    textTen:{
        marginTop:10,
        fontSize:20
    },
  
    textEmail:{
        marginTop:10,
        fontSize:20
    },
    
    imageStyle:{
        width:150, height:150,
        marginBottom:20,
        marginLeft:102,
        marginTop:20,     
    },
    textname:{
        fontSize:23,
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
