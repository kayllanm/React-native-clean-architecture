import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { store } from './src/store/index';
import { StyleSheet, Text, View } from 'react-native';
import HomeViewPage from './src/features/home/presentation/screens/HomeViewPage';

export default function App() {
  return (
    <Provider store={store}>
      <HomeViewPage />
    </Provider>
  );
}