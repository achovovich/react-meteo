import { Alert, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import { requestForegroundPermissionsAsync, getCurrentPositionAsync} from "expo-location";

import { s } from './Home.style';
import { MeteoAPI } from './../../api/meteo';
import { Txt } from '../../components/Txt/Txt';
import { MeteoBasic } from '../../components/MeteoBasic/MeteoBasic';
import { getWeatherInterpretation } from '../../services/meteo-service';

export function Home({}) {

    useEffect(() => {
        getCoords();

    }, []);

    useEffect(() => {
        if (coords) {
            fetchWeather(coords);

        }
    }, [coords]);

    const [coords, setCoords] = useState(null);
    const [weather, setWeather] = useState(null);
    const currentWeather = weather ?.current_weather;


    async function getCoords() {
        
        let {status} = await requestForegroundPermissionsAsync();
        if (status === 'granted') {                        
            const location = await getCurrentPositionAsync();
            setCoords({
                lat: location.coords.latitude,
                lng: location.coords.longitude
            });
            

        } else {
            setCoords({lat: "48.85", lng: "2.35"});//Paris par défaut
        }
    }

    async function fetchWeather(coords) {
        const weather = await MeteoAPI.fetchWeatherFromCoords(coords);                
        setWeather(weather);
    }
    
    return currentWeather ? (
        <>            
            <View style={s.basic}>                
                <MeteoBasic 
                    temperature={Math.round(currentWeather.temperature)}
                    city=''
                    interpretation={getWeatherInterpretation(currentWeather.weathercode)}
                    />
            </View>
            <View style={s.search}></View>
            <View style={s.advance}></View>
        </>
    ) : null ;
}