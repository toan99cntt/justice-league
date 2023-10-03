import type { Model } from "@/models/model";
import type { ParamsHome, VideoRO } from "@/models/video";
import {apiRequest} from "@/services/infs/apiRequest";

export const modelService = {
  getModelDetail: (id: number) =>{
    return apiRequest<Model>(`model/${id}`);
  },

  getVideoNew: (id: number, params: ParamsHome) =>{
    return apiRequest<VideoRO, ParamsHome>(`model/${id}/new`, params);
  },

  getModelLiked: (id: number, params: ParamsHome) =>{
    return apiRequest<VideoRO, ParamsHome>(`model/${id}/like`, params);
  },

  followModel: (id: number) =>{
    return apiRequest(`model/${id}/follow`,'', 'post');
  }
}
