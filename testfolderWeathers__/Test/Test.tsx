import {StatusBar} from 'expo-status-bar';
import { useEffect, useState } from 'react';
import {Dimensions, PermissionsAndroid, Platform, ScrollView, StyleSheet, Text, View} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import { styles } from '../style/Styles';

const ask = async ()=> {
  try {
    // if (Platform.OS === 'ios') {//아이폰 os
    //   return await Geolocation.requestAuthorization('always');
    // }
    // 안드로이드 위치 정보 수집 권한 요청
    if (Platform.OS === 'android') {
      return await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
    }
  } catch (e) {
    console.log(e);
  }
};
// 키값 배정 
const API_KEY ="2fd82d9a978c2adf1404ff93711101a1"
//
export default function Test() {
  //
  interface ILocation {
    latitude: number;
    longitude: number;
  }

  //

  let numbertemp:number[] = [];
  let stringtemp:string[] = [];
  let stringtemp2:any[] = [];
  //const [location, setLocation] = useState(temp);
  const [location, setLocation] = useState<ILocation|undefined>(undefined);
  const [ok, setOk] = useState(true);
  // 
  const [state, setState]=useState(0)
  const incrementCount=() =>setState (state=> state + 1) ;
  // 날씨, 온도, 이름 
  const [crrentweather,setCrrentWeathers]=useState(stringtemp);
  const [crrenttemp,setCrrentTemps]=useState(numbertemp);
  const [crrentname,setCrrentName]=useState(stringtemp2);
  //
const weather=()=>{
  ask().then(result => {
    console.log({result});
    if (result === 'granted'){
      const _watchId= Geolocation.getCurrentPosition(//getCurrentPosition
        async pos =>{
          const {latitude,longitude}=pos.coords;
          //setLocation(pos.coords);
          const weather = await (await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)).json();
          setCrrentWeathers([weather.weather[0].main ]);
          setCrrentTemps([ weather.main.temp])
          setCrrentName([weather.name])
          console.log(weather.name);
          
          setLocation({
            latitude,
            longitude,
          });
          console.log('좌표값',pos.coords,latitude);
        },
        error => {
          console.log('에러 : ',error);
        },
        {
          enableHighAccuracy: true,
          distanceFilter:0,
          //interval : 5000,
          //fastestInterval : 2000,
          timeout: 3600,
          maximumAge: 3600,
        }
      );

    }
  });
}


  useEffect(()=>{
    weather();
  },[]);

  if (!location) {
    return (
      <View>
        <Text>Splash Screen</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>
          {crrentname} {state}  {crrentweather} : { Math.round(crrenttemp[0])} 'C
        </Text>
      </View>
      <ScrollView 
      showsHorizontalScrollIndicator={false} 
      pagingEnabled contentContainerStyle={styles.weather} 
      horizontal
      onScrollBeginDrag={incrementCount}>
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
            27
          </Text>
          <Text style={styles.description}>
            Sunny
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
            27
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

