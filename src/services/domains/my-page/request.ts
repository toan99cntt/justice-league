import type { UserFollowRO } from "@/models/user";
import type { ParamsHome, VideoRO } from "@/models/video";
import {apiRequest} from "@/services/infs/apiRequest";

export const myPageService = {
  getLikeList: (params: ParamsHome) =>{
    return apiRequest<VideoRO, ParamsHome>('like-list', params);
  },
  getSaveList: (params: ParamsHome) =>{
    return apiRequest<VideoRO, ParamsHome>('save-list', params);
  },
  getFollowList: (params: ParamsHome) =>{
    return apiRequest<UserFollowRO, ParamsHome>('follow-list', params);
  },
  getHideList: (params: ParamsHome) =>{
    return apiRequest<VideoRO, ParamsHome>('hide-list', params);
  },
}
