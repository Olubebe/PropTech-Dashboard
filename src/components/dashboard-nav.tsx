"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ListingsContent from "./listings/listings-content";
import UsersContent from "./users/users-content";
import RequestContent from "./request/request-content";
import ApplicationsContent from "./applications/applications-content";
import TasksContent from "./tasks/tasks-content";
import { navItems } from "@/constant/data";
import Dashboardcontent from "./dashboard/dashboard-content";

export function DashboardNav() {
  return (
    <Tabs defaultValue="dashboard" className="w-full">
      <nav className="bg-white border-b px-3 sm:px-6 py-3 overflow-x-auto">
        <TabsList className="h-auto bg-transparent p-0 gap-1 w-full justify-start flex-nowrap">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <TabsTrigger
                key={item.value}
                value={item.value}
                className="gap-2 data-[state=active]:bg-[#176D58]/15 data-[state=active]:text-primary data-[state=active]:font-semibold rounded-lg px-4 py-2.5 text-gray-700"
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </TabsTrigger>
            );
          })}
        </TabsList>
      </nav>

      <TabsContent value="dashboard" className="mt-0">
        <Dashboardcontent />
      </TabsContent>

      <TabsContent value="listings" className="mt-0">
        <ListingsContent />
      </TabsContent>

      <TabsContent value="users" className="mt-0">
        <UsersContent />
      </TabsContent>

      <TabsContent value="request" className="mt-0">
        <RequestContent />
      </TabsContent>

      <TabsContent value="applications" className="mt-0">
        <ApplicationsContent />
      </TabsContent>

      <TabsContent value="tasks" className="mt-0">
        <TasksContent />
      </TabsContent>
    </Tabs>
  );
}
