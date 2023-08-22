import { s } from './MeteoAdvanced.style';
import { View } from 'react-native';
import { Txt } from '../Txt/Txt';

export function MeteoAdvanced ({dusk, dawn, wind}) {
    return (
        <View style={s.container}>
            <View style={s.block}>
                <Txt style={s.label}>Aube</Txt>
                <Txt style={s.value}>{dusk}</Txt>
            </View>
            <View style={s.block}>
                <Txt style={s.label}>Crépuscule</Txt>
                <Txt style={s.value}>{dawn}</Txt>
            </View>
            <View style={s.block}>
                <Txt style={s.label}>Vent</Txt>
                <Txt style={s.value}>{wind} Km/h</Txt>
            </View>                        
        </View>
    );
};