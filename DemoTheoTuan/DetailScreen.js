

import React, {Component} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';



export default class DetailScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
          <Text>Detail Screen</Text>
          <Button title='Go to ShoppingCart Screen' onPress={()=>this.props.navigation.navigate('Shopping')}
          />
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
  
  
});
