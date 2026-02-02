import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Store, Users, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function OverviewCards() {
  return (
    <div className="space-y-4">
      <Card className=" py-0 ">
        <CardHeader className="border-b border-[#E4E4E4] bg-[#F9FAFB] pt-6 rounded-t-xl ">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <Store className="h-4 w-4 sm:h-5 sm:w-5 text-[#4169E1]" />
              <CardTitle className="text-base sm:text-lg font-semibold">Listings Overview</CardTitle>
            </div>
            <Button variant="link" className="text-[#4169E1] p-0 h-auto text-xs sm:text-sm w-fit">
              View all
              <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 ml-1" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-4 sm:p-6">
          <div className="grid grid-cols-3 gap-2 sm:gap-4">
            <div>
              <div className="text-xs sm:text-sm text-gray-600 mb-1">Total</div>
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold">1.8k</div>
            </div>
            <div>
              <div className="text-xs sm:text-sm text-gray-600 mb-1">Active</div>
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold">80</div>
            </div>
            <div>
              <div className="text-xs sm:text-sm text-gray-600 mb-1">Archived</div>
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold">1k</div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card className=" py-0 ">
        <CardHeader className="border-b border-[#E4E4E4] bg-[#F9FAFB] pt-6 rounded-t-xl ">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 sm:h-5 sm:w-5 text-[#4169E1]" />
              <CardTitle className="text-base sm:text-lg font-semibold">Users Overview</CardTitle>
            </div>
            <Button variant="link" className="text-[#4169E1] p-0 h-auto text-xs sm:text-sm w-fit">
              View all
              <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 ml-1" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-4 sm:p-6">
          <div className="grid grid-cols-3 gap-2 sm:gap-4">
            <div>
              <div className="text-xs sm:text-sm text-gray-600 mb-1">Total</div>
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold">20.7k</div>
            </div>
            <div>
              <div className="text-xs sm:text-sm text-gray-600 mb-1">Riders</div>
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold">8.5k</div>
            </div>
            <div>
              <div className="text-xs sm:text-sm text-gray-600 mb-1">Subscribers</div>
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold">7.5k</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
