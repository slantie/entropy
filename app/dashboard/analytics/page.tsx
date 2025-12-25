"use client"

import * as React from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import {
    SidebarInset,
    SidebarProvider,
} from "@/components/ui/sidebar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart"
import { Area, AreaChart, Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Line, LineChart, Tooltip, Legend } from "recharts"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { IconInfoCircle } from "@tabler/icons-react"

const monthlyFraudTrends = [
    { month: "Jan", volume: 4500, fraud: 120 },
    { month: "Feb", volume: 5200, fraud: 150 },
    { month: "Mar", volume: 4800, fraud: 110 },
    { month: "Apr", volume: 6100, fraud: 280 },
    { month: "May", volume: 5900, fraud: 200 },
    { month: "Jun", volume: 6800, fraud: 240 },
]

const chartConfig = {
    volume: {
        label: "Total Volume",
        color: "hsl(var(--primary))",
    },
    fraud: {
        label: "Fraud Cases",
        color: "hsl(var(--destructive))",
    },
} satisfies ChartConfig

export default function AnalyticsPage() {
    const [threshold, setThreshold] = React.useState([75])

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
                        <div className="px-4 lg:px-6">
                            <div className="flex items-center justify-between mb-6">
                                <div>
                                    <h1 className="text-2xl font-bold tracking-tight">Risk Analytics</h1>
                                    <p className="text-muted-foreground">Comprehensive trends and predictive risk modeling data.</p>
                                </div>
                            </div>

                            <Tabs defaultValue="overview" className="space-y-4">
                                <TabsList>
                                    <TabsTrigger value="overview">Trend Overview</TabsTrigger>
                                    <TabsTrigger value="regional">Regional Heatmap</TabsTrigger>
                                    <TabsTrigger value="simulation">Risk Simulation</TabsTrigger>
                                </TabsList>

                                <TabsContent value="overview" className="space-y-4">
                                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                                        <Card className="col-span-4">
                                            <CardHeader>
                                                <CardTitle>Transaction vs Fraud Trend</CardTitle>
                                                <CardDescription>Measuring fraud attempts against total transaction volume (6 months)</CardDescription>
                                            </CardHeader>
                                            <CardContent className="pl-2">
                                                <ChartContainer config={chartConfig} className="h-[350px] w-full">
                                                    <AreaChart data={monthlyFraudTrends}>
                                                        <CartesianGrid vertical={false} strokeDasharray="3 3" />
                                                        <XAxis
                                                            dataKey="month"
                                                            tickLine={false}
                                                            axisLine={false}
                                                            tickMargin={8}
                                                        />
                                                        <YAxis
                                                            tickLine={false}
                                                            axisLine={false}
                                                            tickMargin={8}
                                                        />
                                                        <ChartTooltip content={<ChartTooltipContent />} />
                                                        <Area
                                                            type="monotone"
                                                            dataKey="volume"
                                                            fill="var(--color-volume)"
                                                            fillOpacity={0.1}
                                                            stroke="var(--color-volume)"
                                                            strokeWidth={2}
                                                        />
                                                        <Area
                                                            type="monotone"
                                                            dataKey="fraud"
                                                            fill="var(--color-fraud)"
                                                            fillOpacity={0.3}
                                                            stroke="var(--color-fraud)"
                                                            strokeWidth={2}
                                                        />
                                                    </AreaChart>
                                                </ChartContainer>
                                            </CardContent>
                                        </Card>

                                        <Card className="col-span-3">
                                            <CardHeader>
                                                <CardTitle>Fraud by Channel</CardTitle>
                                                <CardDescription>Concentration of risk across transaction methods</CardDescription>
                                            </CardHeader>
                                            <CardContent>
                                                <div className="space-y-4">
                                                    {[
                                                        { name: "Mobile App", percent: 65, color: "bg-destructive" },
                                                        { name: "Web Portal", percent: 22, color: "bg-amber-500" },
                                                        { name: "POS / Physical", percent: 8, color: "bg-blue-500" },
                                                        { name: "Cash Withdrawal", percent: 5, color: "bg-emerald-500" },
                                                    ].map((channel) => (
                                                        <div key={channel.name} className="space-y-2">
                                                            <div className="flex items-center justify-between text-sm">
                                                                <span className="font-medium">{channel.name}</span>
                                                                <span className="text-muted-foreground">{channel.percent}%</span>
                                                            </div>
                                                            <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                                                                <div className={`h-full ${channel.color}`} style={{ width: `${channel.percent}%` }} />
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </TabsContent>

                                <TabsContent value="simulation">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle className="flex items-center gap-2">
                                                <IconInfoCircle className="h-4 w-4 text-blue-500" />
                                                Risk Threshold Simulator
                                            </CardTitle>
                                            <CardDescription>Adjust high-risk thresholds to see potential impact on false positives vs fraud detection rate.</CardDescription>
                                        </CardHeader>
                                        <CardContent className="space-y-8 py-10">
                                            <div className="space-y-4">
                                                <div className="flex justify-between">
                                                    <Label>Auto-Block Threshold: <span className="text-primary font-bold">{threshold}%</span></Label>
                                                    <Badge variant="outline">Sensitive Mode</Badge>
                                                </div>
                                                <Slider
                                                    value={threshold}
                                                    onValueChange={setThreshold}
                                                    max={100}
                                                    step={1}
                                                />
                                            </div>

                                            <div className="grid grid-cols-2 gap-8 pt-4">
                                                <div className="space-y-1">
                                                    <div className="text-sm font-medium text-muted-foreground uppercase tracking-widest">Est. Fraud Caught</div>
                                                    <div className="text-3xl font-bold text-emerald-600">99.2%</div>
                                                    <div className="text-xs text-muted-foreground">+0.5% from current</div>
                                                </div>
                                                <div className="space-y-1">
                                                    <div className="text-sm font-medium text-muted-foreground uppercase tracking-widest">False Positive Rate</div>
                                                    <div className="text-3xl font-bold text-destructive">4.8%</div>
                                                    <div className="text-xs text-muted-foreground">+1.2% from current</div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </TabsContent>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}
