import { Navigate, type RouteObject } from 'react-router'
import { LandingLayout } from '@/layouts/LandingLayout/LandingLayout'
import { AuthLayout } from '@/layouts/AuthLayout/AuthLayout'
import { DashboardLayout } from '@/layouts/DashboardLayout/DashboardLayout'
import { ProtectedRoute } from '@/app/router/guards/ProtectedRoute'
import { GuestRoute } from '@/app/router/guards/GuestRoute'
import { HomePage } from '@/features/landing/pages/HomePage'
import { NotFoundPage } from '@/features/landing/pages/NotFoundPage'
import { LoginPage } from '@/features/auth/pages/LoginPage'
import { RegisterPage } from '@/features/auth/pages/RegisterPage'
import { OverviewPage } from '@/features/dashboard/pages/OverviewPage'
import { ROUTES } from '@/lib/constants'

export const routes: RouteObject[] = [
  {
    Component: LandingLayout,
    children: [
      { index: true, Component: HomePage },
    ],
  },
  {
    Component: GuestRoute,
    children: [
      {
        Component: AuthLayout,
        children: [
          { path: 'login', Component: LoginPage },
          { path: 'register', Component: RegisterPage },
        ],
      },
    ],
  },
  {
    path: 'admin',
    Component: ProtectedRoute,
    children: [
      {
        Component: DashboardLayout,
        children: [
          { index: true, element: <Navigate to={ROUTES.ADMIN_OVERVIEW} replace /> },
          { path: 'overview', Component: OverviewPage },
        ],
      },
    ],
  },
  { path: '*', Component: NotFoundPage },
]
