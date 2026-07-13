import { Link } from 'react-router'
import { ROUTES } from '@/lib/constants'

export function HomePage() {
  return (
    <>
      <section className="hero min-h-[70vh] bg-base-100">
        <div className="hero-content flex-col text-center lg:flex-row lg:text-left">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold">
              Manage your business with confidence
            </h1>
            <p className="py-6 text-lg opacity-80">
              eManager gives you a unified dashboard to track operations,
              collaborate with your team, and grow faster.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <Link to={ROUTES.REGISTER} className="btn btn-primary btn-lg">
                Get started free
              </Link>
              <Link to={ROUTES.LOGIN} className="btn btn-outline btn-lg">
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="bg-base-200 py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Everything you need
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="card bg-base-100 shadow-md">
              <div className="card-body">
                <h3 className="card-title">Dashboard</h3>
                <p>Real-time insights into your key metrics and KPIs.</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-md">
              <div className="card-body">
                <h3 className="card-title">Team management</h3>
                <p>Invite members, assign roles, and control access.</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-md">
              <div className="card-body">
                <h3 className="card-title">Secure by default</h3>
                <p>Enterprise-grade security to protect your data.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">Simple pricing</h2>
          <p className="mb-8 opacity-80">Start free, upgrade when you grow.</p>
          <Link to={ROUTES.REGISTER} className="btn btn-primary btn-lg">
            Create your account
          </Link>
        </div>
      </section>
    </>
  )
}
