'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

export const NavBar = () => {
    const pathname = usePathname()

  return (
    <nav className="flex justify-start gap-2 mb-4">
        <Link href={'/'}
            className={`${pathname === '/' ? 'bg-slate-200 underline text-slate-950' : ''} rounded px-4 py-1`}
        >Home</Link>

        <Link href={'/notes'}
            className={`${pathname === '/notes' ? 'bg-slate-200 underline text-slate-950' : ''} rounded px-4 py-1`}
        >Notes</Link>
    </nav>
  )
}
