

import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, Image, TouchableOpacity} from 'react-native';



export default class HomeScreen extends React.Component {

  constructor(props) {
    super(props); 
      this.state = {
          mang:[],
          refresh:false,
          page: 1
      }
      console.disableYellowBox = true
    
  }

  
  render() {
    return (
      
        <FlatList

        refreshing={this.state.refresh}
        onRefresh={()=>{this.refresh()}}
        onEndReachedThreshold={-0.2}
        onEndReached={()=>{this.onEndReached()}}

        data={this.state.mang}
        renderItem={({item})=>
      <TouchableOpacity style={styles.container} onPress={()=>{this.props.navigation.navigate('Detail')}}>
        <View style={styles.left}>
        <Image
          style={{width: 150, height: 150}}
          source={{uri: item.img}}
        />
        </View>
        <View style={styles.right}>
          
          <Text style={styles.title}>{item.title}</Text>
          <Text >{item.price}</Text>
          <Text>{item.des}</Text>
          
          
          
        </View>
        
        
      </TouchableOpacity>}>

        </FlatList>
        
        
    );
  }

  onEndReached(){
    fetch("http://192.168.0.111/webservice/page_data.php?trang=" + (this.state.page + 1))
    .then((response)=> response.json())
    .then((responseJson)=>{
      this.setState({
        mang: this.state.mang.concat(responseJson),
        page: this.state.page + 1
      });
    })
    .catch((error)=>{console.log(error)});
  }

  refresh(){
    this.setState({
      refresh: true
    });
    fetch("http://192.168.0.111/webservice/random_data.php")
    .then((response)=> response.json())
    .then((responseJson)=>{
      this.setState({
        mang:responseJson,
        refresh:false
      });
    })
    .catch((error)=>{console.log(error)});
  }

  componentDidMount(){
    fetch("http://192.168.0.111/webservice/home.php")
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
    backgroundColor: "#455a64"
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
  },
  title: {
    color:"#FFFAF0",
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20
  },

  
  
});


