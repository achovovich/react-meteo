import { Home } from "./pages/Home/Home";
import { s } from "./App.style";
import { View, ImageBackground, Text } from "react-native";
import backgroundImg from "./assets/background.png";

export default function App() {
  return (
    <>
      <ImageBackground
        source={backgroundImg}
        style={s.background}
        imageStyle={s.image}
      >
        <Home />
      </ImageBackground>
    </>
  );
}
