import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardNav } from "@/components/dashboard-nav"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      <DashboardNav />
    </div>
  )
}
