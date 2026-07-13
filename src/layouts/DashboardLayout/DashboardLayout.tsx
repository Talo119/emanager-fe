import { NavLink, Outlet } from 'react-router'
import { APP_NAME, ROUTES } from '@/lib/constants'
import { Topbar } from '@/layouts/DashboardLayout/Topbar'

const navItems = [
  { to: ROUTES.ADMIN_OVERVIEW, label: 'Overview' },
]

function DashboardNav() {
  return (
    <>
      <div className="border-b border-base-300 p-4">
        <span className="text-lg font-bold">{APP_NAME}</span>
      </div>
      <ul className="menu p-4">
        {navItems.map((item) => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              className={({ isActive }) => (isActive ? 'menu-active' : '')}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  )
}

export function DashboardLayout() {
  return (
    <div className="drawer lg:drawer-open">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content flex min-h-screen flex-col">
        <Topbar />
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>

      <div className="drawer-side z-40">
        <label
          htmlFor="dashboard-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        />
        <aside className="flex min-h-full w-64 flex-col bg-base-100">
          <DashboardNav />
        </aside>
      </div>
    </div>
  )
}
