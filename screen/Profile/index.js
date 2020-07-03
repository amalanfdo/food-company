import React, { Component } from "react";
import { ImageBackground, View, StatusBar } from "react-native";
import { Container, Button, H3, Text, Header, Left, Icon, Title, Content, Body, Right, Input, Item, Label, Picker } from "native-base";
import UserDetail from '../../component/userDetail'

import styles from "./styles";


class Profile extends Component {
  render() {
    return (
      <Container style={styles.container}>
      <Header style={styles.header}>
        <Left>
          <Button
            transparent
            onPress={() => this.props.navigation.openDrawer()}
          >
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title>Profile</Title>
        </Body>
        <Right />
      </Header> 
      <Content>
        <UserDetail/>
        <Body style={{margin:5}}>
          <Button>
            <Text> Save</Text>
          </Button>
        </Body>
      </Content>
    </Container>
    );
  }
}

export default Profile;
