import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Disciplina } from './disciplina.entity'
import { DisciplinasController } from './disciplinas.controller'
import { DisciplinasService } from './disciplinas.service'

@Module({
  imports: [TypeOrmModule.forFeature([Disciplina])],
  controllers: [DisciplinasController],
  providers: [DisciplinasService],
})
export class DisciplinaModule {}
