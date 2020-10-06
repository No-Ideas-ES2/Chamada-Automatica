import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { UsuariosService } from 'src/usuarios/usuarios.service'
import { Repository } from 'typeorm'
import { Disciplina } from './disciplina.entity'
import { AtualizarDisciplinaDto } from './dtos/atualizar-disciplina.dto.'
import { CriarDisciplinaDto } from './dtos/criar-disciplina.dto'

@Injectable()
export class DisciplinasService {
  // private readonly logger = new Logger(DisciplinaService.name);

  constructor(
    @InjectRepository(Disciplina)
    private readonly repositorio: Repository<Disciplina>,
    private readonly usuarioService: UsuariosService
  ) {}

  buscarTodas(): Promise<Disciplina[]> {
    return this.repositorio.find()
  }

  buscarPorId(id: string): Promise<Disciplina> {
    return this.buscarDisciplina(id)
  }

  async criar(criarDisciplina: CriarDisciplinaDto): Promise<Disciplina> {
    try {
      const disciplina = this.repositorio.create(criarDisciplina)
      return this.repositorio.save(disciplina)
    } catch (error) {
      console.error(error)
      throw new InternalServerErrorException(error.message)
    }
  }

  async atualizar(id: string, atualizarDisciplina: AtualizarDisciplinaDto): Promise<Disciplina> {
    try {
      const disciplina = await this.repositorio.findOneOrFail(id)
      this.repositorio.merge(disciplina, atualizarDisciplina)
      return this.repositorio.save(disciplina)
    } catch (error) {
      console.error(error)
      throw new InternalServerErrorException(error.message)
    }
  }

  async remover(id: string): Promise<void> {
    this.buscarDisciplina(id)
    this.repositorio.softDelete(id)
  }

  private async buscarDisciplina(id: string): Promise<Disciplina> {
    const disciplina = this.repositorio.findOne(id)
    if (disciplina) {
      return disciplina
    }
    throw new NotFoundException('A disciplina não existe!')
  }
}
