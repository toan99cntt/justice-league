import {apiRequest} from "@/services/infs/apiRequest";

export const videoService = {
  actionLike: (id: number) =>{
    return apiRequest<any>(`/post/${id}/like`, "", 'post');
  },
  actionSave: (id: number) =>{
    return apiRequest<any>(`/post/${id}/save`, "", 'post');
  },
  actionHide: (id: number) =>{
    return apiRequest<any>(`/post/${id}/hide`, "", 'post');
  },
}

