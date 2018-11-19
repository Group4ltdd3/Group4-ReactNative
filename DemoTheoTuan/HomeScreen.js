

import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';



export default class HomeScreen extends React.Component {
  render() {
    return (
        <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button title="Go to Detail Screen" onPress={() =>this.props.navigation.navigate('Detail')}>

        </Button>
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
