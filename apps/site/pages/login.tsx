import { getAuthLayout } from '@components/layouts/AuthLayout'
import { NextSeo } from 'next-seo'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { Provider } from '@supabase/supabase-js'
import { LogoIcon } from '@tamagui/logo'
import { useUser } from 'hooks/useUser'
import { FormEvent, useEffect, useRef, useState } from 'react'
import { Button, Input, Paragraph, Separator, Spinner, XStack, YStack } from 'tamagui'

import { GithubIcon } from '../components/GithubIcon'
import { Notice } from '../components/Notice'
import { useForwardToDashboard } from '../hooks/useForwardToDashboard'

const emailAuthDisabledFlag = true

export default function SignInPage() {
  return (
    <>
      <NextSeo title="Login — Tamagui" />
      <SignIn />
    </>
  )
}

function SignIn() {
  const supabaseClient = useSupabaseClient()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPasswordInput, setShowPasswordInput] = useState(false)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<{ type?: string; content?: string }>({
    type: '',
    content: '',
  })
  const { user } = useUser()
  const emailRef = useRef(null)

  useEffect(() => {
    // @ts-ignore
    emailRef.current?.focus()
  }, [])

  useForwardToDashboard()

  const handleSignin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setLoading(true)
    setMessage({})

    try {
      if (showPasswordInput) {
        const { error } = await supabaseClient.auth.signInWithPassword({
          email,
          password,
        })

        if (error) throw error
      } else {
        const { error } = await supabaseClient.auth.signInWithOtp({
          email,
          options: {
            emailRedirectTo: `${window.location.origin}/login`,
          },
        })
        if (error) throw error
        setMessage({
          type: 'note',
          content: 'Check your email for the magic link.',
        })
      }
    } catch (error) {
      setMessage({ type: 'error', content: error.message })
    } finally {
      setLoading(false)
    }
  }

  const handleOAuthSignIn = async (provider: Provider) => {
    setLoading(true)
    const { error } = await supabaseClient.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${window.location.origin}/login`,
        scopes: 'read:org',
      },
    })
    if (error) {
      setMessage({ type: 'error', content: error.message })
    }
    setLoading(false)
  }

  if (!user)
    return (
      <YStack mih="100vh" miw="100vw" ai="center" jc="center" p="$2">
        <YStack miw={300} maw={320} jc="space-between" p="$2" space="$4">
          <YStack mb="$4">
            <LogoIcon />
          </YStack>

          {Boolean(message.content) && (
            <Notice>
              <Paragraph>{message.content}</Paragraph>
            </Notice>
          )}

          <Button
            // @ts-ignore
            type="submit"
            disabled={loading}
            onClick={() => handleOAuthSignIn('github')}
            size="$4"
            icon={GithubIcon}
          >
            Continue with GitHub
          </Button>

          <Paragraph ta="center" color="$color8">
            Note: If you're a part of a sponsoring organization, you'll need to grant
            access to your organization when logging in to access sponsor benefits.
          </Paragraph>
          {!emailAuthDisabledFlag && (
            <>
              <XStack mx="$4" jc="center" space ai="center">
                <Separator />
                <Paragraph size="$2">Or</Paragraph>
                <Separator />
              </XStack>
              <YStack>
                {!showPasswordInput && (
                  <form onSubmit={handleSignin}>
                    <YStack space="$2">
                      <Input
                        autoComplete="email"
                        inputMode="email"
                        placeholder="Email"
                        // @ts-ignore
                        onSubmitEditing={handleSignin}
                        value={email}
                        onChange={(e) => setEmail(e.nativeEvent.text)}
                        ref={emailRef}
                        disabled={emailAuthDisabledFlag}
                      />
                      <Button
                        // @ts-expect-error
                        type="submit"
                        icon={loading ? <Spinner /> : null}
                        disabled={!email.length || emailAuthDisabledFlag}
                      >
                        Send magic link
                      </Button>
                    </YStack>
                  </form>
                )}

                {showPasswordInput && (
                  <form onSubmit={handleSignin}>
                    <YStack space="$2">
                      <Input
                        autoComplete="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.nativeEvent.text)}
                        // @ts-ignore
                        required
                        disabled={emailAuthDisabledFlag}
                      />
                      <Input
                        autoComplete="password"
                        secureTextEntry
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.nativeEvent.text)}
                        // @ts-ignore
                        required
                        disabled={emailAuthDisabledFlag}
                      />
                      <Button
                        // @ts-ignore
                        type="submit"
                        loading={loading}
                        disabled={
                          !password.length || !email.length || emailAuthDisabledFlag
                        }
                      >
                        Sign in
                      </Button>
                    </YStack>
                  </form>
                )}

                {emailAuthDisabledFlag && (
                  <YStack
                    pos="absolute"
                    left={-5}
                    right={-5}
                    top={-5}
                    bottom={-5}
                    ai="center"
                    jc="center"
                    br="$4"
                    className="backdrop-blur"
                  >
                    <Paragraph ta="center" mt="$2" col="$color9">
                      Email auth is disabled at the moment.
                    </Paragraph>
                  </YStack>
                )}
              </YStack>
            </>
          )}
          {/* <YStack space="$2" >
            <Paragraph
              tag="button"
              ta="center"
              size="$2"
              cursor="pointer"
              className="text-zinc-200 text-accent-9 hover:underline cursor-pointer"
              onPress={() => {
                if (showPasswordInput) setPassword('')
                setShowPasswordInput(!showPasswordInput)
                setMessage({})
              }}
            >
              Or sign in with {showPasswordInput ? 'magic link' : 'password'}
            </Paragraph>

            <Paragraph theme="alt2" ta="center" size="$2">
              Don't have an account?
              {` `}
              <Link href="/signup" style={{ fontWeight: '800' }}>
                Sign up.
              </Link>
            </Paragraph> 
          </YStack> */}
        </YStack>
      </YStack>
    )

  return (
    <YStack
      zIndex={10000000}
      backgroundColor="$background"
      justifyContent="center"
      pos="absolute"
      fullscreen
      alignItems="center"
    >
      <Spinner size="large" />
    </YStack>
  )
}

SignInPage.getLayout = getAuthLayout
