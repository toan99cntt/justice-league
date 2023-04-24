import type { ParamSearch, VideoRO } from "@/models/video";
import {apiRequest} from "@/services/infs/apiRequest";

export const searchService = {
  getResultSearch: (params: ParamSearch) =>{
    return apiRequest<VideoRO, ParamSearch>('search',  params);
  },
}
