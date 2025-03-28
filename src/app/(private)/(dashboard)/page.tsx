"use client"

import CardValues from "@/components/cardValues"
import { ChartAreaInteractive } from "@/components/chat-area";

const MOCK_CARDS_VALUES = [
  {
    id: 1,
    title: "$1,250.00",
    description: "Total Revenue",
    footerTitle: "Trending up this month",
    footerDescription: "Visitors for the last 6 months",
    trending: 12.5,
  },
  {
    id: 2,
    title: "1,234",
    description: "New Customers",
    footerTitle: "Down 20% this period",
    footerDescription: "Acquisition needs attention",
    trending: -20,
  },
  {
    id: 3,
    title: "45,678",
    description: "Active Accounts",
    footerTitle: "Strong user retention",
    footerDescription: "Engagement exceed targets",
    trending: 12.5,
  },
  {
    id: 4,
    title: "4.5%",
    description: "Growth Rate",
    footerTitle: "Steady performance",
    footerDescription: "Meets growth projections",
    trending: 4.5,
  },
];

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
      <div className="flex gap-5 w-full md:flex-row flex-col">
        {MOCK_CARDS_VALUES.map((value) => (
          <CardValues key={value.id} title={value.title} description={value.description} footerTitle={value.footerTitle} footerDescription={value.footerDescription} trending={value.trending} />
        ))}
      </div>
      <ChartAreaInteractive />
    </div>
  )
}