import { Container } from '@components/Container'
import { GithubIcon } from '@components/GithubIcon'
import { getUserLayout } from '@components/layouts/UserLayout'
import { Notice } from '@components/Notice'
import { StudioQueueCard } from '@components/StudioQueueCard'
import { getDefaultAvatarImage } from '@lib/avatar'
import { Database } from '@lib/supabase-types'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { Provider } from '@supabase/supabase-js'
import { CheckCircle, LogOut, Star } from '@tamagui/lucide-icons'
import { ButtonLink } from 'app/Link'
import { useUser } from 'hooks/useUser'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import {
  Avatar,
  Button,
  H3,
  Paragraph,
  Separator,
  SizableText,
  Spinner,
  XStack,
  YStack,
} from 'tamagui'

export default function Page() {
  return (
    <>
      <NextSeo title="Account — Tamagui" description="A better universal UI system." />

      <Account />
    </>
  )
}

const Account = () => {
  const { isLoading, userDetails, user, teams } = useUser()

  if (isLoading) {
    return <Spinner my="$10" />
  }

  return (
    <Container f={1}>
      <XStack mt="$10" space>
        <Avatar circular size="$10">
          <Avatar.Image
            source={{
              uri:
                userDetails?.avatar_url ??
                getDefaultAvatarImage(userDetails?.full_name ?? user?.email ?? 'User'),
            }}
          />
        </Avatar>

        <YStack space="$3" ai="flex-start" jc="center" f={1}>
          <XStack jc="space-between" space ai="center">
            <YStack f={1}>
              <H3
                style={{
                  // @ts-ignore
                  wordBreak: 'break-word',
                }}
              >
                {userDetails?.full_name}
              </H3>
            </YStack>
          </XStack>
          <YStack space="$2">
            {teams.personal?.is_active && <SponsorBadge />}
            {teams.orgs
              ?.filter((team) => team.is_active)
              .map((org) => (
                <TeamBadge key={org.id} org={org} />
              ))}
          </YStack>
          <XStack>
            <ProfileContent />
          </XStack>
        </YStack>
      </XStack>

      <YStack>
        <UserSettings />
      </YStack>
    </Container>
  )
}

const SponsorBadge = () => {
  return (
    <Button theme="yellow" disabled icon={Star} size="$2">
      Personal Sponsor
    </Button>
  )
}

const TeamBadge = ({
  org,
}: {
  org: Pick<Database['public']['Tables']['teams']['Row'], 'name'>
}) => {
  return (
    <Button
      theme="blue"
      disabled
      // icon={
      //   <Avatar circular>
      //     <Avatar.Image source={{ uri: org.avatarUrl }} />
      //   </Avatar>
      // }
      size="$2"
    >
      <Button.Text size="$2">{org.name} Team (Sponsor)</Button.Text>
    </Button>
  )
}

const UserSettings = () => {
  const { signout } = useUser()

  return (
    <YStack space="$8" separator={<Separator />}>
      <YStack space="$6" id="profile"></YStack>

      <YStack space="$6" id="studio-queue">
        <QueueContent />
      </YStack>

      <YStack space="$6" id="sponsorship-status">
        <SizableText size="$8">Sponsorship Status</SizableText>
        <SponsorshipContent />
      </YStack>

      <YStack space="$6" id="connections">
        <SizableText size="$8">Connections</SizableText>
        <ConnectionsContent />
      </YStack>

      <Button
        f={1}
        onPress={() => {
          signout()
        }}
        icon={<LogOut />}
        size="$2"
        alignSelf="flex-end"
        accessibilityLabel="Logout"
      >
        Logout
      </Button>
    </YStack>
  )
}

const ProfileContent = () => {
  const { user, userDetails } = useUser()

  return (
    <XStack space="$4" separator={<Separator vertical />}>
      <Paragraph theme="alt1">{userDetails?.full_name}</Paragraph>
      <Paragraph theme="alt1">{user?.email}</Paragraph>
    </XStack>
  )
}

const QueueContent = () => {
  const { teams } = useUser()

  // if (accessStatus.access.studio.access) {
  //   return (
  //     <YStack space ai="flex-start">
  //       <SizableText>You have access to studio!</SizableText>
  //       <ButtonLink themeInverse href={studioRootDir}>
  //         Enter Studio
  //       </ButtonLink>
  //     </YStack>
  //   )
  // }

  if (!teams.main) return null

  return (
    <YStack gap="$4">
      <StudioQueueCard key={teams.main.id} teamId={teams.main.id} />
    </YStack>
  )

  // return (
  //   <YStack ai="flex-start" space>
  //     <SizableText>
  //       {accessStatus.access.studio.message} - You will get access{' '}
  //       {Intl.DateTimeFormat('en-US', {
  //         month: 'short',
  //         year: 'numeric',
  //         day: 'numeric',
  //       }).format(new Date(accessStatus.access.studio.accessDate))}
  //     </SizableText>
  //     <SponsorButton />
  //   </YStack>
  // )
}

