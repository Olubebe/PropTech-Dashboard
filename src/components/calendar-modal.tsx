"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, X, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
} from "@/components/ui/dialog"

interface CalendarModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function CalendarModal({ open, onOpenChange }: CalendarModalProps) {
  const [currentDate, setCurrentDate] = useState(new Date(2023, 10, 16)) // November 16, 2023
  
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THURS", "FRI", "SAT"]
  
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()
    
    const days = []
    
    // Previous month days
    const prevMonthLastDay = new Date(year, month, 0).getDate()
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      days.push({
        day: prevMonthLastDay - i,
        isCurrentMonth: false,
        isToday: false,
      })
    }
    
    // Current month days
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        day: i,
        isCurrentMonth: true,
        isToday: i === 16 && month === 10 && year === 2023,
      })
    }
    
    // Next month days
    const remainingDays = 42 - days.length // 6 rows × 7 days
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        day: i,
        isCurrentMonth: false,
        isToday: false,
        isNextMonth: true,
      })
    }
    
    return days
  }
  
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ]
  
  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))
  }
  
  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))
  }
  
  const days = getDaysInMonth(currentDate)
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-black text-white border-none max-w-full sm:max-w-md md:max-w-2xl p-0 gap-0 h-full sm:h-auto overflow-y-auto">
        <DialogHeader className="bg-[#1a1a1a] px-4 sm:px-6 py-3 sm:py-4 flex-row items-center justify-between space-y-0">
          <div className="flex items-center gap-2 sm:gap-3">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => onOpenChange(false)}
              className="text-white hover:bg-white/10 h-8 w-8 sm:h-10 sm:w-10"
            >
              <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            <h2 className="text-lg sm:text-xl font-semibold">Calendar</h2>
          </div>
        </DialogHeader>
        
        <div className="p-3 sm:p-6">
          <div className="flex items-center justify-center gap-4 sm:gap-8 mb-4 sm:mb-6">
            <Button
              variant="ghost"
              size="icon"
              onClick={previousMonth}
              className="text-white hover:bg-white/10 h-8 w-8 sm:h-10 sm:w-10"
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
            </Button>
            <h3 className="text-lg sm:text-2xl font-semibold whitespace-nowrap">
              {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
            </h3>
            <Button
              variant="ghost"
              size="icon"
              onClick={nextMonth}
              className="text-white hover:bg-white/10 h-8 w-8 sm:h-10 sm:w-10"
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
            </Button>
          </div>
          
          <div className="grid grid-cols-7 gap-0 border border-gray-800 overflow-x-auto">
            {daysOfWeek.map((day) => (
              <div
                key={day}
                className="text-center py-2 sm:py-3 text-[10px] sm:text-sm font-medium text-gray-400 border-b border-gray-800"
              >
                {day}
              </div>
            ))}
            
            {days.map((dayInfo, index) => (
              <div
                key={index}
                className={`
                  aspect-square border-r border-b border-gray-800 p-1 sm:p-2 text-left text-xs sm:text-base
                  ${!dayInfo.isCurrentMonth ? "text-gray-600" : "text-white"}
                  ${dayInfo.isToday ? "relative" : ""}
                  hover:bg-white/5 cursor-pointer
                `}
              >
                {dayInfo.isToday ? (
                  <div className="inline-flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-blue-600 text-white font-medium text-xs sm:text-base">
                    {dayInfo.day}
                  </div>
                ) : dayInfo.isNextMonth && dayInfo.day === 1 ? (
                  <span className="text-gray-500 text-[10px] sm:text-sm">DEC {dayInfo.day}</span>
                ) : dayInfo.isCurrentMonth && dayInfo.day === 1 ? (
                  <span className="text-[10px] sm:text-sm">Nov {dayInfo.day}</span>
                ) : (
                  <span>{dayInfo.day}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
