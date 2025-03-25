"use client"

import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import CardValues from "@/components/cardValues"
const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
]
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  }
} satisfies ChartConfig

const Chart = () => {
  return (
    <ChartContainer config={chartConfig}>
      <LineChart
        accessibilityLayer
        data={chartData}
        margin={{
          left: 12,
          right: 12,
        }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Line
          dataKey="desktop"
          type="natural"
          stroke={chartConfig.desktop.color}
          strokeWidth={2}
          dot={{
            fill: chartConfig.desktop.color,
          }}
          activeDot={{
            r: 6,
          }}
        />
      </LineChart>
    </ChartContainer>
  )
}

export default function DashboardPage() {
  console.log('Desktop color:', chartConfig.desktop.color);
  return (
    <div className="flex flex-row gap-5 w-full">
      <CardValues title="Teste" description="Teste 2" content={<Chart />} />
      <CardValues title="Teste" description="Teste 2" content={<Chart />} />
      <CardValues title="Teste" description="Teste 2" content={<Chart />} />
      <CardValues title="Teste" description="Teste 2" content={<Chart />} />
    </div>

  )
}