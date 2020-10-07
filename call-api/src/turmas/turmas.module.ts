import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UsuariosModule } from 'src/usuarios/usuarios.module'
import { Turma } from './turma.entity'
import { TurmasController } from './turmas.controller'
import { TurmasService } from './turmas.service'

@Module({
  imports: [TypeOrmModule.forFeature([Turma]), UsuariosModule],
  controllers: [TurmasController],
  providers: [TurmasService],
  exports: [TurmasService],
})
export class TurmasModule {}
