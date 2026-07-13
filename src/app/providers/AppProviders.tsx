import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router'
import { store } from '@/app/store'
import { router } from '@/app/router'
import { ErrorBoundary } from '@/components/ui/ErrorBoundary'

export function AppProviders() {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ErrorBoundary>
  )
}
