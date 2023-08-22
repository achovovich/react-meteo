import { View, Image } from 'react-native';

import { s } from './MeteoBasic.style';
import { Txt } from '../Txt/Txt';
import { Clock } from '../Clock/Clock';

export function MeteoBasic ( {temperature, city, interpretation}) {
    return (
        <>
            <View style={s.clock}>
                <Clock />
            </View>

            <Txt style={s.cityLabel}>{city}</Txt>

            <Txt style={s.weatherLabel}>{interpretation.label}</Txt>

            <View style={s.tempBox}>
                <Txt style={s.temp}>{temperature}°</Txt>
                <Image style={s.image} source={interpretation.image}/>
            </View>
        </>
    );
};