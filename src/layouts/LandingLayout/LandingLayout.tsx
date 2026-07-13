import { Link, Outlet } from 'react-router'
import { APP_NAME, ROUTES } from '@/lib/constants'

export function LandingLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-base-100">
      <header className="navbar bg-base-100 px-4 shadow-sm lg:px-8">
        <div className="navbar-start">
          <Link to={ROUTES.HOME} className="btn btn-ghost text-xl font-bold">
            {APP_NAME}
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-2">
          <Link to={ROUTES.LOGIN} className="btn btn-ghost">
            Log in
          </Link>
          <Link to={ROUTES.REGISTER} className="btn btn-primary">
            Get started
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="footer footer-center bg-base-200 p-6 text-base-content">
        <aside>
          <p>
            © {new Date().getFullYear()} {APP_NAME}. All rights reserved.
          </p>
        </aside>
      </footer>
    </div>
  )
}
