import { defineStore } from 'pinia';
import type { Video } from '@/models/video';

export const useExploreStore = defineStore('explore', {
  state: () => ({
    videoIndex: 0,
    videosStore: [] as Video[],
    cursorKey: ''
  }),
  actions: {
    setVideoValue(val: number) {
      this.videoIndex = val;
    },
    setVideos(data: Video[]) {
      this.videosStore = data;
    },
    setLink(key: string) {
      this.cursorKey = key;
    }
  },
});
