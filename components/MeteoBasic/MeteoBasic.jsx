import { View, Image } from 'react-native';

import { s } from './MeteoBasic.style';
import { Txt } from '../Txt/Txt';

export function MeteoBasic () {
    return (
        <>
            <View style={s.clock}>
                <Txt >Clock</Txt>
            </View>

            <Txt style={s.cityLabel}>City</Txt>

            <Txt style={s.weatherLabel}>Label</Txt>

            <View style={s.tempBox}>
                <Txt style={s.temp}>20°</Txt>
                <Image style={s.image} />
            </View>
        </>
    );
};