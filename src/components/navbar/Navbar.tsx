import Link from "next/link"
import { ModeToggle } from "./ModeToggle"
import { MenuColapse } from "./MenuColapse"

function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4">
        <Link href="/" className="text-3xl font-bold">App</Link>
        <div className="hidden sm:flex items-center gap-3">
            <Link href="/" className="px-3 py-1.5 hover:bg-muted rounded-md">Home</Link>
            <Link href="/public/about" className="px-3 py-1.5 hover:bg-muted rounded-md">About</Link>
            <Link href="/public/login" className="px-3 py-1.5 hover:bg-muted rounded-md">Login</Link>
            <Link href="/public/register" className="px-3 py-1.5 hover:bg-muted rounded-md">Register</Link>
            <ModeToggle />
        </div>
        <MenuColapse />
    </nav>
  )
}

export default Navbar