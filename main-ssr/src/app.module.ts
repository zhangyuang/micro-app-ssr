import { Module } from '@nestjs/common'
import { indexModule } from './modules/index-page/index.module'

@Module({
  imports: [indexModule]
})
export class AppModule {}