const SponsorshipContent = () => {
  const { userDetails, teams } = useUser()
  // {/* TODO: get info of sponsorship here... tier, etc. */}

  if (!teams.main?.is_active) {
    return (
      <YStack space="$4" ai="flex-start">
        <SponsorButton />
        <YStack space>
          <Paragraph size="$6">
            You are not an sponsor. Become an sponsor to get early access to the studio
            and other upcoming features.
          </Paragraph>
          <Paragraph size="$5" theme="alt1">
            If you're a member of an organization that is sponsoring Tamagui, make sure
            tamagui has access to that org{' '}
            <Link
              style={{ color: 'var(--color12)' }}
              href={`https://github.com/settings/connections/applications/${process.env.NEXT_PUBLIC_GITHUB_AUTH_CLIENT_ID}`}
            >
              here
            </Link>
            .
          </Paragraph>
        </YStack>
      </YStack>
    )
  }

  return (
    <YStack gap="$4">
      <YStack>
        {teams.personal?.is_active && <Paragraph>You are a personal sponsor.</Paragraph>}
        {teams.orgs?.map((org) => (
          <Paragraph key={org.id}>
            You are a member of a sponsoring organization, {org.name}.
          </Paragraph>
        ))}
      </YStack>
      <SyncSponsorshipButton />
    </YStack>
  )
}

const SyncSponsorshipButton = () => {
  const [loading, setLoading] = useState(false)
  const syncWithGithub = async () => {
    setLoading(true)
    await fetch('/api/sponsorship-sync', { method: 'POST' })
      .then(() => {
        location.reload()
      })
      .finally(() => setLoading(false))
  }
  return (
    <Button
      theme="dark"
      size="$3"
      disabled={loading}
      onPress={syncWithGithub}
      iconAfter={loading ? <Spinner /> : null}
      {...(loading ? { opacity: 0.5 } : {})}
    >
      Sync With GitHub Sponsors
    </Button>
  )
}

const ConnectionsContent = () => {
  const { user } = useUser()
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<{ type?: string; content?: string }>({
    content: '',
    type: '',
  })
  const supabaseClient = useSupabaseClient()

  const handleOAuthSignIn = async (provider: Provider) => {
    if (user?.app_metadata.provider === 'github') {
      router.push(
        `https://github.com/settings/connections/applications/${process.env.NEXT_PUBLIC_GITHUB_AUTH_CLIENT_ID}`
      )
      return
    }
    setLoading(true)
    const { error } = await supabaseClient.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${window.location.origin}/account`,
        scopes: 'read:org',
      },
    })
    if (error) {
      setMessage({ type: 'error', content: error.message })
    }
    setLoading(false)
  }
  return (
    <YStack>
      {message.content && (
        <Notice>
          <Paragraph>{message.content}</Paragraph>
        </Notice>
      )}
      <Table
        data={{
          GitHub: (
            <XStack gap="$2">
              <Button
                theme="dark"
                disabled={loading}
                onPress={() => handleOAuthSignIn('github')}
                size="$3"
                icon={GithubIcon}
                iconAfter={CheckCircle}
              >
                {user?.app_metadata.provider === 'github'
                  ? 'Connected'
                  : 'Connect GitHub'}
              </Button>

              <SyncSponsorshipButton />
            </XStack>
          ),
        }}
      />
    </YStack>
  )
}

const Table = ({ data }: { data: Record<string, any> }) => {
  return (
    <YStack space="$2">
      {Object.entries(data).map(([key, value]) => (
        <XStack key={key} space>
          <SizableText f={1} fb={0}>
            {key}
          </SizableText>
          <XStack f={3} fb={0}>
            {typeof value === 'string' ? (
              <SizableText fontWeight="$10">{value}</SizableText>
            ) : (
              value
            )}
          </XStack>
        </XStack>
      ))}
    </YStack>
  )
}

const SponsorButton = () => {
  return (
    <ButtonLink
      href="https://github.com/sponsors/natew"
      theme="pink_alt1"
      icon={<Star />}
      size="$3"
    >
      Sponsor Tamagui
    </ButtonLink>
  )
}

Page.getLayout = getUserLayout
