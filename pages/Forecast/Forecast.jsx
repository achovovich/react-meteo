import { TouchableOpacity, View } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Container } from "../../components/Container/Container";
import { Txt } from "../../components/Txt/Txt";
import { s } from "./Forecast.style";
import { DAYS, displayDay } from "../../services/date-service";

import { ForecastListItem } from "../../components/ForecastListItem/ForecastListItem";
import { getWeatherInterpretation } from "../../services/meteo-service";

export function Forecast() {

    const {params} = useRoute();
    const nav = useNavigation();

    const backButton = (
        <TouchableOpacity style={s.button} onPress={() => nav.goBack()}>
            <Txt> {"<"} </Txt>
        </TouchableOpacity>
    );
    const header = (
        <View style={s.header}>
            {backButton}
            <View style={s.texts}>
                <Txt> {params.city} </Txt>
                <Txt style={s.subtitle}> Previsions sur 7 jours </Txt>
            </View>
        </View>
    );

    const forecastList = (
        <View style={s.list}>
            { params.time.map( (time, index) => {
                    const code = params.weathercode[index];
                    const image = getWeatherInterpretation(code).image;
                    const date = new Date(time);
                    const day = DAYS[date.getDay()];
                    const dd = displayDay(date);
                    const temp = params.temperature_2m_max[index];
                    return (
                        <ForecastListItem 
                            key={time} 
                            image={image} 
                            day={day} 
                            date={dd} 
                            temperature={temp.toFixed(0) }
                        />
                    );
                    
                })
            }   

        </View>
    );

    return (
        <Container>
            {header}
            {forecastList}            
        </Container>
    );
};