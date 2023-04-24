import type { ParamsHome, VideoRO } from "@/models/video";
import {apiRequest} from "@/services/infs/apiRequest";

export const homeService = {
  getVideos: (params: ParamsHome) =>{
    return apiRequest<VideoRO, ParamsHome>('feed',  params);
  },
}
