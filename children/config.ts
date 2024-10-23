import type { UserConfig } from 'ssr-types'

const userConfig: UserConfig = {
  prefix: '/children',
  clientPrefix: '/main/children',
  publicPath: 'http://localhost:3000',
  wrapMicroScope: true
}

export { userConfig }
