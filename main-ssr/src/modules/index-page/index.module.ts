import { Module } from '@nestjs/common'
import { AppController } from './index.controller'
import { ApiService } from './index.service'

@Module({
  imports: [

  ],
  controllers: [AppController],
  providers: [ApiService]
})

export class indexModule {}
