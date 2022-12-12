
import React, {  } from 'react';
import {ImageBackground, Text, View} from 'react-native';
import { styles } from '../style/Styles';

const image = {  uri: "https://scontent-ssn1-1.xx.fbcdn.net/v/t39.30808-1/306142653_388754710116050_2930733373737032676_n.jpg?stp=cp0_dst-jpg_e15_p120x120_q65&_nc_cat=106&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=etdLwlFgkI4AX_j_Pvg&_nc_ht=scontent-ssn1-1.xx&oh=00_AfALlMrXXLRB7_IU9snG-kkpREj7cS28c9zZlT320E5G2A&oe=6395FD88" };

export default function Test3() {

  return (  
  <View style={styles.container2}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>오해 입니다.</Text>
    </ImageBackground>
  </View>
   
  );
}
