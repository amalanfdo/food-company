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
  Body
} from "native-base";
import styles from "./style";

const logo = require("../../assets/user.png");
const datas = [
  {
    name: "Menu",
    route: "Menu",
    icon: "phone-portrait",
    bg: "#C5F442"
  },
  {
    name: "AdminChat",
    route: "AdminChat",
    icon: "chat-bubble-outline",
    type: "MaterialIcons",
    bg: "#C5F442"
  },
  {
    name: "Sign In",
    route: "LogIn",
    type: "SimpleLineIcons",
    icon: "login",
    bg: "#477EEA"
  },
  {
    name: "AboutUs",
    route: "AboutUs",
    icon: "account-question-outline",
    type: "MaterialCommunityIcons",
    bg: "#477EEA"
  }
];

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4
    };
  }

  render() {
    return (
      <Container>
        <Content
          bounces={false}
          style={{ flex: 1, backgroundColor: "#fff", top: -1 }}
        >
        <View style={styles.container}>
          <View style={styles.top}>
            <Image
              source={logo}
              style={styles.photo} />
            <View style={styles.containerColumn}>
              <Text style={styles.userName}>Amalan T</Text>
              <Text style={styles.userHandle}>994763522</Text>
            </View>
          </View>
        </View>
        <List
            dataArray={datas}
            renderRow={data =>
              <ListItem
                button
                noBorder
                onPress={() => this.props.navigation.navigate(data.route)}
              >
                <Left>
                  <Icon
                    name={data.icon}
                    type= {data.type}
                    style={{ color: "#777", fontSize: 26, width: 30 }}
                  />
                  <Text style={styles.text}>
                    {data.name}
                  </Text>
                </Left>
              </ListItem>}
              keyExtractor={(data, index) => index.toString()}
          />
        </Content>
      </Container>
    );
  }
}

export default SideBar;
