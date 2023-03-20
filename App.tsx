import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View, SafeAreaView, ScrollView, FlatList, Button, Dimensions, Alert } from "react-native";
import MangaSummary from "./src/components/MangaSummary";
import useRandomMangas from "./src/hooks/useRandomProviders";
import { COLORS } from "./src/settings/colors";
import { IBookUserCategories } from "./src/types/data/books";

const STYLES= ['auto', 'dark', 'light'] as const;
const TRANSITIONS= ['fade', 'slide', 'none'] as const;

const App= ({}): any => {
  const [statusBarStyle, setStatusBarStyle] = useState(STYLES[2]);
  const [statusBarTransition, setStatusBarTransition] = useState<'fade' | 'slide' | 'none'>(TRANSITIONS[0]);
  const [hidden, setHidden] = useState(false);
  const {mangas: data} = useRandomMangas();

  return (<View style={styles.container}>
    <StatusBar
      animated={true}
      backgroundColor={COLORS.secondary}
      style={statusBarStyle}
      hidden={hidden}
    />
    <SafeAreaView style={styles.mainBar}>
    </SafeAreaView>
    <SafeAreaView>
      <ScrollView>
        <FlatList
          style={[styles.list]}
          data={data}
          numColumns={3}
          keyExtractor={(item: any)=> item.id}
          renderItem={({item: {title, imagepaths: mangaImg}}: {item: IBookUserCategories})=> (<MangaSummary title={title} mangaImg={mangaImg}/>)}
        />
      </ScrollView>
    </SafeAreaView>
  </View>)
};

export default App;

let { width }= Dimensions.get('screen');

const styles= StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    padding: 5,
    backgroundColor: COLORS.primary,
    overflow: 'hidden'
  },
  mainBar: {
    marginTop: 150,
    width,
    backgroundColor: 'blue',
  },
  button: {
    color: 'green'
  }
});
