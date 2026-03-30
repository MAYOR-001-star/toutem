import { createContext, useContext, useEffect, useState } from "react"

type ThemeMode = "light" | "dark"

type ThemeContextType = {
  theme: ThemeMode
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [theme, setTheme] = useState<ThemeMode>("light")

  // Load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as ThemeMode | null
    if (savedTheme) {
      setTheme(savedTheme)
    }
  }, [])

  // Apply theme to HTML
  useEffect(() => {
    const root = document.documentElement

    if (theme === "dark") {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }

    localStorage.setItem("theme", theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

// Safer custom hook
export const useTheme = () => {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider")
  }

  return context
}