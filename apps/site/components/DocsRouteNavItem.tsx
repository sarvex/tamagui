import { NextLink } from 'components/NextLink'
import * as React from 'react'
import { SizableText, Spacer, XStack, YStack } from 'tamagui'

import { NavItemProps } from './DocsPage'
import { ExternalIcon } from './ExternalIcon'

export const DocsRouteNavItem = React.memo(function DocsRouteNavItem({
  children,
  active,
  href,
  pending,
  ...props
}: NavItemProps) {
  const isExternal = href.startsWith('http')
  return (
    <NextLink href={href}>
      <XStack
        className="docs-nav-item all ease-in ms150"
        {...props}
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        ai="center"
        jc="flex-end"
        px="$4"
        opacity={pending ? 0.25 : 1}
        pressStyle={{
          backgroundColor: '$background',
        }}
        pointerEvents={pending ? 'none' : 'auto'}
        pos="relative"
        $sm={{
          py: '$1',
        }}
      >
        <YStack
          className="sidebar-indicator"
          o={active ? 1 : 0}
          pos="absolute"
          t={0}
          b={0}
          r={0}
          w={1}
          bc={active ? '$color' : '$backgroundHover'}
        />
        <SizableText
          className="name"
          size="$4"
          userSelect="none"
          opacity={0.65}
          theme={active ? null : 'alt1'}
          ta="right"
          {...(active && {
            fow: '700',
            opacity: 1,
          })}
        >
          {children}
        </SizableText>
        {isExternal && (
          <XStack opacity={0.5}>
            <Spacer size="$2" />
            <ExternalIcon />
          </XStack>
        )}
        {pending ? (
          <>
            <XStack flex={1} />
            <SizableText
              theme="alt2"
              size="$1"
              px="$2"
              py="$1"
              bc="$background"
              borderRadius="$3"
            >
              WIP
            </SizableText>
          </>
        ) : null}
      </XStack>
    </NextLink>
  )
})
