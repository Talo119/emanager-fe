import { Navigate, Outlet } from 'react-router'
import { useAppSelector } from '@/app/store/hooks'
import { selectIsAuthenticated } from '@/features/auth/store/authSlice'
import { ROUTES } from '@/lib/constants'

export function GuestRoute() {
  const isAuthenticated = useAppSelector(selectIsAuthenticated)

  if (isAuthenticated) {
    return <Navigate to={ROUTES.ADMIN} replace />
  }

  return <Outlet />
}
