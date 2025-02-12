"use client"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import Link from "next/link"
import { Moon, Sun } from "lucide-react"

export default function Navigation() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <nav
      className={`p-4 flex gap-48 items-center transition-all duration-500 
      ${
        theme === "dark"
          ? "bg-gradient-to-r from-neutral-900 via-zinc-800 text-white"
          : "bg-gradient-to-r from-blue-50 via-white to-blue-50 text-gray-800"
      }`}
    >
      <div className="text-xl font-bold flex justify-end w-96 items-center">
        <Link href="">InterCompnet</Link>
      </div>
      <div className="flex gap-5 justify-center font-normal text-sm items-center">
        <Link className="hover:text-gray-900 dark:hover:text-gray-200 transition-all duration-300" href="">
          Sobre Nós
        </Link>
        <Link className="hover:text-gray-900 dark:hover:text-gray-200 transition-all duration-300" href="">
          Como Funciona
        </Link>
        <Link className="hover:text-gray-900 dark:hover:text-gray-200 transition-all duration-300" href="">
          Serviços
        </Link>
        <Link className="hover:text-gray-900 dark:hover:text-gray-200 transition-all duration-300" href="">
          Marcas
        </Link>
        <Link className="hover:text-gray-900 dark:hover:text-gray-200 transition-all duration-300" href="">
          Galeria
        </Link>
        <Link className="hover:text-gray-900 dark:hover:text-gray-200 transition-all duration-300" href="">
          Contato
        </Link>
      </div>

      {/* Theme toggle button */}
      <div>
        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className={`p-2 rounded-full transition-all duration-300
            ${
              theme === "dark"
                ? "bg-gray-700 text-white hover:bg-gray-600"
                : "bg-blue-100 text-gray-800 hover:bg-blue-200"
            }`}
        >
          {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
        </button>
      </div>
    </nav>
  )
}

