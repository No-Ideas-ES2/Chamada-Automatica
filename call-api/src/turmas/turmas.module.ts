import { Module } from '@nestjs/common'
import { TurmasController } from './turmas.controller'
import { TurmasService } from './turmas.service'

@Module({
  controllers: [TurmasController],
  providers: [TurmasService],
})
export class TurmasModule {}
