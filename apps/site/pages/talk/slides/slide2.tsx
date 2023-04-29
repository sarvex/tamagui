import { Code, Cpu, Layers } from '@tamagui/lucide-icons'
import { Slide } from 'components/Slide'
import { memo } from 'react'
import { Paragraph, XStack, YStack } from 'tamagui'

import { IconStack } from '../../../components/IconStack'

export default memo(() => {
  return (
    <Slide
      title="What is Tamagui"
      theme="blue"
      // steps={[
      //   [
      //     {
      //       type: 'bullet-point',
      //       content: [
      //         {
      //           type: 'code-inline',
      //           content: `@tamagui/core`,
      //         },
      //         {
      //           type: 'bullet-point',
      //           content: [
      //             {
      //               type: 'text',
      //               content: (
      //                 <>
      //                   Universal style library{' '}
      //                   <span style={{ opacity: 0.5 }}>(Native + Web)</span>
      //                 </>
      //               ),
      //             },
      //           ],
      //         },
      //       ],
      //     },
      //     {
      //       type: 'bullet-point',
      //       content: [
      //         {
      //           type: 'code-inline',
      //           content: `@tamagui/static`,
      //         },
      //         {
      //           type: 'bullet-point',
      //           content: [
      //             {
      //               type: 'text',
      //               content: `Optimizing compiler that works with core`,
      //             },
      //           ],
      //         },
      //       ],
      //     },
      //     {
      //       type: 'bullet-point',
      //       content: [
      //         {
      //           type: 'code-inline',
      //           content: `tamagui`,
      //         },
      //         {
      //           type: 'bullet-point',
      //           content: [
      //             {
      //               type: 'text',
      //               content: `Complete universal component kit`,
      //             },
      //           ],
      //         },
      //       ],
      //     },
      //   ],
      // ]}
    >
      <XStack
        flex={1}
        overflow="hidden"
        maxWidth="100%"
        space="$8"
        flexWrap="nowrap"
        px="$2"
        mb={-8}
        py="$4"
        $sm={{ flexDirection: 'column' }}
        $gtSm={{
          px: '$6',
        }}
      >
        <Section theme="green">
          <IconStack>
            <Code size="$4" color="var(--color9)" />
          </IconStack>
          <Paragraph fontFamily="$silkscreen" fontSize="$10">
            Core
          </Paragraph>
          <Paragraph o={0.7} size="$10">
            "Universal" style library
          </Paragraph>
        </Section>

        <Section theme="blue">
          <IconStack>
            <Cpu size="$4" color="var(--color9)" />
          </IconStack>
          <Paragraph fontFamily="$silkscreen" fontSize="$10">
            Static
          </Paragraph>
          <Paragraph o={0.7} size="$10">
            Optimizing compiler for React
          </Paragraph>
        </Section>

        <Section theme="purple">
          <IconStack>
            <Layers size="$4" color="var(--color9)" />
          </IconStack>
          <Paragraph fontFamily="$silkscreen" fontSize="$10">
            Tamagui
          </Paragraph>
          <Paragraph o={0.7} size="$10">
            UI kit that adapts to each platform
          </Paragraph>
        </Section>
      </XStack>
    </Slide>
  )
})

const Section = (props: YStackProps) => (
  <YStack
    width="33%"
    space
    $sm={{ width: 'auto', maxWidth: 500, mx: 'auto' }}
    flexShrink={1}
    {...props}
  />
)
