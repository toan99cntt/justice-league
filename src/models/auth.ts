import type { User } from "./user"

export interface Login {
  email: string,
  password: string
}

export interface Register {
  name: string,
  email: string,
  password: string
  password_confirmation: string
}

export interface LoginRO  {
  user: User,
  token: string
}

export interface LoginError {
  email: string[],
  password: string[],
}

export interface RegisterError {
  name: string[],
  email: string[],
  password: string[]
}
