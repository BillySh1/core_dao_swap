import { useTheme as useNextTheme } from 'next-themes'
import { useContext } from 'react'
import { ThemeContext as StyledThemeContext } from 'styled-components'

const useTheme = () => {
  const { setTheme } = useNextTheme()
  const theme = useContext(StyledThemeContext)
  return { isDark: false, theme, setTheme }
}

export default useTheme
