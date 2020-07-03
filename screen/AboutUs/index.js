import React, { Component } from "react";
import { ImageBackground, View, StatusBar } from "react-native";
import { Container, Button, H3, Text, Header, Left, Icon, Title, Content, Body, Right } from "native-base";

import styles from "./styles";

class AboutUs extends Component {
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
          <Title>About Us</Title>
        </Body>
        <Right />
      </Header> 
      <Content>
      </Content>
    </Container>
    );
  }
}

export default AboutUs;
