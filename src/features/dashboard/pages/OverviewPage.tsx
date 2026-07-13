export function OverviewPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Overview</h1>
      <p className="mt-2 opacity-70">
        Welcome to your admin dashboard. This is a placeholder overview page.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="stat rounded-box bg-base-100 shadow">
          <div className="stat-title">Total Users</div>
          <div className="stat-value text-primary">1,234</div>
          <div className="stat-desc">↗︎ 12% from last month</div>
        </div>
        <div className="stat rounded-box bg-base-100 shadow">
          <div className="stat-title">Revenue</div>
          <div className="stat-value text-secondary">$45.2K</div>
          <div className="stat-desc">↗︎ 8% from last month</div>
        </div>
        <div className="stat rounded-box bg-base-100 shadow">
          <div className="stat-title">Active Projects</div>
          <div className="stat-value">42</div>
          <div className="stat-desc">3 completed this week</div>
        </div>
        <div className="stat rounded-box bg-base-100 shadow">
          <div className="stat-title">Tasks</div>
          <div className="stat-value text-accent">89</div>
          <div className="stat-desc">15 pending review</div>
        </div>
      </div>
    </div>
  )
}
