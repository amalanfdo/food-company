import React, { Component } from "react";
import { Provider } from 'react-redux'
import { createStore } from "redux";
import rootReducer from '../../reducers/MenuFeed'
import { Container, Button,  Text, Header, Left, Icon, Title, Body, Right, FooterTab, Footer, Card, CardItem, Input, Item, View, Content, Spinner} from "native-base";

import styles from "./styles";
import MenuList from "../../container/MenuList";

const HeaderComponent = (props) => {
  return (
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
      <Title> Food Company
      </Title>
    </Body>
    <Right>
       {props.children}
    </Right>
  </Header>
  );
}

class MenuFeed extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      isReady : false
    }
    
  }

  componentDidMount() {
    this.setState({
      isReady:false
    })
    setTimeout(() => {
      console.log(intialState);
      let intialState = {
        'menuFeed': [{
          id:'1',
          title : 'Seppankizhangu Kara kulambu Sadham',
          description: 'Thinam oru suvai',
          price: 50,
          orderCount: 0
        },{
          id:'2',
          title : 'Seppankizhangu Kara kulambu Sadham',
          description: 'Thinam oru suvai',
          price: 50,
          orderCount: 0
        },{
          id:'3',
          title : 'Seppankizhangu Kara kulambu Sadham',
          description: 'Thinam oru suvai',
          price: 50,
          orderCount: 0
        },{
          id:'4',
          title : 'Seppankizhangu Kara kulambu Sadham',
          description: 'Thinam oru suvai',
          price: 50,
          orderCount: 0
        }
      ]
      };
      this.store = createStore(rootReducer , intialState);
      this.setState({
        isReady:true
      });
    }, 10); 
  }

  componentDidUpdate() {
    console.log('update')
  }

  render() {
    if(!this.state.isReady){
      return (
      <Container style={styles.container}>
          <HeaderComponent />
          <Content >
            <View style={{flex:1,justifyContent: "center"}}> 
             <Spinner color='blue' />
            </View>
          </Content>
      </Container>
      );
  }
  return (
    <Container style={styles.container}>
    <HeaderComponent >
      <Title>July 20 2020</Title>
    </HeaderComponent>
     <Provider store={this.store}>
        <MenuList/>
        <Footer >
        <FooterTab >
          <Button full style={{backgroundColor: 'rgb(76, 131, 122)'}}>
              <Text style={{color: '#f0f8ff'}}>Confirm Order</Text>
          </Button>
        </FooterTab>
      </Footer>
      </Provider>
    </Container>
    );
  }
};

export default MenuFeed;
