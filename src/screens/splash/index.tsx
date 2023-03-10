import { useEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { useRenderScreen } from "../../hooks/render-screen";
import { styles } from "./styles";

export function SplashScreen() {
  const { setCurrentScreen } = useRenderScreen();

  useEffect(() => {
    const timerId = setTimeout(() => setCurrentScreen("signin"), 1500);
    return () => clearTimeout(timerId);
  }, []);

  return (
    <View style={styles.container}>
      <Text testID="screen-title">Splash Screen</Text>
      <ActivityIndicator size={"large"} color="blue" />
    </View>
  );
}
