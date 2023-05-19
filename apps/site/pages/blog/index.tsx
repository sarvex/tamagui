import { getBlogLayout } from '@components/layouts/BlogLayout'
import { authors } from '@data/authors'
import { getAllFrontmatter } from '@lib/mdx'
import { NextLink } from 'components/NextLink'
import { NextSeo } from 'next-seo'
import { H2, Paragraph, Spacer, XStack } from 'tamagui'

import { ContainerLarge } from '../../components/Container'
import { TamaguiCard } from '../../components/TamaguiCard'

export default function Blog({ frontmatters }) {
  return (
    <>
      <NextSeo title="Blog — Tamagui" description="What's up with Tamagui." />
      <Spacer size="$7" />
      <H2 als="center" size="$8" theme="alt2" fontFamily="$silkscreen">
        Blog
      </H2>
      <ContainerLarge mt="$6" mb="$7">
        <XStack flexWrap="wrap" jc="space-between">
          {frontmatters.map((frontmatter) => (
            <NextLink key={frontmatter.title} href={frontmatter.slug} passHref>
              <TamaguiCard
                title={frontmatter.title}
                subTitle={
                  <Paragraph o={0.5} cursor="inherit" theme="alt1" size="$3">
                    {Intl.DateTimeFormat('en-US', {
                      month: 'short',
                      year: 'numeric',
                      day: 'numeric',
                    }).format(new Date(frontmatter.publishedAt || ''))}{' '}
                    by &nbsp;
                    {authors[frontmatter.by].name}
                  </Paragraph>
                }
              >
                {frontmatter.description}
              </TamaguiCard>
            </NextLink>
          ))}
        </XStack>
      </ContainerLarge>
    </>
  )
}

Blog.getLayout = getBlogLayout

export function getStaticProps() {
  const frontmatters = getAllFrontmatter('blog')
  const sortedFrontmatters = frontmatters.sort(
    (a, b) =>
      Number(new Date(b.publishedAt || '')) - Number(new Date(a.publishedAt || ''))
  )
  return { props: { frontmatters: sortedFrontmatters } }
}
