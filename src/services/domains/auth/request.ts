import type { Login, LoginRO, Register } from "@/models/auth";
import type { User } from "@/models/user";
import {apiRequest} from "@/services/infs/apiRequest";

export const authService = {
  login: (data: Login) =>{
    return apiRequest<LoginRO, Login>('login',  data, 'post');
  },
  getUserInfo: () =>{
    return apiRequest<User>('user');
  },
  signup: (data: Register) => {
    return apiRequest<LoginRO, Register>('signup',  data, 'post');
  }
}
