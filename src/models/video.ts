export interface Video {
  id: number,
  stream_url: string,
  published_date: string,
  hashtag: string,
  image: string,
  views: number,
  likes: number,
  saves: number,
  model_id: number,
  user_name: string,
  user_id: string,
  description: string,
  liked?: boolean,
  saved?: boolean
  followed?: boolean
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
