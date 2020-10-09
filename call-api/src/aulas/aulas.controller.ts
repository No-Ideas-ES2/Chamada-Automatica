import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common'
import { UUIDPipe } from 'src/common/pipes/params-pips.pipe'
import { Aula } from './aula.entity'
import { AulasService } from './aulas.service'
import AtualizarAulaDto from './dtos/atualizar-aula.dto'
import CriarAulaDto from './dtos/criar-aula.dto'

@Controller('api/aulas')
export class AulasController {
  constructor(private readonly aulasService: AulasService) {}

  @Get()
  async buscarTodas(): Promise<Aula[]> {
    return this.aulasService.buscarTodas()
  }

  @Post()
  @UsePipes(ValidationPipe)
  async criar(@Body() criarAula: CriarAulaDto): Promise<Aula> {
    return this.aulasService.criar(criarAula)
  }

  @Get('/:id')
  async buscarPorId(@Param('id', UUIDPipe) id: string): Promise<Aula> {
    return this.aulasService.buscarPorId(id)
  }

  @Put('/:id')
  @UsePipes(ValidationPipe)
  async atualizar(@Param('id', UUIDPipe) id: string, @Body() atualizarAula: AtualizarAulaDto): Promise<Aula> {
    return this.aulasService.atualizar(id, atualizarAula)
  }

  @Delete('/:id')
  async remover(@Param('id', UUIDPipe) id: string): Promise<void> {
    return this.aulasService.remover(id)
  }
}
