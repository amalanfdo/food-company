import React, { Component } from "react";
import { ImageBackground, View, StatusBar } from "react-native";
import { Container, Button, H3, Text, Header, Left, Icon, Title, Content, Body, Right } from "native-base";
import UserDetail from '../../component/userDetail'

import styles from "./styles";

const launchscreenBg = require("../../assets/launchscreen-bg.png");
const launchscreenLogo = require("../../assets/logo-kitchen-sink.png");

class Login extends Component {
  render() {
    return (
      <Container style={styles.container}>
      <Header>
        <Left>
          <Button
            transparent
            onPress={() => this.props.navigation.openDrawer()}
          >
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title>Login</Title>
        </Body>
        <Right />
      </Header> 
      <Content>
        <UserDetail/>
        <Body style={{margin:5}}>
          <Button>
            <Text> LogIn</Text>
          </Button>
        </Body>
      </Content>
    </Container>
    );
  }
}

export default Login;
