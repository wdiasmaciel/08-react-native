import { View, Text } from 'react-native';
import { Link } from 'expo-router';

export default function Sobre() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Tela Sobre</Text>
      <Link href="/" style={{ color: 'blue', marginTop: 10 }}>
        Voltar para Home
      </Link>
    </View>
  );
}
