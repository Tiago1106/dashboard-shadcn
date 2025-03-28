"use client"

import { TrendingDownIcon, TrendingUpIcon } from "lucide-react"

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "./ui/badge";


interface ICardValues {
  title: string;
  description: string;
  footerTitle: string,
  footerDescription: string,
  trending: number
}

export default function CardValues({ title, description, footerTitle, footerDescription, trending }: ICardValues) {
  return (
    <Card className="w-full">
      <CardHeader className="relative">
        <CardDescription className="text-[var(--muted-foreground)]">{description}</CardDescription>
        <CardTitle className="text-3xl font-semibold tabular-nums">{title}</CardTitle>
        <div className="absolute right-4">
          <Badge variant="outline">
            {trending >= 0 ? (
              <>
                <TrendingUpIcon className="size-3" />
                +{trending}%
              </>
            ) : (
              <>
                <TrendingDownIcon className="size-3" />
                {trending}%
              </>
            )}
          </Badge>
        </div>
      </CardHeader>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <CardDescription className="flex flex-row items-center gap-2">
          {footerTitle}
          {trending >= 0 ? (
            <TrendingUpIcon className="size-3" />
          ) : (
            <TrendingDownIcon className="size-3" />
          )}
        </CardDescription>
        <CardDescription className="text-[var(--muted-foreground)]">{footerDescription}</CardDescription>
      </CardFooter>
    </Card>
  )
}