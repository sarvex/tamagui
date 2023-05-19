import { useMemo } from 'react'

import { FontLanguageContext } from '../contexts/FontLanguageContext'
import type { FontLanguageProps } from './FontLanguage.types'

export const FontLanguage = ({ children, ...props }: FontLanguageProps) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const value = useMemo(() => props, [JSON.stringify(props)])
  return (
    <FontLanguageContext.Provider value={value}>{children}</FontLanguageContext.Provider>
  )
}
