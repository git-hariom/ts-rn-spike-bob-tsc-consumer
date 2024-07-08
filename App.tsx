/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {Button} from 'castiel-ts-rn-spike-bob/lib/module/v3/components';
import IconButtonV3 from 'castiel-ts-rn-spike-bob/lib/module/v3/components/IconButton';

import ButtonV2 from 'castiel-ts-rn-spike-bob/lib/module/v2/components/Button';
import IconButtonV2 from 'castiel-ts-rn-spike-bob/lib/module/v2/components/IconButton';

import ButtonV1 from 'castiel-ts-rn-spike-bob/lib/module/components/Button';
import IconButtonV1 from 'castiel-ts-rn-spike-bob/lib/module/components/IconButton';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Button label="Click" />
        <IconButtonV3 label="Click" />
        <ButtonV2 label="Click" />
        <IconButtonV2 label="Click" />
        <ButtonV1 label="Click" />
        <IconButtonV1 label="Click" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
