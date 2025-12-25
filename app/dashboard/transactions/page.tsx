import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { TransactionTable } from "@/components/transaction-table"
import {
    SidebarInset,
    SidebarProvider,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { IconSearch, IconFilter, IconDownload } from "@tabler/icons-react"
import transactions from "../transactions.json"

export default function TransactionsPage() {
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
                    <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                        <div className="flex flex-col gap-4 px-4 lg:px-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h1 className="text-2xl font-bold tracking-tight">Live Transactions</h1>
                                    <p className="text-muted-foreground">Monitor real-time transaction flow across all banking channels.</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Button variant="outline" size="sm">
                                        <IconDownload className="mr-2 h-4 w-4" />
                                        Export
                                    </Button>
                                    <Button size="sm">Refresh Live Feed</Button>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <div className="relative flex-1">
                                    <IconSearch className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                    <Input
                                        placeholder="Search by Transaction ID, User ID, or Merchant..."
                                        className="pl-8"
                                    />
                                </div>
                                <Button variant="outline" size="icon">
                                    <IconFilter className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>

                        <TransactionTable data={transactions} />
                    </div>
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}
