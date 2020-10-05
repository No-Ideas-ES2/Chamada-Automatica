import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UUIDPipe } from 'src/common/pipes/params-pips.pipe';
import { Disciplina } from './disciplina.entity';
import { DisciplinasService } from './disciplinas.service';
import { AtualizarDisciplinaDto } from './dtos/atualizar-disciplina.dto.';
import { CriarDisciplinaDto } from './dtos/criar-disciplina.dto';

@Controller('api/disciplinas')
export class DisciplinasController {
  constructor(private disciplinasService: DisciplinasService) {}

  @Get()
  async consultarTodas(): Promise<Disciplina | Disciplina[]> {
    return this.disciplinasService.buscarTodas();
  }

  @Get('/:id')
  async consultar(
    @Param('id', UUIDPipe) id: string,
  ): Promise<Disciplina | Disciplina[]> {
    return this.disciplinasService.buscarPorId(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  async criar(
    @Body() criarDisciplina: CriarDisciplinaDto,
  ): Promise<Disciplina> {
    return this.disciplinasService.criar(criarDisciplina);
  }

  @Put('/:id')
  @UsePipes(ValidationPipe)
  async atualizar(
    @Param('id', UUIDPipe) id: string,
    @Body() atualizarDisciplina: AtualizarDisciplinaDto,
  ): Promise<Disciplina> {
    return this.disciplinasService.atualizar(id, atualizarDisciplina);
  }

  @Delete('/:id')
  async remover(@Param('id', UUIDPipe) id: string): Promise<void> {
    this.disciplinasService.remover(id);
  }
}
