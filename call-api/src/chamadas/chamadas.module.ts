import { Module } from '@nestjs/common'
import { ChamadasService } from './chamadas.service'
import { ChamadasController } from './chamadas.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Chamada } from './chamada.entity'
import { Presenca } from 'src/presencas/presenca.entity'
import { UsuariosModule } from 'src/usuarios/usuarios.module'
import { AulasModule } from 'src/aulas/aulas.module'

@Module({
  imports: [TypeOrmModule.forFeature([Chamada, Presenca]), AulasModule, UsuariosModule],
  providers: [ChamadasService],
  controllers: [ChamadasController],
})
export class ChamadasModule {}
