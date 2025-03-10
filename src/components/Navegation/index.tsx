"use client"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import Link from "next/link"
import { Moon, Sun, Mail, Phone } from "lucide-react"

export default function Navigation() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  if (!mounted) {
    return null
  }

  return (
    <nav
      className={`p-4 flex gap-48 items-center transition-all duration-500 fixed top-0 left-0 right-0 z-50 w-full
        ${
          theme === "dark"
            ? "bg-gradient-to-r from-neutral-900 via-black text-white"
            : "bg-gradient-to-r from-white via-gray-100 to-white text-gray-800 shadow-lg"
        }
        ${scrolled ? "backdrop-blur-md bg-opacity-80 dark:bg-opacity-80" : ""}`}
    >
      <div className="text-xl font-bold flex justify-end w-96 items-center">
        <Link href="">InterCompnet</Link>
      </div>

      <div className="flex gap-5 justify-center font-normal text-sm items-center">


      <Link
          className="text-neutral-500 dark:text-zinc-400 hover:text-foreground transition-all duration-300 dark:hover:text-foreground border-b-2 border-transparent hover:border-foreground"
          href=""
        >
          Inicio
        </Link>

        <Link id="#sobre-nos"
          className="text-neutral-500 dark:text-zinc-400 hover:text-foreground transition-all duration-300 dark:hover:text-foreground border-b-2 border-transparent hover:border-foreground"
          href="#sobre-nos"
        >
          Sobre Nós
        </Link>
        
        <Link
          className="text-neutral-500 dark:text-zinc-400 hover:text-foreground transition-all duration-300 dark:hover:text-foreground border-b-2 border-transparent hover:border-foreground"
          href="#servicos"
        >
          Serviços
        </Link>

        <Link
          className="text-neutral-500 dark:text-zinc-400 hover:text-foreground transition-all duration-300 dark:hover:text-foreground border-b-2 border-transparent hover:border-foreground"
          href="#funcionamento"
        >
          Como Funciona
        </Link>
        
        <Link
          className="text-neutral-500 dark:text-zinc-400 hover:text-foreground transition-all duration-300 dark:hover:text-foreground border-b-2 border-transparent hover:border-foreground"
          href=""
        >
          Contato
        </Link>
      </div>

      <div className="flex gap-6 text-center items-center justify-center">
        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className={`p-2 rounded-full transition-all duration-200
            ${
              theme === "dark"
                ? " border-2 text-white hover:bg-neutral-800"
                : "border-2 text-gray-800 hover:bg-zinc-200"
            }`}
        >
          {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
        </button>

        <a
          className="group text-sm pl-4 pr-6 py-2 border-[1.5px] rounded-md text-left flex items-center justify-center gap-3 hover:bg-zinc-200 dark:hover:bg-zinc-800 
        transition-colors duration-300"
          href="#"
        >
          <Mail
            className="transition-transform duration-300 group-hover:-translate-y-[2px] group-hover:rotate-6 ease-in-out"
            size={17}
          />
          Email
        </a>

        <a
          className="group text-sm pl-4 pr-6 py-2 border-[1.5px] rounded-md text-left flex items-center justify-center gap-3
         dark:bg-slate-50 dark:text-black dark:hover:bg-opacity-85 transition-colors duration-300
         bg-black text-white font-medium hover:bg-opacity-80"
          href="#"
        >
          <Phone className="transition-transform duration-300 group-hover:animate-wiggle" size={17} />
          (11) 5535-7587
        </a>
      </div>
    </nav>
  )
}

