import React, { Component } from "react";
import { Container, Button,  Text, Header, Left, Icon, Title, Body, Right, FooterTab, Footer, Card, CardItem, Input, Item} from "native-base";
import styles from "./styles";
import { ScrollView } from "react-native-gesture-handler";

class MenuFeed extends Component {
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
          <Title> Ayyam Ittu Unn Feed
          </Title>
        </Body>
        <Right >
          <Title>July 20 2020</Title>
        </Right>      
      </Header> 
      <ScrollView>
      <Card>
            <CardItem header bordered>
              <Text>Seppankizhangu Kara kulambu Sadham</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                    Thinam oru suvai
                </Text>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Left>
                <Text>Price: 50</Text>
              </Left>
              <Right style={styles.direction}>
                <Button style={styles.operatorColor}><Text >+</Text></Button>
                <Item regular>
                  <Input style={styles.textbox}/>
                </Item>
                <Button style={styles.operatorColor}><Text >-</Text></Button>
              </Right>
            </CardItem>
          </Card>
          <Card>
            <CardItem header bordered>
              <Text>Seppankizhangu Kara kulambu Sadham</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                    Thinam oru suvai
                </Text>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Left>
                <Text>Price: 50</Text>
              </Left>
              <Right style={styles.direction}>
                <Button style={styles.operatorColor}><Text >+</Text></Button>
                <Item regular>
                  <Input style={styles.textbox}/>
                </Item>
                <Button style={styles.operatorColor}><Text >-</Text></Button>
              </Right>
            </CardItem>
          </Card>
          <Card>
            <CardItem header bordered>
              <Text>Seppankizhangu Kara kulambu Sadham</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                    Thinam oru suvai
                </Text>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Left>
                <Text>Price: 50</Text>
              </Left>
              <Right style={styles.direction}>
                <Button style={styles.operatorColor}><Text >+</Text></Button>
                <Item regular>
                  <Input style={styles.textbox}/>
                </Item>
                <Button style={styles.operatorColor}><Text >-</Text></Button>
              </Right>
            </CardItem>
          </Card>
          <Card>
            <CardItem header bordered>
              <Text>Seppankizhangu Kara kulambu Sadham</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                    Thinam oru suvai
                </Text>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Left>
                <Text>Price: 50</Text>
              </Left>
              <Right style={styles.direction}>
                <Button style={styles.operatorColor}><Text >+</Text></Button>
                <Item regular>
                  <Input style={styles.textbox}/>
                </Item>
                <Button style={styles.operatorColor}><Text >-</Text></Button>
              </Right>
            </CardItem>
          </Card>
          <Card>
            <CardItem header bordered>
              <Text>Seppankizhangu Kara kulambu Sadham</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                    Thinam oru suvai
                </Text>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Left>
                <Text>Price: 50</Text>
              </Left>
              <Right style={styles.direction}>
                <Button style={styles.operatorColor}><Text >+</Text></Button>
                <Item regular>
                  <Input style={styles.textbox}/>
                </Item>
                <Button style={styles.operatorColor}><Text >-</Text></Button>
              </Right>
            </CardItem>
          </Card>
        </ScrollView>
      <Footer >
          <FooterTab >
            <Button full style={{backgroundColor: 'rgb(76, 131, 122)'}}>
              <Text style={{color: '#f0f8ff'}}>Confirm Order</Text>
            </Button>
          </FooterTab>
      </Footer>
    </Container>
    );
  }
}

export default MenuFeed;
