import { TamaguiElement, composeRefs } from '@tamagui/core'
import { ScrollView, ScrollViewProps } from '@tamagui/scroll-view'
import { ScrollView as TamaguiScrollView } from '@tamagui/scroll-view'
import { forwardRef, useMemo, useRef, useState } from 'react'
import ActionSheet, { useScrollHandlers } from 'react-native-actions-sheet'

import { useSheetContext } from './SheetContext'
import { SheetScopedProps } from './types'

// TODO ideally would replicate https://github.com/ammarahm-ed/react-native-actions-sheet/blob/master/src/index.tsx

/* -------------------------------------------------------------------------------------------------
 * SheetScrollView
 * -----------------------------------------------------------------------------------------------*/

export const SheetScrollView = forwardRef<TamaguiElement, ScrollViewProps>(
  ({ __scopeSheet, children, ...props }: SheetScopedProps<ScrollViewProps>, parentRef) => {
    const context = useSheetContext('SheetScrollView', __scopeSheet)
    const scrollRef = useRef<any>()
    const scrollHandlers = useScrollHandlers(context.id, scrollRef)

    return (
      <TamaguiScrollView
        {...scrollHandlers}
        ref={composeRefs(scrollHandlers.ref as any, parentRef)}
        {...props}
      >
        {useMemo(() => children, [children])}
      </TamaguiScrollView>
    )
  }
)
