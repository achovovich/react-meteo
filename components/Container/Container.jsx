import { View, ImageBackground } from "react-native";
import backgroundImg from "../../assets/background.png";
import { s } from './Container.style';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export function Container({children}) {
    return (
        <ImageBackground
            source={backgroundImg}
            style={s.background}
            imageStyle={s.image}
        >
            <SafeAreaView style={s.container}>{children}</SafeAreaView>
        </ImageBackground>                    
    );
}