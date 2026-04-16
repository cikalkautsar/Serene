import { Feather, FontAwesome } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function RegisterScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.hero}>
        <View style={styles.heroShade} />
      </View>

      <ScrollView
        style={styles.card}
        contentContainerStyle={styles.cardContent}
        showsVerticalScrollIndicator={false}>
        <View style={styles.logoWrapper}>
          <Image source={require('@/assets/images/logo.png')} style={styles.logo} contentFit="contain" />
        </View>

        <Text style={styles.title}>Create Account</Text>
        <Text style={styles.subtitle}>Join SERENE and start your journey</Text>

        <TextInput
          placeholder="Full Name"
          placeholderTextColor="#75817f"
          style={styles.input}
          autoCapitalize="words"
        />
        <TextInput
          placeholder="Email"
          placeholderTextColor="#75817f"
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          placeholder="Username"
          placeholderTextColor="#75817f"
          style={styles.input}
          autoCapitalize="none"
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#75817f"
          style={styles.input}
          secureTextEntry
        />
        <TextInput
          placeholder="Confirm Password"
          placeholderTextColor="#75817f"
          style={styles.input}
          secureTextEntry
        />

        <Pressable style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>Register</Text>
        </Pressable>

        <View style={styles.dividerRow}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>Or Sign up with</Text>
          <View style={styles.dividerLine} />
        </View>

        <View style={styles.socialRow}>
          <Pressable style={styles.socialButton}>
            <FontAwesome name="google" size={22} color="#DB4437" />
          </Pressable>
          <Pressable style={styles.socialButton}>
            <FontAwesome name="facebook-official" size={22} color="#1877F2" />
          </Pressable>
          <Pressable style={styles.socialButton}>
            <Feather name="phone-call" size={19} color="#0f1f21" />
          </Pressable>
        </View>

        <View style={styles.footerRow}>
          <Text style={styles.footerText}>Already have an account? </Text>
          <Pressable onPress={() => router.push('/auth/login')}>
            <Text style={styles.signInText}>Sign In</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#1f2226',
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 20,
  },
  hero: {
    height: '30%',
    backgroundColor: '#7ab1ad',
    overflow: 'hidden',
  },
  heroShade: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#244744',
    opacity: 0.58,
  },
  card: {
    flex: 1,
    marginTop: -10,
    backgroundColor: '#f1f2f3',
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
  },
  cardContent: {
    paddingTop: 24,
    paddingHorizontal: 22,
    paddingBottom: 24,
    alignItems: 'center',
  },
  logoWrapper: {
    width: 88,
    height: 88,
    borderRadius: 44,
    backgroundColor: '#365754',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -44,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.24,
    shadowRadius: 10,
    elevation: 9,
    zIndex: 2,
  },
  logo: {
    width: 82,
    height: 82,
  },
  title: {
    color: '#1a2430',
    fontSize: 32,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 6,
  },
  subtitle: {
    color: '#313f49',
    fontSize: 16,
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#6f7d7a',
    borderRadius: 12,
    paddingHorizontal: 14,
    fontSize: 15,
    color: '#132024',
    marginBottom: 12,
    backgroundColor: '#f8f8f8',
  },
  primaryButton: {
    width: '100%',
    height: 52,
    borderRadius: 12,
    marginTop: 10,
    backgroundColor: '#365754',
    justifyContent: 'center',
    alignItems: 'center',
  },
  primaryButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '700',
  },
  dividerRow: {
    marginTop: 22,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#8f9897',
  },
  dividerText: {
    marginHorizontal: 10,
    color: '#47545d',
    fontSize: 14,
  },
  socialRow: {
    marginTop: 16,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  socialButton: {
    flex: 1,
    height: 48,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#6f7d7a',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f8f8',
  },
  footerRow: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerText: {
    color: '#404f57',
    fontSize: 15,
  },
  signInText: {
    color: '#1d6cff',
    fontSize: 15,
    fontWeight: '600',
  },
});
