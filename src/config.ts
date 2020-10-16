const debug = process.env.NODE_ENV !== 'production'

export default {
  debug,
  baseUrl: debug ? 'https://url.development/api' : 'https://url.production/api',
}
