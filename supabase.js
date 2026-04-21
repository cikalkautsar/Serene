import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient, processLock } from '@supabase/supabase-js';
import { Platform } from 'react-native';

const supabaseUrl = 'https://rwmvaogfgdosgchxpwhc.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ3bXZhb2dmZ2Rvc2djaHhwd2hjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYzNDMxOTEsImV4cCI6MjA5MTkxOTE5MX0._OuqHzE3UWPCbrkAMUWlY37-zwCuGimN2U_h0-pYEDk';

const isServer = typeof window === 'undefined';
const storage = isServer ? undefined : Platform.OS === 'web' ? window.localStorage : AsyncStorage;

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage,
    autoRefreshToken: !isServer,
    persistSession: !isServer,
    detectSessionInUrl: Platform.OS === 'web',
    lock: processLock,
  },
});