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
      let user = {...data};
      if(!user.user_data) {
        user.user_data = {
          liked: [],
          saved: [],
          blocked: [],
          followed: []
        }
      } else {
        if(!!user?.user_data?.liked) user.user_data.liked = [...Object.values(data.user_data?.liked)]
        if(!!user?.user_data?.followed) user.user_data.followed = [...Object.values(data.user_data?.followed)]
      }
      this.userProfile = {...user};
    },
    setUserAction(action: boolean, type: 'saved' | 'liked' | 'blocked' | 'followed', id: number) {
      if(action) {
        if(!!this.userProfile?.user_data['saved']) {
          this.userProfile.user_data[type] = this.userProfile.user_data[type].filter((el: number) => el !== id)
        }
      } else {
        this.userProfile.user_data[type].push(id)
      }
    }
  },
});
