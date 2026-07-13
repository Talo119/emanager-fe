import { useNavigate } from 'react-router'
import { useAppDispatch, useAppSelector } from '@/app/store/hooks'
import {
  logout,
  selectCurrentUser,
} from '@/features/auth/store/authSlice'
import { ROUTES } from '@/lib/constants'

export function Topbar() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const user = useAppSelector(selectCurrentUser)

  const handleLogout = () => {
    dispatch(logout())
    void navigate(ROUTES.LOGIN)
  }

  return (
    <header className="navbar border-b border-base-300 bg-base-100 px-4">
      <div className="flex-none lg:hidden">
        <label htmlFor="dashboard-drawer" className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-6 w-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label>
      </div>

      <div className="flex-1">
        <span className="text-lg font-semibold">Dashboard</span>
      </div>

      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar placeholder"
          >
            <div className="bg-neutral text-neutral-content w-10 rounded-full">
              <span>{user?.name.charAt(0).toUpperCase() ?? 'U'}</span>
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
          >
            <li className="menu-title">
              <span>{user?.name ?? 'User'}</span>
            </li>
            <li>
              <button type="button" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
