"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


interface ICardValues {
  title: string;
  description: string;
  content?: React.ReactNode,
  footer?: React.ReactNode,
}

export default function CardValues({ title, description, content, footer }: ICardValues) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      {content && (
        <CardContent>
          {content}
        </CardContent>
      )}
      {footer && (
        <CardFooter className="flex-col items-start gap-2 text-sm">
          {footer}
        </CardFooter>
      )}
    </Card>
  )
}