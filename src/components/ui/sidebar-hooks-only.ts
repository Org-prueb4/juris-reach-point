import * as React from "react"
import { useContext } from "react"
import { SidebarContext } from "./sidebar-hooks"

export function useSidebar() {
  const context = useContext(SidebarContext)
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider")
  }
  return context
} 