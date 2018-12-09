import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';

export default class InforScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mang: []


        }


    }
    static navigationOptions = {
        header: null // Không sử dụng thanh toolbar giống trong Android
    };

    render() {
        return (

            <View style={styles.container}>

                <View>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>User Informations</Text>
                    </TouchableOpacity>
                    <Image style={styles.imageStyle}
                        source={require('./images/userviet.png')}
                    //style={{flexWrap: 'wrap', width: 150, height:150}}                    
                    />

                    <Text style={styles.textTen}>Username : thai</Text>
                    <Text style={styles.textEmail}>Email : thai@gmail.com</Text>

                </View>
                <TouchableOpacity style={styles.buttonContainerLogout} onPress={() => this.logOut()}>
                    <Text style={styles.buttonLogout}> Logout</Text>
                </TouchableOpacity>
            </View>


        )
    }

    logOut() {
        alert('Logout Successfully');
        this.props.navigation.navigate('Login');
    }



}
styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'rgb(32, 53, 70)', 
        backgroundColor: "#efe2a6",
        flexDirection: 'column',
    },
    buttonContainer: {
        backgroundColor: '#16a085',
        paddingVertical: 20,

    },
    textTen: {
        marginTop: 10,
        fontSize: 20,
        textAlign: 'center'
    },

    textEmail: {
        marginTop: 10,
        fontSize: 20,
        textAlign: 'center'
    },

    imageStyle: {
        width: 100, 
        height: 100,
        marginBottom: 20,
        marginLeft: 140,
        marginTop: 20,
    },
    textname: {
        fontSize: 23,
        textAlign: 'center',
        marginTop: 5,
        opacity: 0.9
    },


    buttonText: {
        textAlign: 'center',
        color: 'rgb(32,53,70)',
        fontWeight: 'bold',
        fontSize: 18
    },
    buttonContainerLogout: {
        backgroundColor: '#6193ab',
        paddingVertical: 15,
        borderRadius: 30,
        height: 40,
        width: 150,
        marginTop: 10,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 120

    },
    buttonLogout: {
        color: '#FFFFFF'
    }
})
