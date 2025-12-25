import { AppSidebar } from "@/components/app-sidebar"
import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { TransactionTable } from "@/components/transaction-table"
import { SectionCards } from "@/components/section-cards"
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"

import transactions from "./transactions.json"

export default function Page() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col pb-8">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <SectionCards />
              <div className="px-4 lg:px-6">
                <ChartAreaInteractive />
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between px-4 lg:px-6">
                  <div>
                    <h2 className="text-lg font-semibold tracking-tight">Recent High-Risk Transactions</h2>
                    <p className="text-sm text-muted-foreground">Transactions flagged by the monitoring system in the last hour</p>
                  </div>
                  <Button variant="outline" size="sm">View All</Button>
                </div>
                <TransactionTable data={transactions} />
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
