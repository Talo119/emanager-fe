import { Link } from 'react-router'
import { ROUTES } from '@/lib/constants'

export function NotFoundPage() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">404</h1>
          <p className="py-6">The page you are looking for does not exist.</p>
          <Link to={ROUTES.HOME} className="btn btn-primary">
            Back to home
          </Link>
        </div>
      </div>
    </div>
  )
}
