import { TouchableOpacity, View } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Container } from "../../components/Container/Container";
import { Txt } from "../../components/Txt/Txt";
import { s } from "./Forecast.style";

import { ForecastListItem } from "../../components/ForecastListItem/ForecastListItem";

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

    return (
        <Container>
            {header}
            <View style={{marginTop: 50}}>
                <ForecastListItem 
                    image = {require("../../assets/sun.png")}
                    day = "LUN"
                    date = "20/09"
                    temperature = "25"
                />
                                <ForecastListItem 
                    image = {require("../../assets/sun.png")}
                    day = "LUN"
                    date = "20/09"
                    temperature = "25"
                />
                                <ForecastListItem 
                    image = {require("../../assets/sun.png")}
                    day = "LUN"
                    date = "20/09"
                    temperature = "25"
                />
                                <ForecastListItem 
                    image = {require("../../assets/sun.png")}
                    day = "LUN"
                    date = "20/09"
                    temperature = "25"
                />
                                <ForecastListItem 
                    image = {require("../../assets/sun.png")}
                    day = "LUN"
                    date = "20/09"
                    temperature = "25"
                />
                                <ForecastListItem 
                    image = {require("../../assets/sun.png")}
                    day = "LUN"
                    date = "20/09"
                    temperature = "25"
                />
                                <ForecastListItem 
                    image = {require("../../assets/sun.png")}
                    day = "LUN"
                    date = "20/09"
                    temperature = "25"
                />                
            </View>
            
        </Container>
    );
};