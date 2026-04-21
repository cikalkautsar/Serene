import { Feather, FontAwesome } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
    ActivityIndicator,
    Alert,
    Pressable,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';

import { supabase } from '../../supabase';

export default function LoginScreen() {
	const router = useRouter();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);

	const handleLogin = async () => {
		if (!email || !password) {
			Alert.alert('Error', 'Email dan password wajib diisi.');
			return;
		}

		setLoading(true);

		try {
			const { error } = await supabase.auth.signInWithPassword({
				email,
				password,
			});

			if (error) throw error;

			Alert.alert('Login Berhasil', 'Akun ditemukan. Register kamu sudah berhasil.');
			router.replace('/home');
		} catch (error) {
			const message = error instanceof Error ? error.message : 'Terjadi kesalahan tidak diketahui.';
			Alert.alert('Login Gagal', message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<SafeAreaView style={styles.screen}>
			<View style={styles.hero}>
				<View style={styles.heroShade} />
			</View>

			<View style={styles.card}>
				<View style={styles.logoWrapper}>
					<Image source={require('@/assets/images/logo.png')} style={styles.logo} contentFit="contain" />
				</View>

				<Text style={styles.title}>Welcome to SERENE</Text>
				<Text style={styles.subtitle}>Login to your Account</Text>

				<TextInput
					placeholder="Email"
					placeholderTextColor="#75817f"
					style={styles.input}
					autoCapitalize="none"
					keyboardType="email-address"
					value={email}
					onChangeText={setEmail}
				/>
				<TextInput
					placeholder="Password"
					placeholderTextColor="#75817f"
					style={styles.input}
					secureTextEntry
					value={password}
					onChangeText={setPassword}
				/>

				<Pressable
					style={[styles.loginButton, loading && { opacity: 0.8 }]}
					onPress={handleLogin}
					disabled={loading}>
					{loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.loginButtonText}>Login</Text>}
				</Pressable>

				<View style={styles.dividerRow}>
					<View style={styles.dividerLine} />
					<Text style={styles.dividerText}>Or Sign in with</Text>
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
					<Text style={styles.footerText}>Dont have an account? </Text>
					<Pressable onPress={() => router.push('/auth/register')}>
						<Text style={styles.signUpText}>Sign Up</Text>
					</Pressable>
				</View>
			</View>
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
		height: '34%',
		backgroundColor: '#7ab1ad',
		borderTopLeftRadius: 0,
		borderTopRightRadius: 0,
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
		paddingTop: 68,
		paddingHorizontal: 22,
		alignItems: 'center',
	},
	logoWrapper: {
		position: 'absolute',
		top: -42,
		width: 92,
		height: 92,
		borderRadius: 46,
		backgroundColor: '#365754',
		justifyContent: 'center',
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 6 },
		shadowOpacity: 0.24,
		shadowRadius: 10,
		elevation: 9,
	},
	logo: {
		width: 86,
		height: 86,
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
		marginBottom: 28,
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
		marginBottom: 14,
		backgroundColor: '#f8f8f8',
	},
	loginButton: {
		width: '100%',
		height: 52,
		borderRadius: 12,
		marginTop: 8,
		backgroundColor: '#365754',
		justifyContent: 'center',
		alignItems: 'center',
	},
	loginButtonText: {
		color: '#ffffff',
		fontSize: 18,
		fontWeight: '700',
	},
	dividerRow: {
		marginTop: 24,
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
	signUpText: {
		color: '#1d6cff',
		fontSize: 15,
		fontWeight: '600',
	},
});
