import React, { Component } from "react";
import { Image, View } from "react-native";
import {
  Content,
  Text,
  List,
  ListItem,
  Icon,
  Container,
  Left,
  Right,
  Badge,
  Body,
  Button,
  Item,
  Picker,
  DatePicker,
  Card,
  CardItem,
  Footer,
  FooterTab
} from "native-base";
import styles from "./style";
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
import { ScrollView } from "react-native-gesture-handler";

class OrderDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Name','peice * amount','Amount'],
      widthArr: [200,100,100]
    }
    this.closeOperation = this.props.closeOperation.bind(this);
  }

  render() {
    let state = this.state;
    let tableData = [
      ['Seppankizhangu Kara kulambu Sadham','2 * 100', '200'],
      ['Seppankizhangu Kara kulambu Sadham','2 * 100', '200'],
      ['Seppankizhangu Kara kulambu Sadham','2 * 100', '200'],
      ['Seppankizhangu Kara kulambu Sadham','2 * 100', '200'],
      ['Seppankizhangu Kara kulambu Sadham','2 * 100', '200'],
      ['Seppankizhangu Kara kulambu Sadham','2 * 100', '200'],
      ['Seppankizhangu Kara kulambu Sadham','2 * 100', '200'],
      ['Seppankizhangu Kara kulambu Sadham','2 * 100', '200'],
    ]
    return (
       <ScrollView>
      <View style={{marginTop:10,borderStyle:'solid' , borderTopWidth: 1}}>
      <View>
      <Text uppercase style={{padding:10}}>Order Detail 
      </Text> 
      <Button transparent style={{position:'absolute',right:-1,width:60 }} onPress={this.closeOperation}>
              <Icon name="close" style={{color:'#bfc6ea'}}/>
      </Button>
      </View>     
      </View>
      <CardItem>
     <View style={styles.container}>
        <ScrollView horizontal={true}>
          <View>
            <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
              <Row data={state.tableHead} widthArr={state.widthArr} style={styles.header} textStyle={styles.text}/>
            </Table>
            <ScrollView style={styles.dataWrapper}>
              <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
                {
                  tableData.map((rowData, index) => (
                    <Row
                      key={index}
                      data={rowData}
                      widthArr={state.widthArr}
                      style={[styles.row, index%2 && {backgroundColor: '#F7F6E7'}]}
                      textStyle={styles.text}
                    />
                  ))
                }
              </Table>
            </ScrollView>
          </View>
        </ScrollView>
      </View>  
      </CardItem>
      <View style={{margin:10,padding:10,borderStyle:'solid' , borderTopWidth: 1}}>
        <View style={{flex:1,alignItems:'flex-end'}}>
          <Text >Total 3500</Text>
        </View>
      </View>  
      <View>
      <Button onPress={this.closeOperation} full style={{margin:10,backgroundColor: 'rgb(76, 131, 122)'}}>
              <Text style={{color: '#f0f8ff'}}>Close</Text>
      </Button>
      </View>
      </ScrollView>
    );
  }
}

export default OrderDetail;
