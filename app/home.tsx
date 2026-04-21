import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ActivityIndicator, Alert, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { supabase } from '../supabase';

export default function HomeScreen() {
    const router = useRouter();
    const [loggingOut, setLoggingOut] = useState(false);

    const handleLogout = async () => {
        setLoggingOut(true);
        try {
            const { error } = await supabase.auth.signOut();
            if (error) throw error;

            Alert.alert('Logout Berhasil', 'Kamu sudah keluar dari akun.');
            router.replace('/auth/login');
        } catch (error) {
            const message = error instanceof Error ? error.message : 'Terjadi kesalahan tidak diketahui.';
            Alert.alert('Logout Gagal', message);
        } finally {
            setLoggingOut(false);
        }
    };

    return (
        <SafeAreaView style={styles.screen}>
            <View style={styles.content}>
                <Text style={styles.title}>Welcome Back</Text>
                <Text style={styles.subtitle}>Login berhasil. Kamu sudah masuk ke halaman Home.</Text>

                <Pressable style={styles.button} onPress={() => router.replace('/(tabs)')}>
                    <Text style={styles.buttonText}>Masuk ke Dashboard</Text>
                </Pressable>

                <Pressable
                    style={[styles.logoutButton, loggingOut && { opacity: 0.8 }]}
                    onPress={handleLogout}
                    disabled={loggingOut}>
                    {loggingOut ? (
                        <ActivityIndicator color="#ffffff" />
                    ) : (
                        <Text style={styles.logoutButtonText}>Logout</Text>
                    )}
                </Pressable>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#102321',
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 24,
    },
    title: {
        color: '#ffffff',
        fontSize: 30,
        fontWeight: '700',
        marginBottom: 8,
    },
    subtitle: {
        color: '#d4dfde',
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 24,
    },
    button: {
        backgroundColor: '#3b615d',
        borderRadius: 12,
        paddingHorizontal: 18,
        height: 46,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 15,
        fontWeight: '700',
    },
    logoutButton: {
        marginTop: 12,
        backgroundColor: '#8f2f2f',
        borderRadius: 12,
        paddingHorizontal: 18,
        height: 46,
        minWidth: 170,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoutButtonText: {
        color: '#ffffff',
        fontSize: 15,
        fontWeight: '700',
    },
});