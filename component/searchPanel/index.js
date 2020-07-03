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

class SearchPanelDialog extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card bordered>
      <CardItem bordered >
        <Left>
          <Text> SearchPanel </Text>
        </Left>
        <Body/>
        <Right>
          <Button transparent><Icon name="arrow-down"/></Button>
        </Right>
      </CardItem>
      <CardItem bordered>
        <Left>
        <Picker
            mode="dropdown"
                style={{ width: undefined }}
                placeholder="Payment Status"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
              >
                <Picker.Item label="ALL" value="ALL" />
                <Picker.Item label="PAID" value="PAID" />
                <Picker.Item label="PAY" value="PAY" />
          </Picker>
        </Left>
        <Body>
        {/* <DatePicker
            defaultDate={new Date(2018, 4, 4)}
            minimumDate={new Date(2018, 1, 1)}
            maximumDate={new Date(2018, 12, 31)}
            locale={"en"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={"fade"}
            androidMode={"default"}
            placeHolderText="Ordered Date"
            textStyle={{ color: "green" }}
            placeHolderTextStyle={{ color: "#d3d3d3" }}
            disabled={false}
            /> */}
          </Body>
      </CardItem>
      <CardItem footer bordered>
        <View style={{flex:1,flexDirection:'row',justifyContent: 'flex-end'}}>
          <Button style={{marginLeft:5}}><Text>Search</Text></Button>
          <Button style={{marginLeft:5}}><Text>Clear</Text></Button>
        </View>
      </CardItem>
      </Card>
    );
  }
}

export default SearchPanelDialog;
