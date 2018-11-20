

import React from 'react';
import { StyleSheet, Text, View, Button, ListView} from 'react-native';

var DATA = [
  {sinhVien: 'Vo Phuong Quan',lopHoc: 'LTDD3'},
  {sinhVien: 'Viet Tran',lopHoc: 'LTDD3'},
  {sinhVien: 'Phuc Hoang',lopHoc: 'LTDD3'},
  {sinhVien: 'Xuan Phuc',lopHoc: 'LTDD3'},
  {sinhVien: 'Hoang Nam',lopHoc: 'LTDD3'},
  {sinhVien: 'Thanh Hoa',lopHoc: 'LTDD3'},

];


export default class HomeScreen extends React.Component {

  constructor() {
    super(); 
      const ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2 });
      this.state = {
        dataSource: ds.cloneWithRows(DATA)
      }
    
  }

  taoHang(property){
    return(
      <View style={{padding: 10}}>
        <Text style={{color: 'red'}}>{property.sinhVien}</Text>
        <Text>{property.lopHoc}</Text>
      </View>
    )
  }


  render() {
    return (
        <View style={styles.container}>
        <ListView dataSource={this.state.dataSource}
        renderRow = {this.taoHang}
        >

        </ListView>
       
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
