import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  ImageBackground,
  Pressable,
} from 'react-native';

type Quote = {
  quoteAuthor: string;
  quoteText: string;
};

const quotes: Quote[] = require('./data/quotes.json');
const getQuote = () => {
  const rand = Math.floor(Math.random() * quotes.length);
  return quotes.splice(rand, 1)[0];
};
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [quote, changeQuote] = useState(getQuote());

  return (
    <SafeAreaView style={styles.container}>
      <Pressable
        style={styles.container}
        onPress={() => changeQuote(getQuote())}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <ImageBackground
          source={require('./img/wallpaper2.jpg')}
          style={styles.wallpaper}>
          <Text style={styles.quoteText}>{quote.quoteText}</Text>
          <Text style={styles.quoteAuthor}>{quote.quoteAuthor}</Text>
        </ImageBackground>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  wallpaper: {
    flex: 1,
    resizeMode: 'cover',
    alignItems: 'center',
  },
  quoteText: {
    fontSize: 30,
    color: 'white',
    marginTop: 200,
    padding: 30,
  },
  quoteAuthor: {
    fontSize: 20,
    color: 'yellow',
  },
});

export default App;
