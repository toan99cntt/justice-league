export interface Video {
  id: number,
  stream_url: string,
  published_date: string,
  hashtag: string,
  image: string,
  views: number,
  likes: number,
  saves: number,
  user_name: string,
  user_id: string,
  description: string,
}

export interface ParamsHome {
  cursor: string
}

export interface VideoRO {
  items: Video[],
  next_page_url: string
}

export type ParamSearch = ParamsHome & {
  search: string
}
