import { Home } from "./pages/Home/Home";
import { s } from "./App.style";
import { View, ImageBackground, Text } from "react-native";
import backgroundImg from "./assets/background.png";
import AlataRegular from "./assets/fonts/Alata-Regular.ttf";
import { useFonts } from "expo-font";

export default function App() {
  const [isFontLoaded] = useFonts({
    AlataRegular: AlataRegular,
  });

  return (
    <>
      <ImageBackground
        source={backgroundImg}
        style={s.background}
        imageStyle={s.image}
      >
        {isFontLoaded ? <Home /> : null}
      </ImageBackground>
    </>
  );
}
