"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { SalesChartHeader } from "@/components/sales-chart-header"
import { SalesChartDisplay } from "@/components/sales-chart-display"
import { SalesMetricsCards } from "@/components/sales-metrics-cards"
import { monthData, weekData, yearData } from "@/constant/data"


type TimePeriod = "week" | "month" | "year"

export function SalesChart() {
  const [selectedPeriod, setSelectedPeriod] = useState<TimePeriod>("year")
  const [currentPage, setCurrentPage] = useState(0)
  const itemsPerPage = 6

  const getData = () => {
    switch (selectedPeriod) {
      case "week":
        return weekData
      case "month":
        return monthData
      case "year":
        return yearData
      default:
        return yearData
    }
  }

  const allData = getData()
  const totalPages = Math.ceil(allData.length / itemsPerPage)
  const paginatedData = allData.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  )

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(0, prev - 1))
  }

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1))
  }

  return (
    <Card className="lg:col-span-2 py-0">
      <CardHeader className="border-b p-4 sm:p-6">
        <SalesChartHeader
          selectedPeriod={selectedPeriod}
          onPeriodChange={setSelectedPeriod}
        />
      </CardHeader>
      <CardContent className="flex flex-col lg:flex-row gap-4 p-4 sm:p-6">
        <SalesChartDisplay
          data={paginatedData}
          currentPage={currentPage}
          totalPages={totalPages}
          onPrevious={handlePrevious}
          onNext={handleNext}
        />
        <SalesMetricsCards />
      </CardContent>
    </Card>
  )
}
