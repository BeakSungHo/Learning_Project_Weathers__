import {StatusBar} from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import {ActivityIndicator, Dimensions, EventEmitter, PermissionsAndroid, Platform, ScrollView, StyleSheet, Text, View} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { styles } from './style/Styles';
import { customeWeather } from './weathers/CustomWeathers ';
import { weather } from './weathers/Weathers';
import { emoji } from './emoji/Emoji';
import Test4 from './Test/Test4';
import Test3 from './Test/test3';


export default function Main() {
  //
  interface ILocation {
    latitude: number;
    longitude: number;
  }

  //

  let numbertemp:number[] = [];
  let stringtemp:string[] = [];
  //const [location, setLocation] = useState(temp);
  const [location, setLocation] = useState<ILocation|undefined>(undefined);

  const [state, setState]=useState(0)
  const incrementCount=() =>setState (state + 1) ;
  // 날씨, 온도, 이름 
  const [crrentweather,setCrrentWeathers]=useState(stringtemp);
  const [crrenttemp,setCrrentTemps]=useState(numbertemp);
  const [crrentname,setCrrentName]=useState(stringtemp);
  const [crrentdescriptionweather,setCrrentDescriptionWeather]=useState(stringtemp);
  //학교
  const [schoolweather,setSchoolWeathers]=useState(stringtemp);
  const [schooltemp,setSchoolTemps]=useState(numbertemp);
  const [schoolname,setSchoolName]=useState(stringtemp);
  //
  // 이모지
  const icons = {
    "Clouds":""
    
  }
  //

  useEffect(()=>{
    weather(setCrrentWeathers,setCrrentTemps,setCrrentName,setCrrentDescriptionWeather,setLocation);
    customeWeather(setSchoolWeathers,setSchoolTemps,setSchoolName,36.3331 ,127.4139 );
  },[]);



  if (!location) {
    return (
      <View style={styles.container}>
        <Text style={[styles.cityName]}>대기하라 닝겐 </Text>
        <ActivityIndicator size={200}  />
        <ActivityIndicator size={200}  />
        <ActivityIndicator size={200}  />
      </View>
    );
  }
  if (state>100) {
    return (
      Test3()
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>
          {crrentname}  {state}
        </Text>
      </View>
      <ScrollView 
      showsHorizontalScrollIndicator={false} 
      pagingEnabled contentContainerStyle={styles.weather} 
      horizontal
     // overScrollMode ={'never'}
      onScroll={incrementCount}>
        {/* onScrollBeginDrag */}
        <View style={styles.day}>
          <View>
          <Text style={styles.temp}>
            {Math.round(crrenttemp[0])}'C
          </Text>
          {/* <Ionicons name="cloudy" size={24} color="black" /> */}
          </View>
          <Text style={styles.description}>
            {crrentweather}
          </Text>
          
          <Text style={styles.description2}>
            {emoji(crrentdescriptionweather[0])}
            {crrentdescriptionweather}
          </Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>
            {Math.round(schooltemp[0]) }'C 
          </Text>
          <Text style={styles.description}>
            {schoolweather}
          </Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>
            27
          </Text>
          <Text style={styles.description}>
            Sunny
          </Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>
            70
          </Text>
          <Text style={styles.description}>
            Sunny
          </Text>
        </View>
      </ScrollView>
      <StatusBar style="dark" />
      <Text style={styles.text}>위도 : {location.latitude}</Text>
      <Text style={styles.text}>경도 : {location.longitude}</Text>
    </View>
  );
}

