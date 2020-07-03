import { View, Item, Icon, Label, Picker, Input } from "native-base";
import React, { Component } from "react";

class UserDetail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{margin:5}}>
        <Item floatingLabel> 
            <Icon active name='contact' />
            <Label>Phone Number</Label>
            <Input />
        </Item>
        <Item floatingLabel> 
            <Icon active name='home'/>
            <Label >Name</Label>
            <Input />
        </Item>
        <Item picker> 
            <Icon active name='home' />
            <Picker
              mode="dropdown"
              iosHeader="Select  your SIM"
              iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "#007aff", fontSize: 25 }} />}
              style={{ width: undefined }}
            >
              <Picker.Item label="Wallet" value="key0" />
              <Picker.Item label="ATM Card" value="key1" />
              <Picker.Item label="Debit Card" value="key2" />
              <Picker.Item label="Credit Card" value="key3" />
              <Picker.Item label="Net Banking" value="key4" />
            </Picker>
        </Item>
        <Item picker> 
            <Icon active name='home' />
            <Picker
              mode="dropdown"
              iosHeader="Select  your SIM"
              iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "#007aff", fontSize: 25 }} />}
              style={{ width: undefined }}
            >
              <Picker.Item label="Wallet" value="key0" />
              <Picker.Item label="ATM Card" value="key1" />
              <Picker.Item label="Debit Card" value="key2" />
              <Picker.Item label="Credit Card" value="key3" />
              <Picker.Item label="Net Banking" value="key4" />
            </Picker>
        </Item>
        </View>
    );
  }
}

export default UserDetail;
