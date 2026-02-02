
import { SalesChart } from '../sales-chart'
import { OverviewCards } from '../overview-cards'
import { PropertyCards } from '../property-cards'

function Dashboardcontent() {
	return (
			<div>
        <main className="px-3 sm:px-6 py-4 sm:py-6">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Welcome, Ahmed</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
            <SalesChart />
            <OverviewCards />
          </div>
          
          <PropertyCards />
        </main>
			</div>
	)
}

export default Dashboardcontent

