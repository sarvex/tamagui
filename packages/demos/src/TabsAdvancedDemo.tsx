import { useRef, useState } from 'react'
import {
  AnimatePresence,
  Button,
  H5,
  SizableText,
  Stack,
  TabTriggerLayout,
  Tabs,
  TabsTriggerProps,
  XStack,
  YStack,
  styled,
} from 'tamagui'

const demos = ['background', 'underline'] as const

export const TabsAdvancedDemo = () => {
  const [demoIndex, setDemoIndex] = useState(0)
  const demo = demos[demoIndex]
  return (
    <>
      {demo === 'underline' ? <TabsAdvancedUnderline /> : <TabsAdvancedBackground />}

      <XStack alignItems="center" space position="absolute" bottom="$3" left="$4" $xxs={{ display: 'none' }}>
        <Button size="$2" onPress={() => setDemoIndex((x) => (x + 1) % demos.length)}>
          {demo}
        </Button>
      </XStack>
    </>
  )
}

const TabsAdvancedBackground = () => {
  const [tabState, setTabState] = useState<{
    currentTab: string
    /**
     * Layout of the trigger user might intend to select (hovering / focusing)
     */
    intentAt: TabTriggerLayout | null
    /**
     * Layout of the trigger user selected
     */
    activeAt: TabTriggerLayout | null
    /**
     * Used to get the direction of activation for animating the active indicator
     */
    prevActiveAt: TabTriggerLayout | null
  }>({
    activeAt: null,
    currentTab: 'tab1',
    intentAt: null,
    prevActiveAt: null,
  })

  const setCurrentTab = (currentTab: string) => setTabState({ ...tabState, currentTab })
  const setIntentIndicator = (intentAt) => setTabState({ ...tabState, intentAt })
  const setActiveIndicator = (activeAt) =>
    setTabState({ ...tabState, prevActiveAt: tabState.activeAt, activeAt })
  const { activeAt, intentAt, prevActiveAt, currentTab } = tabState

  /**
   * -1: from left
   *  0: n/a
   *  1: from right
   */
  const direction = (() => {
    if (!activeAt || !prevActiveAt || activeAt.x === prevActiveAt.x) {
      return 0
    }
    return activeAt.x > prevActiveAt.x ? -1 : 1
  })()

  const enterVariant =
    direction === 1 ? 'isLeft' : direction === -1 ? 'isRight' : 'defaultFade'
  const exitVariant =
    direction === 1 ? 'isRight' : direction === -1 ? 'isLeft' : 'defaultFade'

  const handleOnInteraction: TabsTriggerProps['onInteraction'] = (type, layout) => {
    if (type === 'select') {
      setActiveIndicator(layout)
    } else {
      setIntentIndicator(layout)
    }
  }

  return (
    <Tabs
      value={currentTab}
      onValueChange={setCurrentTab}
      orientation="horizontal"
      size="$3"
      padding="$2"
      height={150}
      flexDirection="column"
      activationMode="manual"
    >
      <Tabs.List
        loop={false}
        aria-label="Manage your account"
        disablePassBorderRadius
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
            width={activeAt.width}
            height={activeAt.height}
            x={activeAt.x}
            y={activeAt.y}
          />
        )}

        <Tabs.Trigger value="tab1" onInteraction={handleOnInteraction}>
          <SizableText>Profile</SizableText>
        </Tabs.Trigger>
        <Tabs.Trigger value="tab2" onInteraction={handleOnInteraction}>
          <SizableText>Connections</SizableText>
        </Tabs.Trigger>
        <Tabs.Trigger value="tab3" onInteraction={handleOnInteraction}>
          <SizableText>Notifications</SizableText>
        </Tabs.Trigger>
      </Tabs.List>

      <AnimatePresence
        exitBeforeEnter
        enterVariant={enterVariant}
        exitVariant={exitVariant}
      >
        <AnimatedYStack key={currentTab} animation="100ms" x={0} opacity={1} flex={1}>
          <Tabs.Content value={currentTab} forceMount flex={1} justifyContent="center">
            <H5 textAlign="center">{currentTab}</H5>
          </Tabs.Content>
        </AnimatedYStack>
      </AnimatePresence>
    </Tabs>
  )
}

const TabsAdvancedUnderline = () => {
  const [tabState, setTabState] = useState<{
    currentTab: string
    /**
     * Layout of the trigger user might intend to select (hovering / focusing)
     */
    intentAt: TabTriggerLayout | null
    /**
     * Layout of the trigger user selected
     */
    activeAt: TabTriggerLayout | null
    /**
     * Used to get the direction of activation for animating the active indicator
     */
    prevActiveAt: TabTriggerLayout | null
  }>({
    activeAt: null,
    currentTab: 'tab1',
    intentAt: null,
    prevActiveAt: null,
  })

  const setCurrentTab = (currentTab: string) => setTabState({ ...tabState, currentTab })
  const setIntentIndicator = (intentAt) => setTabState({ ...tabState, intentAt })
  const setActiveIndicator = (activeAt) =>
    setTabState({ ...tabState, prevActiveAt: tabState.activeAt, activeAt })
  const { activeAt, intentAt, prevActiveAt, currentTab } = tabState

  /**
   * -1: from left
   *  0: n/a
   *  1: from right
   */
  const direction = (() => {
    if (!activeAt || !prevActiveAt || activeAt.x === prevActiveAt.x) {
      return 0
    }
    return activeAt.x > prevActiveAt.x ? -1 : 1
  })()

  const enterVariant =
    direction === 1 ? 'isLeft' : direction === -1 ? 'isRight' : 'defaultFade'
  const exitVariant =
    direction === 1 ? 'isRight' : direction === -1 ? 'isLeft' : 'defaultFade'

  const handleOnInteraction: TabsTriggerProps['onInteraction'] = (type, layout) => {
    if (type === 'select') {
      setActiveIndicator(layout)
    } else {
      setIntentIndicator(layout)
    }
  }

  return (
    <Tabs
      value={currentTab}
      onValueChange={setCurrentTab}
      orientation="horizontal"
      size="$3"
      padding="$2"
      height={150}
      flexDirection="column"
      activationMode="manual"
    >
      <YStack borderColor="$color3" borderBottomWidth="$0.5">
        <Tabs.List
          loop={false}
          aria-label="Manage your account"
          disablePassBorderRadius
          borderBottomLeftRadius={0}
          borderBottomRightRadius={0}
          paddingBottom="$1.5"
        >
          {intentAt && (
            <TabsRovingIndicator
              width={intentAt.width}
              height="$0.25"
              x={intentAt.x}
              borderRadius={0}
              bottom={-3}
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

          <Tabs.Trigger value="tab1" onInteraction={handleOnInteraction}>
            <SizableText>Profile</SizableText>
          </Tabs.Trigger>
          <Tabs.Trigger value="tab2" onInteraction={handleOnInteraction}>
            <SizableText>Connections</SizableText>
          </Tabs.Trigger>
          <Tabs.Trigger value="tab3" onInteraction={handleOnInteraction}>
            <SizableText>Notifications</SizableText>
          </Tabs.Trigger>
        </Tabs.List>
      </YStack>

      <AnimatePresence
        exitBeforeEnter
        enterVariant={enterVariant}
        exitVariant={exitVariant}
      >
        <AnimatedYStack key={currentTab} animation="100ms" x={0} opacity={1} flex={1}>
          <Tabs.Content value={currentTab} forceMount flex={1} justifyContent="center">
            <H5 textAlign="center">{currentTab}</H5>
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
