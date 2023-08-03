import { Alert, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import { requestForegroundPermissionsAsync, getCurrentPositionAsync} from "expo-location";

import { s } from './Home.style';
import { MeteoAPI } from './../../api/meteo';

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

    return (
        <>            
            <View style={s.basic}></View>
            <View style={s.search}></View>
            <View style={s.advance}></View>
        </>
    );
}