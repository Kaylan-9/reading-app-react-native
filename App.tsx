import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View, ActivityIndicator, Text } from "react-native";
import useRandomMangas from "./src/hooks/useRandomProviders";

const STYLES= ['auto', 'dark', 'light'] as const;
const TRANSITIONS= ['fade', 'slide', 'none'] as const;
const COLORS= {
  primary: '#000000',
  secondary: '#ffffff11',
  tertiary: '#333'
}

const App= ({}): any => {
  const [statusBarStyle, setStatusBarStyle] = useState(STYLES[2]);
  const [statusBarTransition, setStatusBarTransition] = useState<'fade' | 'slide' | 'none'>(TRANSITIONS[0]);
  const [hidden, setHidden] = useState(false);
  const {mangas} = useRandomMangas();

  return (<View style={styles.container}>
    <StatusBar
      animated={true}
      backgroundColor={COLORS.secondary}
      style={statusBarStyle}
      hidden={hidden}
    />
    {/* <ActivityIndicator size={'large'} color={COLORS.tertiary}/>
     */}
    <Text style={{color: 'white'}}>
      {JSON.stringify(mangas)}
    </Text>
    <Text style={{color: 'white', backgroundColor: 'red'}}>
      Testando aplicativo de mangás
    </Text>
  </View>)
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
