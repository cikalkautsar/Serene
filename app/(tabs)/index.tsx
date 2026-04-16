import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <Pressable style={styles.container} onPress={() => router.push('/auth/login')}>
      <View style={styles.centerBlock}>
        <Image source={require('@/assets/images/logo.png')} style={styles.logo} contentFit="contain" />
        <Text style={styles.brandText}>SERENE</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#365754',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerBlock: {
    alignItems: 'center',
  },
  logo: {
    width: 84,
    height: 84,
    marginBottom: 18,
  },
  brandText: {
    color: '#FFFFFF',
    fontSize: 38,
    letterSpacing: 8,
    fontWeight: '300',
  },
});
