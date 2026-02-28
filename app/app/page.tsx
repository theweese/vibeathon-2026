import { PageHeader, Card, CardHeader, CardTitle, CardContent, Button } from '@/components/ui'
import { Plus, BarChart3, Users, Settings } from 'lucide-react'

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Page Header */}
      <PageHeader
        title="Dashboard Overview"
        description="Welcome to your centralized command center."
        icon={BarChart3}
        action={
          <Button variant="primary" className="gap-2">
            <Plus className="w-4 h-4" />
            <span>New Action</span>
          </Button>
        }
      />

      {/* Primary KPI Grid (Generic) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-500">Total Users</CardTitle>
            <Users className="w-4 h-4 text-slate-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900">1,248</div>
            <p className="text-xs text-green-600 mt-1">+12% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-500">Active Issues</CardTitle>
            <Settings className="w-4 h-4 text-slate-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900">24</div>
            <p className="text-xs text-slate-500 mt-1">4 require immediate attention</p>
          </CardContent>
        </Card>

        <Card className="bg-blue-50 border-blue-100">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-blue-700">System Status</CardTitle>
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-900">Healthy</div>
            <p className="text-xs text-blue-600 mt-1">All services operational</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Area (Generic) */}
      <Card className="min-h-[400px]">
        <CardHeader className="border-b border-slate-200">
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-center text-slate-400">
          <div className="text-center">
            <BarChart3 className="w-12 h-12 mx-auto mb-3 opacity-20" />
            <p>Select a data source to populate this view.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
