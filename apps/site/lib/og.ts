import { getURL } from './helpers'

export const getOgUrl = (
  type: 'component' | 'default',
  params: Record<string, string | undefined>
) => {
  const q = new URLSearchParams()
  q.append('type', type)
  for (const param of Object.keys(params)) {
    const val = params[param]
    if (typeof val !== 'undefined') {
      q.append(param, val)
    }
  }

  return `${getURL()}/api/og?${q.toString()}`
}
