import React, {useState, useEffect} from 'react'
import moment from 'moment-timezone'

const ThemeContext = React.createContext({
  theme: 'light',
  toggleTheme: () => {}
})

const ThemeContextProvider = ({children}) => {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  const colorTheme = theme === 'light' ? 'dark' : 'light'

  const daynightChecker = () => {
    const hour = moment().format('H')
    if (hour >= 6 && hour < 18) {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  useEffect(() => {
    // set theme based on the time on initial application load only
    daynightChecker()
  }, [])

  return (
    <ThemeContext.Provider value={{theme, colorTheme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

export {ThemeContext, ThemeContextProvider}
