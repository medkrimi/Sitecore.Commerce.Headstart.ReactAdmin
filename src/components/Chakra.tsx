import generate from "@babel/generator"
import {ChakraProvider, extendTheme, localStorageManager, theme, withDefaultColorScheme} from "@chakra-ui/react"
import useLocalStorage from "hooks/useLocalStorage"
import React, {useMemo, useState} from "react"
import contextualColors from "styles/theme/contextualColors"
import {DEFAULT_THEME_ACCENT, DEFAULT_THEME_PRIMARY, DEFAULT_THEME_SECONDARY} from "theme/foundations/colors"
import schraTheme from "theme/theme"
import {generatePalette} from "utils"

interface ChakraProps {
  children: React.ReactNode
}
interface IBrandContext {
  colors?: {
    accent: string
    primary: string
    secondary: string
  }
  setColors?: (newColors: any) => void
}

export const brandContext = React.createContext<IBrandContext>({})

export const DEFAULT_THEME_COLORS = {
  accent: DEFAULT_THEME_ACCENT[500],
  primary: DEFAULT_THEME_PRIMARY[500],
  secondary: DEFAULT_THEME_SECONDARY[500]
}

export const Chakra = ({children}: ChakraProps) => {
  const [colors, setColors] = useLocalStorage("themeColors", DEFAULT_THEME_COLORS)

  const currentTheme = useMemo(() => {
    if (colors == DEFAULT_THEME_COLORS) {
      return schraTheme
    }
    return extendTheme(
      {
        colors: {
          accent: generatePalette(colors?.accent),
          primary: generatePalette(colors?.primary),
          secondary: generatePalette(colors?.secondary)
        }
      },
      schraTheme
    )
  }, [colors])

  return (
    <brandContext.Provider value={{colors, setColors}}>
      <ChakraProvider colorModeManager={localStorageManager} theme={currentTheme}>
        {children}
      </ChakraProvider>
    </brandContext.Provider>
  )
}
