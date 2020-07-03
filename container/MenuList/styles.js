const React = require("react-native");
const { Dimensions, Platform } = React;
const deviceHeight = Dimensions.get("window").height;

export default {
  text: {
    color: "#D8D8D8",
    bottom: 6,
    marginTop: 5
  },
  footerButton:{
    
  },
  textbox: {
    width: 50,
    maxWidth: 50,
    height: 42,
    justifyContent: 'center'
  },
  direction:  {
    flex:1,
    flexDirection:'row-reverse'
  },
  operatorColor: {
    backgroundColor: 'rgb(76, 131, 122)',
    marginLeft:5
  },
  header1: {
    margin:5,
    fontSize:26
  }
};
