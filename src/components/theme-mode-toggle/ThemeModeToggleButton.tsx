import { Moon, Sun } from 'lucide-react'

import { useTheme } from '@/providers/ThemeProvider/useTheme'

import { Button } from '../ui/Button'

export function ThemeModeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <Button
      variant='outline'
      size='icon'
      onClick={toggleTheme}
    >
      {theme === 'light' ? (
        <Sun className='h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90' />
      ) : (
        <Moon className='absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0' />
      )}
      <span className='sr-only'>Toggle theme</span>
    </Button>
  )
}
