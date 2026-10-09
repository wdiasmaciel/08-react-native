import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';

import Home from './index';

export default function ModalScreen() {
  return (
    <>
      <Home/>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </>
  );
}

