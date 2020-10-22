import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common'
import { UUIDPipe } from 'src/common/pipes/params-pips.pipe'
import { JwtAuthGuard } from '../auth/jwt-auth.guard'
import { Disciplina } from './disciplina.entity'
import { DisciplinasService } from './disciplinas.service'
import { AtualizarDisciplinaDto } from './dtos/atualizar-disciplina.dto.'
import { CriarDisciplinaDto } from './dtos/criar-disciplina.dto'

@Controller('api/disciplinas')
export class DisciplinasController {
  constructor(private disciplinasService: DisciplinasService) { }

  @Get()
  @UseGuards(JwtAuthGuard)
  async consultarTodas(): Promise<Disciplina | Disciplina[]> {
    return this.disciplinasService.buscarTodas()
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  @UsePipes(ValidationPipe)
  async criar(@Body() criarDisciplina: CriarDisciplinaDto): Promise<Disciplina> {
    return this.disciplinasService.criar(criarDisciplina)
  }

  @Get('/:id')
  @UseGuards(JwtAuthGuard)
  async consultar(@Param('id', UUIDPipe) id: string): Promise<Disciplina | Disciplina[]> {
    return this.disciplinasService.buscarPorId(id)
  }

  @Put('/:id')
  @UseGuards(JwtAuthGuard)
  @UsePipes(ValidationPipe)
  async atualizar(
    @Param('id', UUIDPipe) id: string,
    @Body() atualizarDisciplina: AtualizarDisciplinaDto
  ): Promise<Disciplina> {
    return this.disciplinasService.atualizar(id, atualizarDisciplina)
  }

  @Delete('/:id')
  @UseGuards(JwtAuthGuard)
  async remover(@Param('id', UUIDPipe) id: string): Promise<void> {
    this.disciplinasService.remover(id)
  }
}
