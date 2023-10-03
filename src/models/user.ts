export interface User {
  id:  number,
  name: string,
  email: string,
  email_verified_at: string | null,
  created_at: string,
  updated_at: string
  user_data: {
    blocked: number[]
    followed: number[]
    liked: number[] | any
    saved: number[]
  }
}

export interface UserFollow {
  id: number,
  info: {
    description: string,
    image: string,
  }
  key: string,
  name: string,
}

export interface UserFollowRO {
  items: UserFollow[],
  next_page_url: string
}