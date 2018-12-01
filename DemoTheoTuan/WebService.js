

import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, Image} from 'react-native';



export default class WebService extends React.Component {

  constructor(props) {
    super(props); 
      this.state = {
          mang:[]
      }
    
  }

  
  render() {
    return (
        <FlatList
        data={this.state.mang}
        renderItem={({item})=>
      <View style={styles.container}>
        <View style={styles.left}>
        <Image
          style={{width: 150, height: 150}}
          source={{uri: item.img}}
        />
        </View>
        <View style={styles.right}>
          <Text>{item.des}</Text>
        </View>
        
        
      </View>}>

        </FlatList>
    );
  }

  componentDidMount(){
    fetch("http://192.168.1.13/webservice/home.php")
    .then((response)=> response.json())
    .then((responseJson)=>{
      this.setState({
        mang:responseJson
      });
    })
    .catch((error)=>{console.log(error)});
  }

  
  
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth:1,
    padding: 50,
    borderRightWidth: 1,
    flexDirection: "row",
    backgroundColor: "#66cdaa"
  },

  left: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  
  right: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }

  
  
});


