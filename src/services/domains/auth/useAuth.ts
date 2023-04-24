import {useAuthStore} from '@/stores/useAuthStore';
import {authService} from '@/services/domains/auth/request';
import type { User } from '@/models/user';

export const useAuth = () => {
  const authStore = useAuthStore();

  function logout() {
    localStorage.removeItem('token_data');
  }

  const setAuthInfo = (token: string, user: User) => {
    localStorage.setItem('token_data', token);
    authStore.setIsAuthenticated();
    authStore.setUserProfile(user);
  }

  const authCheck = async() => {
    const accessToken = getAccessToken();
    authStore.setIsAuthenticated(!!accessToken);
  }

  const getUserInfo = async() => {
    try{
      const data = await authService.getUserInfo();
      authStore.setUserProfile(data);
    } catch (err) {
      //
    }
  }

  function getAccessToken(): string|null {
    const tokenData = localStorage.getItem('token_data');
    return tokenData ?? null;
  }

  return {
    logout,
    authCheck,
    setAuthInfo,
    getUserInfo,
    getAccessToken
  }
}
