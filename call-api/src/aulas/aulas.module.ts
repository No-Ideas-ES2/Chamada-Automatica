import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { TurmasModule } from 'src/turmas/turmas.module'
import { Aula } from './aula.entity'
import { AulasController } from './aulas.controller'
import AulasService from './aulas.service'

@Module({
  imports: [TypeOrmModule.forFeature([Aula]), TurmasModule],
  controllers: [AulasController],
  providers: [AulasService],
  exports: [AulasService],
})
export class AulasModule {}
