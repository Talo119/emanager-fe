import { Link, Outlet } from 'react-router'
import { APP_NAME, ROUTES } from '@/lib/constants'

export function AuthLayout() {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <div className="hidden bg-primary lg:flex lg:flex-col lg:justify-center lg:px-16">
        <div className="max-w-md text-primary-content">
          <h1 className="text-4xl font-bold">{APP_NAME}</h1>
          <p className="mt-4 text-lg opacity-90">
            Manage your business operations with a modern, intuitive dashboard.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center bg-base-200 px-6 py-12">
        <div className="mb-8 text-center lg:hidden">
          <Link to={ROUTES.HOME} className="text-2xl font-bold text-primary">
            {APP_NAME}
          </Link>
        </div>

        <div className="card w-full max-w-md bg-base-100 shadow-xl">
          <div className="card-body">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}
