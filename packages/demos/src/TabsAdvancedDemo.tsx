import { useRef, useState } from 'react'
import {
  AnimatePresence,
  H5,
  SizableText,
  Stack,
  TabLayout,
  Tabs,
  TabsTriggerProps,
  YStack,
  styled,
} from 'tamagui'

export const TabsAdvancedDemo = () => {
  const [{ activeAt, currentTab, intentAt }, setTabState] = useState<{
    /**
     * current value of the tab
     */
    currentTab: string
    /**
     * Layout of the trigger user might intend to select (hovering / focusing)
     */
    intentAt: TabLayout | null
    /**
     * Layout of the trigger user selected
     */
    activeAt: TabLayout | null
  }>({
    currentTab: 'tab1',
    activeAt: null,
    intentAt: null,
  })

  const prevActiveAt = useRef<TabLayout | null>(null)

  const handleUpdateIntentAt = (newSize: TabLayout | null) => {
    setTabState({
      currentTab,
      activeAt,
      intentAt: newSize,
    })
  }

  const handleUpdateActiveAt = (newSize: TabLayout | null) => {
    prevActiveAt.current = activeAt
    setTabState({ currentTab, intentAt, activeAt: newSize })
  }

  const handleUpdateCurrentTab = (newTab: string) => {
    setTabState({ intentAt, activeAt, currentTab: newTab })
  }

  /**
   * -1: from left
   *  0: n/a
   *  1: from right
   */
  const direction = (() => {
    if (!activeAt || !prevActiveAt.current || activeAt.x === prevActiveAt.current.x) {
      return 0
    }
    return activeAt.x > prevActiveAt.current.x ? -1 : 1
  })()

  const enterVariant =
    direction === 1 ? 'isLeft' : direction === -1 ? 'isRight' : 'defaultFade'
  const exitVariant =
    direction === 1 ? 'isRight' : direction === -1 ? 'isLeft' : 'defaultFade'

  const handleOnInteraction: TabsTriggerProps['onInteraction'] = (type, layout) => {
    if (type === 'select') {
      handleUpdateActiveAt(layout)
    } else {
      handleUpdateIntentAt(layout)
    }
  }

  return (
    <Tabs
      value={currentTab}
      onValueChange={handleUpdateCurrentTab}
      orientation="horizontal"
      br="$4"
      size="$3"
      p="$2"
      height={150}
      flexDirection="column"
      activationMode="manual"
    >
      <YStack borderColor="$color3" borderBottomWidth="$0.5">
        <Tabs.List
          loop={false}
          aria-label="Manage your account"
          disablePassBorderRadius
          overflow="visible"
          pb="$1.5"
        >
          {intentAt && (
            <TabsRovingIndicator
              width={intentAt.width}
              height={intentAt.height}
              x={intentAt.x}
              y={intentAt.y}
            />
          )}

          {activeAt && (
            <TabsRovingIndicator
              theme="active"
              active
              width={activeAt.width}
              height="$0.25"
              x={activeAt.x}
              borderRadius={0}
              bottom={-3}
            />
          )}

          <Tabs.Tab unstyled value="tab1" onInteraction={handleOnInteraction}>
            <SizableText>Profile</SizableText>
          </Tabs.Tab>
          <Tabs.Tab unstyled value="tab2" onInteraction={handleOnInteraction}>
            <SizableText>Connections</SizableText>
          </Tabs.Tab>
          <Tabs.Tab unstyled value="tab3" onInteraction={handleOnInteraction}>
            <SizableText>Notifications</SizableText>
          </Tabs.Tab>
        </Tabs.List>
      </YStack>

      <AnimatePresence
        exitBeforeEnter
        enterVariant={enterVariant}
        exitVariant={exitVariant}
      >
        <AnimatedYStack key={currentTab} animation="100ms" x={0} o={1} f={1}>
          <Tabs.Content value={currentTab} forceMount f={1} jc="center">
            <H5 ta="center">{currentTab}</H5>
          </Tabs.Content>
        </AnimatedYStack>
      </AnimatePresence>
    </Tabs>
  )
}

const TabsRovingIndicator = styled(Stack, {
  position: 'absolute',
  backgroundColor: '$color5',
  opacity: 1,
  animation: '100ms',
  borderRadius: '$4',

  variants: {
    active: {
      true: {
        backgroundColor: '$color8',
      },
    },
  },
})

const AnimatedYStack = styled(YStack, {
  variants: {
    isLeft: { true: { x: -25, opacity: 0 } },
    isRight: { true: { x: 25, opacity: 0 } },
    defaultFade: { true: { opacity: 0 } },
  } as const,
})
