import { Body, Controller, Get, Param, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common'
import { UUIDPipe } from 'src/common/pipes/params-pips.pipe'
import { AddAlunoTurmaDto } from './dtos/add-aluno-turma.dto'
import { CriarTurmaDto } from './dtos/criar-turma.dto'
import { Turma } from './turma.entity'
import { TurmasService } from './turmas.service'

@Controller('turmas')
export class TurmasController {
  constructor(private turmasService: TurmasService) {}

  @Get()
  async buscarTodas(@Query('idProfessor') idProfessor: string): Promise<Turma[]> {
    if (idProfessor) {
      return this.turmasService.buscarPorProfessor(idProfessor)
    }
    return this.turmasService.buscarTodas()
  }

  @Post()
  @UsePipes(ValidationPipe)
  async criar(@Body() criarTurma: CriarTurmaDto): Promise<Turma> {
    return this.turmasService.criar(criarTurma)
  }

  @Get('/:id')
  async buscarPorId(@Param('id', UUIDPipe) id: string): Promise<Turma> {
    return this.turmasService.buscarPorId(id)
  }

  @Post('/:id/alunos/')
  async adicionarUsuario(
    @Param('id', UUIDPipe) id: string,
    @Body() body: AddAlunoTurmaDto | AddAlunoTurmaDto[]
  ): Promise<void> {
    if (Array.isArray(body)) {
      const promises = body.map(addAluno => {
        return this.turmasService.adicionarAluno(id, addAluno.idAluno)
      })
      await Promise.all(promises).catch(e => {
        throw e
      })
    } else {
      await this.turmasService.adicionarAluno(id, body.idAluno)
    }
  }
}
