import type { ParamsHome, VideoRO } from "@/models/video";
import {apiRequest} from "@/services/infs/apiRequest";

export const followService = {
  getVideosFollow: (params: ParamsHome) =>{
    return apiRequest<VideoRO, ParamsHome>('following',  params);
  },
}
