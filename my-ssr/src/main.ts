import { join } from 'path'
import { NestFactory } from '@nestjs/core'
import { NestExpressApplication } from '@nestjs/platform-express'
import { initialSSRDevProxy, loadConfig, getCwd } from 'ssr-server-utils'

import { AppModule } from './app.module'

async function bootstrap (): Promise<void> {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)
  await initialSSRDevProxy(app, {
    express: true
  })
  app.enableCors({
    origin: true
  })
  app.useStaticAssets(join(getCwd(), './build'))
  app.setGlobalPrefix('/children')
  const { serverPort } = loadConfig()
  await app.listen(serverPort)
}

bootstrap().catch(err => {
  console.log(err)
  process.exit(1)
})
