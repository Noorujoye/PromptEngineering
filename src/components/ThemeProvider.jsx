import { useEffect, useMemo, useState } from 'react'
import { ThemeContext } from './themeContext'

function getPreferredTheme() {
  try {
    const saved = window?.localStorage?.getItem('pep_theme')
    if (saved === 'light' || saved === 'dark') return saved
  } catch {
    // ignore storage access errors (privacy mode / blocked storage)
  }

  try {
    return window.matchMedia?.('(prefers-color-scheme: dark)')?.matches ? 'dark' : 'light'
  } catch {
    return 'light'
  }
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => getPreferredTheme())

  useEffect(() => {
    const root = document?.documentElement
    if (!root) return
    if (theme === 'dark') root.classList.add('dark')
    else root.classList.remove('dark')

    try {
      window?.localStorage?.setItem('pep_theme', theme)
    } catch {
      // ignore storage access errors
    }
  }, [theme])

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      toggleTheme: () => setTheme((t) => (t === 'dark' ? 'light' : 'dark')),
    }),
    [theme],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
