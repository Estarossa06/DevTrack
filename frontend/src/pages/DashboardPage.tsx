import {
  DashboardStats,
  RecentProjects,
  RecentActivity,
  LearningGoals,
} from "@/components/dashboard";

import { Button } from "@/components/ui";

import { env } from "@/config";

export default function DashboardPage() {
  return (
    <div className="space-y-8">

      <section>

        <h1 className="text-3xl font-bold">
          Welcome back, Sebastián
        </h1>

        <p className="text-sm text-[var(--color-gray-500)]">
        {env.appName} - {env.appVersion}
        </p>

        <div className="mt-6 flex gap-4">

         <Button>
           New Project
         </Button>

         <Button variant="secondary">
           View Tasks
         </Button>

         <Button variant="outline">
            Settings
         </Button>

        </div>
        
        <p className="mt-2 text-[var(--color-gray-600)]">
          Here's an overview of your software engineering journey.
        </p>

      </section>

      <DashboardStats />
        <section className="grid grid-cols-2 gap-6">
          <LearningGoals />

          <RecentActivity />
        </section>
      <RecentProjects />

    </div>
  );
}
