import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Link, useNavigate } from 'react-router'
import { useAppDispatch, useAppSelector } from '@/app/store/hooks'
import {
  selectAuthStatus,
  setCredentials,
  setFailed,
  setLoading,
} from '@/features/auth/store/authSlice'
import {
  loginSchema,
  type LoginFormValues,
} from '@/features/auth/schemas/loginSchema'
import { FormField } from '@/components/ui/FormField'
import { ROUTES } from '@/lib/constants'

export function LoginForm() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const authStatus = useAppSelector(selectAuthStatus)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = (values: LoginFormValues) => {
    dispatch(setLoading())

    // Mock authentication — replace with createAsyncThunk + API call
    setTimeout(() => {
      if (values.email && values.password) {
        dispatch(
          setCredentials({
            user: {
              id: '1',
              name: values.email.split('@')[0] ?? 'User',
              email: values.email,
            },
            token: 'mock-jwt-token',
          }),
        )
        void navigate(ROUTES.ADMIN)
      } else {
        dispatch(setFailed())
      }
    }, 500)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <h2 className="card-title text-2xl">Sign in</h2>
      <p className="text-sm opacity-70">
        Enter your credentials to access the dashboard.
      </p>

      <FormField
        label="Email"
        type="email"
        autoComplete="email"
        error={errors.email?.message}
        {...register('email')}
      />

      <FormField
        label="Password"
        type="password"
        autoComplete="current-password"
        error={errors.password?.message}
        {...register('password')}
      />

      <button
        type="submit"
        className="btn btn-primary w-full"
        disabled={authStatus === 'loading'}
      >
        {authStatus === 'loading' ? (
          <span className="loading loading-spinner loading-sm" />
        ) : (
          'Sign in'
        )}
      </button>

      <p className="text-center text-sm">
        Don&apos;t have an account?{' '}
        <Link to={ROUTES.REGISTER} className="link link-primary">
          Register
        </Link>
      </p>
    </form>
  )
}
