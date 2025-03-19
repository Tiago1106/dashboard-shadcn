'use client'

import { useTheme } from "next-themes"

import { Moon, Sun } from "lucide-react"
import { SidebarTrigger } from "./ui/sidebar"
import { Separator } from "./ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

export function AppHeader() {
  const { setTheme, theme } = useTheme()

  return (
    <>
      <div className="flex items-center h-12 justify-between w-full px-6 bg-sidebar">
        <div className="flex items-center justify-between flex-row gap-5">
          <SidebarTrigger />
          <p>App Dashboard</p>
        </div>
        <div className="flex items-center justify-between flex-row gap-5">
          {theme === 'ligth' ?
            <Moon size={18} onClick={() => setTheme('dark')} />
            : <Sun size={18} onClick={() => setTheme('ligth')} />}
          <Avatar className="cursor-pointer">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <Separator />
    </>
  )
}