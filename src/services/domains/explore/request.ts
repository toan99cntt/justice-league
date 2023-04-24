import type { ParamsHome, VideoRO } from "@/models/video";
import {apiRequest} from "@/services/infs/apiRequest";

export const exploreService = {
  getVideos: (params: ParamsHome) =>{
    return apiRequest<VideoRO, ParamsHome>('new',  params);
  },
}
