import { PermissionsAndroid, Platform } from "react-native";
import Geolocation from 'react-native-geolocation-service';
// 키값 배정 
const API_KEY ="2fd82d9a978c2adf1404ff93711101a1"
//
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
export const weather=(setCrrentWeathers:any,setCrrentTemps:any,setCrrentName:any,setCrrentDescriptionWeather:any,setLocation:any)=>{
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
            setCrrentDescriptionWeather([weather.weather[0].description])
            console.log( '이것은',weather.weather[0].description);
            
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
