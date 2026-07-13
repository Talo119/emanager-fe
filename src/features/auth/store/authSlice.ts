import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { User } from '@/types'

export interface AuthState {
  user: User | null
  token: string | null
  status: 'idle' | 'loading' | 'failed'
}

interface AuthRootState {
  auth: AuthState
}

const initialState: AuthState = {
  user: null,
  token: null,
  status: 'idle',
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoading: (state) => {
      state.status = 'loading'
    },
    setCredentials: (
      state,
      action: PayloadAction<{ user: User; token: string }>,
    ) => {
      state.user = action.payload.user
      state.token = action.payload.token
      state.status = 'idle'
    },
    setFailed: (state) => {
      state.status = 'failed'
    },
    logout: (state) => {
      state.user = null
      state.token = null
      state.status = 'idle'
    },
  },
})

export const { setLoading, setCredentials, setFailed, logout } =
  authSlice.actions

export const selectCurrentUser = (state: AuthRootState) => state.auth.user
export const selectIsAuthenticated = (state: AuthRootState) =>
  state.auth.token !== null
export const selectAuthStatus = (state: AuthRootState) => state.auth.status

export default authSlice.reducer
