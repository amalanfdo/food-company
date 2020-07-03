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
  CardItem
} from "native-base";
import styles from "./style";

class Pagination extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card transparent style={{padding:0}}>
        <CardItem style={{padding:0}}>
        <View style={{flex:1,flexDirection:'row',justifyContent: 'flex-end'}}>
          <Text style={{color:'rgb(76, 131, 122)' ,fontSize:18,paddingTop:10}}> 10-20 / 2300 record(s)</Text>
          <Button transparent style={{marginLeft:3}}><Icon name="arrow-back" /></Button>
          <Button transparent style={{marginLeft:3}}><Icon name="arrow-forward" /></Button>
        </View>
        </CardItem>
      </Card>
    );
  }
}

export default Pagination;
