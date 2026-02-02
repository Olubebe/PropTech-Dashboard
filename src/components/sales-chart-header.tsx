'use client';

import { Button } from "@/components/ui/button"
import { CardTitle } from "@/components/ui/card"
import { timeButtons } from "@/constant/data";

export type TimePeriod = "week" | "month" | "year"

interface SalesChartHeaderProps {
  selectedPeriod: TimePeriod
  onPeriodChange: (period: TimePeriod) => void
}


export function SalesChartHeader({ selectedPeriod, onPeriodChange }: SalesChartHeaderProps) {
  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <CardTitle className="text-xl sm:text-2xl font-bold">Sales Overview</CardTitle>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Showing overview Jan 2022 - Sep 2022
          </p>
        </div>
        <Button variant="outline" className="rounded-full bg-transparent text-xs px-4 py-2 sm:px-6 w-fit">
          View Transactions
        </Button>
      </div>
      <div className="flex justify-end gap-2 sm:gap-4 mt-4 sm:mt-6">
        {timeButtons.map((button) => (
          <button
            key={button.value}
            onClick={() => onPeriodChange(button.value)}
            className={`text-xs sm:text-sm pb-1 ${
              selectedPeriod === button.value
                ? "text-gray-900 font-semibold border-b-2 border-gray-900"
                : "text-gray-500 hover:text-gray-900"
            }`}
          >
            {button.label}
          </button>
        ))}
      </div>
    </>
  )
}
