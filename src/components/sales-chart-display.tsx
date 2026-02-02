'use client';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io"

interface ChartDataPoint {
  month: string
  value1: number
  value2: number
  value3: number
  value4: number
}

interface SalesChartDisplayProps {
  data: ChartDataPoint[]
  currentPage: number
  totalPages: number
  onPrevious: () => void
  onNext: () => void
}

export function SalesChartDisplay({ 
  data, 
  currentPage, 
  totalPages, 
  onPrevious, 
  onNext 
}: SalesChartDisplayProps) {
  return (
    <div className="flex gap-2 sm:gap-4 w-full lg:flex-1">
      <button
        onClick={onPrevious}
        disabled={currentPage === 0}
        className="self-center p-1.5 sm:p-2 bg-gray-100 rounded-full disabled:opacity-30 disabled:cursor-not-allowed hidden sm:flex"
        aria-label="Previous"
      >
        <IoMdArrowDropleft className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600" />
      </button>
      <div className="flex-1 h-[200px] sm:h-[250px] lg:h-[300px] w-full min-w-0">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#f0f0f0"
            />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#999", fontSize: 10 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#999", fontSize: 10 }}
              tickFormatter={(value) => `${value}m`}
            />
            <Tooltip />
            <Bar dataKey="value1" fill="#4545FE" radius={[4, 4, 0, 0]} />
            <Bar dataKey="value2" fill="#12B76A" radius={[4, 4, 0, 0]} />
            <Bar dataKey="value3" fill="#FF6B6B" radius={[4, 4, 0, 0]} />
            <Bar dataKey="value4" fill="#9B59B6" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <button
        onClick={onNext}
        disabled={currentPage === totalPages - 1}
        className="self-center p-1.5 sm:p-2 bg-gray-100 rounded-full disabled:opacity-30 disabled:cursor-not-allowed hidden sm:flex"
        aria-label="Next"
      >
        <IoMdArrowDropright className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600" />
      </button>
    </div>
  )
}
