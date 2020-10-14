import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common'
import { UUIDPipe } from 'src/common/pipes/params-pips.pipe'
import CriarPresencaDto from 'src/presencas/dtos/criar-presenca.dto'
import { Presenca } from 'src/presencas/presenca.entity'
import { Chamada } from './chamada.entity'
import { ChamadasService } from './chamadas.service'
import AtualizarChamadaDto from './dtos/atualizar-chamada.dto'
import CriarChamadaDto from './dtos/criar-chamada.dto'

@Controller('api/chamadas')
export class ChamadasController {
  constructor(private readonly chamadasService: ChamadasService) {}

  @Get()
  async buscarChamadas(): Promise<Chamada[]> {
    return this.chamadasService.buscarTodasChamadas()
  }

  @Post()
  @UsePipes(ValidationPipe)
  async criarChamada(@Body() criarChamada: CriarChamadaDto): Promise<Chamada> {
    return this.chamadasService.criarChamada(criarChamada)
  }

  @Get('/:id')
  async buscarChamada(@Param('id', UUIDPipe) id: string): Promise<Chamada> {
    return this.chamadasService.buscarChamadaPorId(id)
  }

  @Put('/:id')
  @UsePipes(ValidationPipe)
  async atualizarChamada(
    @Param('id', UUIDPipe) id: string,
    @Body() atualizarChamada: AtualizarChamadaDto
  ): Promise<Chamada> {
    return this.chamadasService.atualizarChamada(id, atualizarChamada)
  }

  @Delete('/:id')
  async removerChamada(@Param('id', UUIDPipe) id: string): Promise<void> {
    return this.chamadasService.removerChamada(id)
  }

  @Get('/:idChamada/presencas')
  async buscarPresencas(@Param('idChamada', UUIDPipe) idChamada: string): Promise<Presenca[]> {
    return this.chamadasService.buscarPresencas(idChamada)
  }

  @Post('/:idChamada/presencas')
  @UsePipes(ValidationPipe)
  async adicionarPresenca(
    @Param('idChamada', UUIDPipe) idChamada: string,
    @Body() criarPresenca: CriarPresencaDto
  ): Promise<void> {
    return this.chamadasService.criarPresenca(idChamada, criarPresenca)
  }
}
