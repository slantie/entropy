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
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { IconBrain, IconCheck, IconActivity } from "@tabler/icons-react"

const featureImportance = [
    { feature: "Location Drift", value: 88 },
    { feature: "Time Velocity", value: 72 },
    { feature: "Amount Deviance", value: 65 },
    { feature: "Device ID Fingerprint", value: 45 },
    { feature: "MCC Category", value: 30 },
]

export default function ModelInsightsPage() {
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
                                    <h1 className="text-2xl font-bold tracking-tight flex items-center gap-2">
                                        <IconBrain className="h-6 w-6 text-primary" />
                                        Model Insights
                                    </h1>
                                    <p className="text-muted-foreground">Explainable AI (XAI) for fraud detection models.</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Badge variant="outline" className="bg-emerald-500/10 text-emerald-600 border-emerald-600/20">
                                        Model v3.8.2 Active
                                    </Badge>
                                    <Badge variant="outline">Last Retrained: 2h ago</Badge>
                                </div>
                            </div>

                            <div className="grid gap-6 md:grid-cols-12">
                                <div className="md:col-span-12 lg:col-span-8">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Feature Importance (SHAP Values)</CardTitle>
                                            <CardDescription>Key drivers for the current model's risk decisions</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <ChartContainer config={{ value: { label: "Weight", color: "hsl(var(--primary))" } }} className="h-[300px] w-full">
                                                <BarChart data={featureImportance} layout="vertical" margin={{ left: 40 }}>
                                                    <CartesianGrid horizontal={false} strokeDasharray="3 3" />
                                                    <XAxis type="number" hide />
                                                    <YAxis
                                                        dataKey="feature"
                                                        type="category"
                                                        tickLine={false}
                                                        axisLine={false}
                                                        width={120}
                                                        className="text-xs"
                                                    />
                                                    <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                                                    <Bar
                                                        dataKey="value"
                                                        fill="var(--color-value)"
                                                        radius={[0, 4, 4, 0]}
                                                        barSize={20}
                                                    />
                                                </BarChart>
                                            </ChartContainer>
                                        </CardContent>
                                    </Card>
                                </div>

                                <div className="md:col-span-12 lg:col-span-4 space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle className="text-sm">Model Confidence Levels</CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            <div className="space-y-2">
                                                <div className="flex justify-between text-xs">
                                                    <span>High Confidence (Strict)</span>
                                                    <span className="font-bold">96%</span>
                                                </div>
                                                <Progress value={96} className="h-1" />
                                            </div>
                                            <div className="space-y-2">
                                                <div className="flex justify-between text-xs">
                                                    <span>Low Confidence (Edge Cases)</span>
                                                    <span className="font-bold">4%</span>
                                                </div>
                                                <Progress value={4} className="h-1 bg-muted" />
                                            </div>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardHeader>
                                            <CardTitle className="text-sm">Ensemble Performance</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="flex items-center gap-4">
                                                <div className="flex flex-col items-center flex-1 p-2 bg-muted/50 rounded-lg">
                                                    <span className="text-xs text-muted-foreground uppercase font-semibold">AUC-PR</span>
                                                    <span className="text-xl font-bold">0.92</span>
                                                </div>
                                                <div className="flex flex-col items-center flex-1 p-2 bg-muted/50 rounded-lg">
                                                    <span className="text-xs text-muted-foreground uppercase font-semibold">Recall</span>
                                                    <span className="text-xl font-bold">89%</span>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>

                            <div className="mt-6">
                                <h3 className="text-lg font-semibold mb-4">Model Architectures</h3>
                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger className="hover:no-underline">
                                            <div className="flex items-center gap-2">
                                                <Badge variant="outline">Core</Badge>
                                                <span>XGBoost Gradient Boosting (Tier 1)</span>
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                                            Used for structured data features like transaction amount, time, and merchant category.
                                            Highly efficient at identifying known fraud patterns from historical data.
                                            Explains 60% of variance in our current model.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-2">
                                        <AccordionTrigger className="hover:no-underline">
                                            <div className="flex items-center gap-2">
                                                <Badge variant="outline">Sequence</Badge>
                                                <span>LSTM Recurrent Neural Networks (Tier 2)</span>
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent className="text-sm text-muted-foreground">
                                            Handles the sequential nature of user behavior. Detects velocity spikes and sudden changes in transaction frequency or timing that deviate from established user profiles.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-3">
                                        <AccordionTrigger className="hover:no-underline">
                                            <div className="flex items-center gap-2">
                                                <Badge variant="outline">Deep</Badge>
                                                <span>Graph Neural Network (Relational)</span>
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent className="text-sm text-muted-foreground">
                                            Identifies complex fraud rings by mapping relationships between different accounts, IP addresses, and device fingerprints.
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}
