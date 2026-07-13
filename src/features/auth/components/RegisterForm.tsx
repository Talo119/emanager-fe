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
  registerSchema,
  type RegisterFormValues,
} from '@/features/auth/schemas/registerSchema'
import { FormField } from '@/components/ui/FormField'
import { ROUTES } from '@/lib/constants'

export function RegisterForm() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const authStatus = useAppSelector(selectAuthStatus)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  })

  const onSubmit = (values: RegisterFormValues) => {
    dispatch(setLoading())

    // Mock registration — replace with createAsyncThunk + API call
    setTimeout(() => {
      if (values.email && values.password) {
        dispatch(
          setCredentials({
            user: {
              id: '1',
              name: values.name,
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
      <h2 className="card-title text-2xl">Create account</h2>
      <p className="text-sm opacity-70">
        Fill in your details to get started with eManager.
      </p>

      <FormField
        label="Full name"
        type="text"
        autoComplete="name"
        error={errors.name?.message}
        {...register('name')}
      />

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
        autoComplete="new-password"
        error={errors.password?.message}
        {...register('password')}
      />

      <FormField
        label="Confirm password"
        type="password"
        autoComplete="new-password"
        error={errors.confirmPassword?.message}
        {...register('confirmPassword')}
      />

      <button
        type="submit"
        className="btn btn-primary w-full"
        disabled={authStatus === 'loading'}
      >
        {authStatus === 'loading' ? (
          <span className="loading loading-spinner loading-sm" />
        ) : (
          'Create account'
        )}
      </button>

      <p className="text-center text-sm">
        Already have an account?{' '}
        <Link to={ROUTES.LOGIN} className="link link-primary">
          Sign in
        </Link>
      </p>
    </form>
  )
}
