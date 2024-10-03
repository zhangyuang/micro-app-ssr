import { join } from 'path'
import { NestFactory } from '@nestjs/core'
import { NestExpressApplication } from '@nestjs/platform-express'
import { initialSSRDevProxy, loadConfig, getCwd } from 'ssr-server-utils'

import { AppModule } from './app.module'

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)
  await initialSSRDevProxy(app, {
    express: true
  })
  const options = {
    setHeaders: (res) => {
      res.setHeader('Access-Control-Allow-Origin', '*')
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
    }
  }
  app.useStaticAssets(join(getCwd(), './build'), options)
  app.useStaticAssets(join(getCwd(), './build/client'), options)
  app.useStaticAssets(join(getCwd(), './public'))
  app.setGlobalPrefix('/children')
  const { serverPort } = loadConfig()
  app.enableCors()
  await app.listen(serverPort)
}

bootstrap().catch(err => {
  console.log(err)
  process.exit(1)
})
