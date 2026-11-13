import { createClient, SupabaseClient } from '@supabase/supabase-js';

export interface GuestWish {
  id?: string;
  guest_name: string;
  message: string;
  relationship?: string;
  created_at?: string;
}

// Read Supabase environment variables from Vite
const env = (import.meta as unknown as { env?: Record<string, string | undefined> })?.env || {};
const supabaseUrl = env.VITE_SUPABASE_URL;
const supabaseAnonKey = env.VITE_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(
  supabaseUrl &&
  supabaseAnonKey &&
  supabaseUrl !== 'https://your-project.supabase.co' &&
  !supabaseUrl.includes('placeholder')
);

export const supabase: SupabaseClient | null =
  isSupabaseConfigured && supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;

const LOCAL_STORAGE_KEY = 'sanju_wedding_guest_wishes_backup';

export async function submitGuestWish(wish: {
  guest_name: string;
  message: string;
  relationship?: string;
}): Promise<{ success: boolean; storageMode: 'supabase' | 'local'; error?: string }> {
  const wishEntry: GuestWish = {
    ...wish,
    id: `wish_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    created_at: new Date().toISOString(),
  };

  // 1. If Supabase is configured, submit to Supabase database table 'guest_wishes'
  if (isSupabaseConfigured && supabase) {
    try {
      const { error } = await supabase.from('guest_wishes').insert([
        {
          guest_name: wish.guest_name,
          message: wish.message,
          relationship: wish.relationship || null,
        },
      ]);

      if (error) {
        console.error('Supabase submission error:', error);
        // Fallback to local storage if network or DB table issue occurs
        saveToLocalStorage(wishEntry);
        return { success: true, storageMode: 'local', error: error.message };
      }

      // Also keep a local copy for offline grooming family access
      saveToLocalStorage(wishEntry);
      return { success: true, storageMode: 'supabase' };
    } catch (err: unknown) {
      console.error('Unexpected Supabase error:', err);
      saveToLocalStorage(wishEntry);
      return { success: true, storageMode: 'local' };
    }
  }

  // 2. If Supabase is NOT configured yet: Store locally in browser and notify user transparently
  saveToLocalStorage(wishEntry);
  return { success: true, storageMode: 'local' };
}

function saveToLocalStorage(entry: GuestWish) {
  try {
    const existingStr = localStorage.getItem(LOCAL_STORAGE_KEY);
    const list: GuestWish[] = existingStr ? JSON.parse(existingStr) : [];
    list.unshift(entry);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(list));
  } catch (e) {
    console.error('Failed to save to localStorage', e);
  }
}

export function getLocalWishes(): GuestWish[] {
  try {
    const existingStr = localStorage.getItem(LOCAL_STORAGE_KEY);
    return existingStr ? JSON.parse(existingStr) : [];
  } catch {
    return [];
  }
}
