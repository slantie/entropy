import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function SectionCards() {
  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Total Transactions Today</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            124,592
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingUp />
              +5.2%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium text-emerald-600 dark:text-emerald-400">
            Increased volume detected <IconTrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Processed across all channels
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Flagged Transactions</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            1,284
          </CardTitle>
          <CardAction>
            <Badge variant="destructive" className="bg-amber-500 hover:bg-amber-600 border-none text-white">
              Pending
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium text-amber-600 dark:text-amber-400">
            Requires analyst review <IconTrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">
            12% increase from yesterday
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Blocked Transactions</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            432
          </CardTitle>
          <CardAction>
            <Badge variant="destructive">
              Critical
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium text-destructive">
            High-risk patterns blocked <IconTrendingDown className="size-4" />
          </div>
          <div className="text-muted-foreground">Prevented approx. $45.2k loss</div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Avg Risk Score</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            24/100
          </CardTitle>
          <CardAction>
            <Badge variant="outline" className="text-emerald-600 border-emerald-600/20 bg-emerald-500/10">
              Low Risk
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Within safety threshold <IconTrendingDown className="size-4" />
          </div>
          <div className="text-muted-foreground">System health is optimal</div>
        </CardFooter>
      </Card>
    </div>
  )
}
