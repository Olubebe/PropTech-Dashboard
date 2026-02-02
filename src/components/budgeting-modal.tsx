"use client";

import { Calculator, Sliders, TrendingUp, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Image from "next/image";

interface BudgetingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function BudgetingModal({ open, onOpenChange }: BudgetingModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-full sm:max-w-md md:max-w-2xl p-0 gap-0 border-none bg-white overflow-hidden h-full sm:h-auto overflow-y-auto">
        {/* <div className="bg-gradient-to-br from-[#1e3a5f] to-[#2d5d7a] pt-6 sm:pt-10 pb-4 sm:pb-0 flex items-center justify-center">
          <div className="relative w-full max-w-[300px] md:max-w-[410px] h-[200px] md:h-[385px]">
            <Image
              src="/icons/Sketch.png"
              alt="sketch"
              fill
              className="object-contain"
            />
          </div>
        </div> */}
				        <div className="bg-gradient-to-br from-[#1e3a5f] to-[#2d5d7a] pt-6 md:pt-10  px-6   flex items-center justify-center">
          <Image
            src="/icons/Sketch.png"
            alt="sketch"
            width={410}
            height={385}
          />
        </div>


        <div className="p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8">
          <div className="flex gap-3 sm:gap-4">
            <div className="mt-1">
              <Sliders className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2">
                Set up annual budgets by account category
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                Allocate funds across income and expense lines with full
                visibility.
              </p>
            </div>
          </div>

          <div className="flex gap-3 sm:gap-4">
            <div className="mt-1">
              <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2">
                Track actuals vs budget in real time
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                See how your community is performing against plan, month by
                month.
              </p>
            </div>
          </div>

          <div className="flex gap-3 sm:gap-4">
            <div className="mt-1">
              <BarChart3 className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2">
                Adjust figures and forecast with ease
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                Edit amounts, apply percentage changes, or roll forward last
                year's data—all in one place.
              </p>
            </div>
          </div>

          <Button
            className="w-full h-12 sm:h-14 text-base sm:text-lg bg-black hover:bg-black/90 text-white rounded-full"
            onClick={() => {
              // Handle create budget action
              onOpenChange(false);
            }}
          >
            Create Budget
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
