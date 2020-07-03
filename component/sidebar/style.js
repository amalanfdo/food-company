const React = require("react-native");
const { Platform, Dimensions } = React;

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default {
  container: {
    backgroundColor: 'rgb(63, 81, 181)',
    paddingTop: 10
  },
  top:{
    flex: 1,
    flexDirection: 'row',
    paddingBottom: 10,
    paddingLeft: 10,
    marginBottom:10
  },
  photo: {
    width: 50,
    height: 50,
    borderRadius: 30,
    marginTop: 20
  },
  containerColumn : {
    flex:1,
    paddingLeft: 10
  },
  userName:{
    marginTop: 20,
    color: "white",
    fontWeight: "bold"
  },
  userHandle:{
    color: "rgb(136, 153, 166)",
    color: "white",
    fontWeight: "300"
  },
  text: {
    fontWeight: Platform.OS === "ios" ? "500" : "400",
    fontSize: 16,
    marginLeft: 20
  }
};
