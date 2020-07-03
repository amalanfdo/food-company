import { connect } from 'react-redux'
import React, { Component } from 'react';
import { Container, Button,  Text, Header, Left, Icon, Title, Body, Right, FooterTab, Footer, Card, CardItem, Input, Item, View, Content, Spinner, Label} from "native-base";
import styles from "./styles";
import { ScrollView } from "react-native-gesture-handler";
import { handleIncrement } from '../../actions/MenuFeed';


const mapStateToProps = (state , ownProps) => ({
    menuFeed : state.menuFeed
})

const mapDispatchToProps = ( dispatch , ownProps) => (
  {
    handleIncrement: id => dispatch(handleIncrement(id))
  }
)

class MenuList extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

   render() {
     console.log(this.props);
    if(!this.props.menuFeed) {
        return (
            <View>
                <Text> Empty </Text>
            </View>
        )
    }

    return (
     <ScrollView>
            {
                this.props.menuFeed.map( (item ,index) => 
                  <Card key={index} bordered style={{marginTop:5,padding:5}}>
                  <CardItem header bordered>
                      <Text> {index + 1} . {item.title}</Text>
                  </CardItem>
                  <CardItem bordered>
                    <Body>
                      <Text>
                          {item.description}
                      </Text>
                    </Body>
                  </CardItem>
                  <CardItem footer bordered>
                    <Left>
                  <Text>Price: {item.price}</Text>
                    </Left>
                    <Right style={styles.direction}>
                      <Button style={styles.operatorColor} onPress={() => this.props.handleIncrement(item.id)}><Text >+</Text></Button>
                      <Item regular>
                      <Label style={styles.textbox} >{item.orderCount}</Label>
                      </Item>
                      <Button style={styles.operatorColor}><Text >-</Text></Button>
                    </Right>
                  </CardItem>  
                  </Card>      
                )
            } 
    </ScrollView>
    
    );
   }
}

export default connect(mapStateToProps,mapDispatchToProps)(MenuList);
