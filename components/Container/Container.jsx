import { View, ImageBackground } from "react-native";
import backgroundImg from "../../assets/background.png";
import { s } from './Container.style';

export function Container({children}) {
    return (
        <ImageBackground
            source={backgroundImg}
            style={s.background}
            imageStyle={s.image}
        >
            <View style={s.container}>
                {children}      
            </View>
        </ImageBackground>                    
    );
}