import { DecodedUser } from '@/type/user';
import * as SecureStore from 'expo-secure-store';
import { create } from 'zustand';

type UserStore = {
  accessToken: string | null;
  user: DecodedUser | null;
  setAccessToken: (token: string) => void;
  setRefreshToken: (token: string) => Promise<void>;
  getRefreshToken: () => Promise<string | null>;
  clearTokens: () => Promise<void>;
  setUser: (user: DecodedUser) => void;
  clearUser: () => void;
};

export const useUserStore = create<UserStore>((set) => ({
  accessToken: null,
  user: null,
  setAccessToken: (accessToken) => {
    set({ accessToken });
  },
  setRefreshToken: async (refreshToken) => {
    await SecureStore.setItemAsync('refreshToken', refreshToken);
  },
  getRefreshToken: async () => {
    return await SecureStore.getItemAsync('refreshToken');
  },
  clearTokens: async () => {
    set({ accessToken: null });
    await SecureStore.deleteItemAsync('refreshToken');
  },
  setUser: (user) => {
    set({ user });
  },
  clearUser: () => {
    set({ user: null });
  },
}));
