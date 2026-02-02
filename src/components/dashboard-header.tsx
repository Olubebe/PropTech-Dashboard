"use client"
import { Button } from "@/components/ui/button";
import Logo from "./logo";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";
import { CalendarModal } from "./calendar-modal";
import { BudgetingModal } from "./budgeting-modal";

export function DashboardHeader() {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isBudgetingOpen, setIsBudgetingOpen] = useState(false);

  const items = [
    {
      id: "1",
      name: "calculator",
      icon: "/icons/calculator.svg",
      onClick: () => setIsBudgetingOpen(true),
    },
    {
      id: "2",
      name: "calendar",
      icon: "/icons/calendar.svg",
      onClick: () => setIsCalendarOpen(true),
    },
    {
      id: "3",
      name: "search",
      icon: "/icons/search.svg",
      onClick: () => {},
    },
    {
      id: "4",
      name: "wallet",
      icon: "/icons/wallet.svg",
      onClick: () => {},
    },
    {
      id: "5",
      name: "shop",
      icon: "/icons/shop.svg",
      onClick: () => {},
    },
  ];

  return (
    <header className="bg-[#2d5d56] text-white px-3 sm:px-6 py-3 sm:py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10 lg:hidden"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="bg-[#2d5d56] text-white border-white/10"
            >
              <SheetHeader>
                <SheetTitle className="text-white">Menu</SheetTitle>
              </SheetHeader>
              <div className="mt-6 space-y-4">
                {items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Button
                      key={item.id}
                      variant="ghost"
                      className="w-full justify-start gap-3 text-white hover:bg-white/10"
                      onClick={item.onClick}
                    >
                      <Image
                        src={item.icon}
                        alt={item.name}
                        width={30}
                        height={30}
                      />
                      {item.name}
                    </Button>
                  );
                })}
              </div>
            </SheetContent>
          </Sheet>
          <Logo />
        </div>

        <div className="flex items-center gap-1 sm:gap-3">
          <div className="hidden lg:flex items-center gap-3">
            {items.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.id}
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/10 h-10 w-10"
                  onClick={item.onClick}
                >
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={30}
                    height={30}
                  />
                </Button>
              );
            })}
          </div>
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center ml-2 lg:ml-0">
            <span className="text-[#2d5d56] font-semibold text-sm sm:text-base">
              D
            </span>
          </div>
        </div>
      </div>
            <CalendarModal open={isCalendarOpen} onOpenChange={setIsCalendarOpen} />
      <BudgetingModal open={isBudgetingOpen} onOpenChange={setIsBudgetingOpen} />

    </header>
  );
}
