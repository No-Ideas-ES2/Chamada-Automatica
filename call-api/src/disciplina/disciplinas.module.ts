import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UsuariosModule } from 'src/usuarios/usuarios.module'
import { Disciplina } from './disciplina.entity'
import { DisciplinasController } from './disciplinas.controller'
import { DisciplinasService } from './disciplinas.service'

@Module({
  imports: [TypeOrmModule.forFeature([Disciplina]), UsuariosModule],
  controllers: [DisciplinasController],
  providers: [DisciplinasService],
})
export class DisciplinaModule {}
