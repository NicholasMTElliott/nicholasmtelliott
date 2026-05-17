const HOME_EXPERIMENT_COOKIE = 'nme_ab_home'
const HOME_VARIANTS = {
  control: '/',
  em_home: '/variants/home-em/',
}
const HOME_VARIANT_NAMES = Object.keys(HOME_VARIANTS)
const COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 30

const parseCookies = cookieHeader => {
  if (!cookieHeader) {
    return {}
  }

  return Object.fromEntries(
    cookieHeader
      .split(';')
      .map(cookie => cookie.trim().split('='))
      .filter(([name, value]) => name && value)
      .map(([name, value]) => [name, decodeURIComponent(value)]),
  )
}

const pickHomeVariant = () => (Math.random() < 0.5 ? 'em_home' : 'control')

const getKnownHomeVariant = request => {
  const cookies = parseCookies(request.headers.get('Cookie'))
  const variant = cookies[HOME_EXPERIMENT_COOKIE]

  return HOME_VARIANT_NAMES.includes(variant) ? variant : null
}

const withExperimentHeaders = (response, variant, shouldSetCookie) => {
  const headers = new Headers(response.headers)
  headers.set('x-ab-home', variant)

  if (shouldSetCookie) {
    headers.append(
      'Set-Cookie',
      `${HOME_EXPERIMENT_COOKIE}=${encodeURIComponent(variant)}; Path=/; Max-Age=${COOKIE_MAX_AGE_SECONDS}; SameSite=Lax; Secure`,
    )
  }

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  })
}

export async function onRequest(context) {
  const { request, next, env } = context
  const url = new URL(request.url)

  if (url.pathname !== '/' || !['GET', 'HEAD'].includes(request.method)) {
    return next()
  }

  const existingVariant = getKnownHomeVariant(request)
  const variant = existingVariant ?? pickHomeVariant()
  const shouldSetCookie = !existingVariant

  if (variant === 'control') {
    const response = await next()
    return withExperimentHeaders(response, variant, shouldSetCookie)
  }

  const variantUrl = new URL(request.url)
  variantUrl.pathname = HOME_VARIANTS[variant]
  const variantRequest = new Request(variantUrl.toString(), request)
  const response = await env.ASSETS.fetch(variantRequest)

  return withExperimentHeaders(response, variant, shouldSetCookie)
}
