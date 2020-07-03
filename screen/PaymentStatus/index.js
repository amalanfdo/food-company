import React, { Component } from "react";
import { ImageBackground, View, StatusBar } from "react-native";
import { Container, Button, H3, Text, Header, Left, Icon, Title, Content, Body, Right, List, ListItem, DatePicker, Picker, CardItem } from "native-base";
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import SearchPanel from '../../component/searchPanel'
import Pagination from '../../component/pagination'
import styles from "./styles";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchPanelDialog from "../../component/searchPanelDialog";
import OrderDetail from "../../component/orderDetail";
import Modal from 'react-native-modalbox';

const launchscreenBg = require("../../assets/launchscreen-bg.png");
const launchscreenLogo = require("../../assets/logo-kitchen-sink.png");

class PaymentStatus extends Component {
  constructor(props){
    super(props);
    this.state = {
      dialogVisible:false,
      recordVisible: false,
      isOpen: false,
      isDisabled: false,
      swipeToClose: true,
      sliderValue: 0.3
    }
    this.closeFuntion = this.closeFuntion.bind(this);
  }

  closeFuntion() {
    this.refs.modal4.close();
  }
  render() {
    return (
      <Container style={styles.container}>
      <Header style={styles.header}>
        <Left >
          <Button
            transparent
            onPress={() => this.props.navigation.openDrawer()}
          >
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title>Payment Status</Title>
        </Body>
        <Right >
          <Button  onPress={() => this.refs.modal3.open()}>
            {/* <Icon name='filter-minus' /> */}
            <Text>Filter</Text>
          </Button>
        </Right>
      </Header> 
      <Pagination/>
      <ScrollView>
      <List>
            <ListItem itemHeader first>
              <Left>
                <Text>Ordered Date </Text>
              </Left>
              <Body>
                <Text>Amount </Text>
              </Body>
              <Right style={{alignItems:'flex-start',flex:1,flexDirection:'row'}}>
                <Text>Payment Details</Text>
              </Right>
            </ListItem>
            <ListItem >
              <Left>
                <Text>July 20 2020</Text>
              </Left>
              <Body>
                <Text>350</Text>
              </Body>
              <Right style={{alignItems:'flex-start',flex:1,flexDirection:'row'}}>
                <Button transparent onPress={() => this.refs.modal4.open()}><Text style={{color:'#1e90ff'}}>View</Text></Button>
                <Button transparent><Text style={{color:'rgb(76, 131, 122)'}}>Pay</Text></Button>
              </Right>
            </ListItem>
            <ListItem >
              <Left>
                <Text>July 20 2020</Text>
              </Left>
              <Body>
                <Text>350</Text>
              </Body>
              <Right style={{alignItems:'flex-start',flex:1,flexDirection:'row'}}>
                <Button transparent><Text style={{color:'#1e90ff'}}>View</Text></Button>
                <Button transparent disabled><Text style={{color:'rgb(76, 131, 122)'}}>PAID</Text></Button>
              </Right>
            </ListItem>
          </List>
          </ScrollView>
        <Modal style={[styles.modal, styles.modal3]} position={"center"} ref={"modal3"} isDisabled={this.state.isDisabled}>
        <SearchPanelDialog />
        </Modal>
        <Modal position={"full"} ref={"modal4"} swipeToClose={false} swipeArea={0} isDisabled={this.state.isDisabled}>
        <OrderDetail closeOperation={this.closeFuntion}/>
        </Modal>
    </Container>
    );
  }
}

export default PaymentStatus;
