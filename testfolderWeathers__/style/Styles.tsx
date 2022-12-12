import { Dimensions,StyleSheet} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
//StyleSheet.create 을 지정하지않으면 자동완성기능을 지원하지 않는다.
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'lightgoldenrodyellow',
    },
  
    city: {
      flex: 1.5,
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    weather:{
    },
  
    cityName: {
      fontSize:50,
      color: 'black',
      fontWeight: '700',
    },
  
    day: {
      width: SCREEN_WIDTH,
      alignItems: 'flex-start',
    },
  
    temp:{
      marginTop: 30,
      fontSize: 168,
      color: 'black',
      marginLeft:30
    },
  
    description:{
      color: 'black',
      fontSize: 60,
      marginTop: -40,
      marginLeft:30
    }, 
    description2:{
      color: 'black',
      fontSize: 30,
      marginTop: -10,
      marginLeft:30
    },


    container2: {
      flex: 1,
    },
    image: {
      flex: 1,
      justifyContent: "flex-end"
    },
    text: {
      color: "white",
      fontSize: 42,
      lineHeight: 50,
      fontFamily : 'a',
      textAlign: "left",
      backgroundColor: "#000000cc"
    }
  });
  
  