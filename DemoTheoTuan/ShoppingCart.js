

import React, {Component} from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';



export default class ShoppingCart extends Component {
  render() {
    return (
      <View style={styles.container}>
          <Text>Shopping Cart Screen</Text>
          <Button title='Go to Home Screen' onPress={()=> this.props.navigation.navigate('Home')}
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
