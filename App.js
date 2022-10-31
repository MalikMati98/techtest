import { StatusBar } from 'expo-status-bar';
import {  StyleSheet, Text, View } from 'react-native';
import { MainNav } from './src/navigation/MainNav';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persister, store} from './src/redux/store';
export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persister}>
    <SafeAreaView style={styles.container}>
      <MainNav />
    </SafeAreaView>
     </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
