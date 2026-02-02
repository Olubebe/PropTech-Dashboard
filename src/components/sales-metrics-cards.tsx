import { Card, CardContent } from "@/components/ui/card"
import { metrics } from "@/constant/data"
import { TrendingUp, TrendingDown } from "lucide-react"


export function SalesMetricsCards() {
  return (
    <div className="grid grid-cols-2 gap-2 sm:gap-4 lg:ml-4 w-full lg:w-auto">
      {metrics.map((metric, index) => (
        <Card key={index} className="border-2">
          <CardContent className="p-3 sm:p-4">
            <div className="text-lg sm:text-xl lg:text-2xl font-bold truncate" style={{ color: metric.color }}>
              {metric.value}
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mt-1">
              <span className="text-xs sm:text-sm text-gray-600 truncate">{metric.label}</span>
              <span
                className={`flex items-center text-xs ${
                  metric.isPositive ? "text-green-600" : "text-red-600"
                }`}
              >
                {metric.isPositive ? (
                  <TrendingUp className="h-3 w-3 mr-1" />
                ) : (
                  <TrendingDown className="h-3 w-3 mr-1" />
                )}
                {metric.trend}%
              </span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
