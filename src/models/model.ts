export interface Model {
  id: number,
  name: string,
  key: string,
  info: {
    image: string,
    description: string
  },
  likes: number,
  views: number,
  followers: number,
  followed?: boolean
}