

import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, Image} from 'react-native';



export default class HomeScreen extends React.Component {

  constructor(props) {
    super(props); 
      this.state = {
          mang:[]
      }
      console.disableYellowBox = true
    
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
          <View style={styles.button}>
          <Button title='Go to Detail Screen' onPress={()=> this.props.navigation.navigate('Detail')} />
          </View>
        </View>
        
        
      </View>}>

        </FlatList>
        
        
    );
  }

  componentDidMount(){
    fetch("http://192.168.1.9:8080/webservice/home.php")
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
  },
  button: {
    width: 165,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    marginLeft: 50
    

  }

  
  
});


