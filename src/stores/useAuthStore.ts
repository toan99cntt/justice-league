import { defineStore } from 'pinia';
import type {User} from '@/models/user';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false,
    userProfile: {} as User,
  }),
  actions: {
    setIsAuthenticated(isAuthenticated = true) {
      this.isAuthenticated = isAuthenticated;
    },
    setUserProfile(data: User) {
      this.userProfile = data;
    }
  },
});
